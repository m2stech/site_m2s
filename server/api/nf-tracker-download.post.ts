import { createClient } from '@supabase/supabase-js'

interface DownloadPayload {
  email?: string
  fileName?: string
  source?: string
  userAgent?: string | null
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_SOURCES = new Set(['hero', 'middle', 'bottom'])

export default defineEventHandler(async (event) => {
  const body = await readBody<DownloadPayload>(event)

  if (!body?.email || !EMAIL_REGEX.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'E-mail inválido.' })
  }

  if (!body.source || !VALID_SOURCES.has(body.source)) {
    throw createError({ statusCode: 400, statusMessage: 'Origem de download inválida.' })
  }

  const config = useRuntimeConfig()
  const supabaseUrl =
    config.public.supabaseUrl || process.env.NUXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
  const supabaseServiceRoleKey =
    config.supabaseServiceRoleKey ||
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    ''

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Missing Supabase env in server runtime', {
      hasRuntimePublicUrl: Boolean(config.public.supabaseUrl),
      hasRuntimeServiceKey: Boolean(config.supabaseServiceRoleKey),
      hasEnvNuxtPublicUrl: Boolean(process.env.NUXT_PUBLIC_SUPABASE_URL),
      hasEnvSupabaseUrl: Boolean(process.env.SUPABASE_URL),
      hasEnvNuxtServiceKey: Boolean(process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY),
      hasEnvSupabaseServiceKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    })
    throw createError({ statusCode: 500, statusMessage: 'Configuração Supabase ausente.' })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  })

  const { error } = await supabase.from('nf_tracker_downloads').insert({
    email: body.email,
    file_name: body.fileName || 'NF_Tracker.rar',
    source: body.source,
    user_agent: body.userAgent || null,
  })

  if (error) {
    console.error('Supabase server insert error:', error)
    throw createError({ statusCode: 500, statusMessage: 'Falha ao registrar download.' })
  }

  return { ok: true }
})
