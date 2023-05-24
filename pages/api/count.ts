import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

async function getViewCount(slug: string, supabase: any) {
    const { data, error } = await supabase.from('views').select('views').eq('slug', slug);
      try{
        return data[0].views;
      }
      catch{
        const { error } = await supabase
        .from('views')
        .insert({ slug: slug, views: 1 })
        return 1;
      }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const supabase = createClient("https://roqnxtjaksygbykkknwl.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvcW54dGpha3N5Z2J5a2trbndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MTc3NTMsImV4cCI6MjAwMDQ5Mzc1M30.BkypHXIv8owph1-jvT-UcMJMEmAyESDE6M5yFCyRKfQ")
    let views = await getViewCount(req.body.slug, supabase);
    res.send(views);
}



