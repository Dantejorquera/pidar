// ========================================
// CONFIGURACIÓN DE SUPABASE
// ========================================

const SUPABASE_URL = "https://taarhqydsmufujlxlgto.supabase.co";

const SUPABASE_KEY = "sb_publishable_ci0T_RSCR14Cv2uXlJ6JRA_AoJqA4ch";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);