-- ============================================================
-- Tabela: nf_tracker_downloads
-- Registra os downloads do NF Tracker após captura de e-mail
-- ============================================================

CREATE TABLE nf_tracker_downloads (
  id            uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  email         text        NOT NULL,
  downloaded_at timestamptz DEFAULT now() NOT NULL,
  file_name     text,
  source        text,       -- 'hero' | 'middle' | 'bottom'
  user_agent    text,
  created_at    timestamptz DEFAULT now() NOT NULL
);

-- Índice para buscas por e-mail
CREATE INDEX idx_nft_downloads_email ON nf_tracker_downloads (email);

-- ── Permissões de tabela (necessário além do RLS) ───────────
-- Sem este GRANT o anon role recebe 403 mesmo com policy correta
GRANT INSERT ON TABLE nf_tracker_downloads TO anon;

-- ── Row Level Security ──────────────────────────────────────
ALTER TABLE nf_tracker_downloads ENABLE ROW LEVEL SECURITY;

-- Permite INSERT anônimo (anon key no client-side)
CREATE POLICY "Permite inserção anônima"
  ON nf_tracker_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Somente service_role pode ler (admin / dashboard Supabase)
CREATE POLICY "Somente service_role pode ler"
  ON nf_tracker_downloads
  FOR SELECT
  USING (auth.role() = 'service_role');
