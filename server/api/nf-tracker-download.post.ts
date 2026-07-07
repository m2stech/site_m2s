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
  if (!config.public.supabaseUrl || !config.supabaseServiceRoleKey) {
    throw createError({ statusCode: 500, statusMessage: 'Configuração Supabase ausente.' })
  }

  const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey, {
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
