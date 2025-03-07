import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from('ventas')
      .select('mes, venta') // Cambiamos 'total' por 'venta'
      .order('mes', { ascending: true });

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      console.log('No data found in the ventas table');
      return res.status(200).json([]); // Devuelve array vacío si no hay datos
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}