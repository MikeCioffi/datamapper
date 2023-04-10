import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nuctcanzbnzlvzjpovui.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51Y3RjYW56Ym56bHZ6anBvdnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4ODkzMjUsImV4cCI6MTk5NjQ2NTMyNX0.VpuBShLM-y26Ba9zoP2v1yka5MfXpn3mx3EWy50TYOw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);