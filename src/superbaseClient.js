import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_URL

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://xobsssqyslopxuyzxaek.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYnNzc3F5c2xvcHh1eXp4YWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDI1NzAsImV4cCI6MTk4OTgxODU3MH0.KutwOYh7h0sMgpi2o0ohXemaPW2ayX5XvllamuZT__I');