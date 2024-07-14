import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const getAllCreators = async () => {
    const { data, error } = await supabase
      .from('creators')
      .select('*');
  
    if (error) throw error;
    return data;
  };
  
  export const getCreatorById = async (id) => {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) throw error;
    return data;
  };
  
  export const createCreator = async (creator) => {
    const { data, error } = await supabase
      .from('creators')
      .insert([creator]);
  
    if (error) throw error;
    return data;
  };  
  
  export const updateCreator = async (id, updates) => {
    const { data, error } = await supabase
      .from('creators')
      .update(updates)
      .eq('id', id);
  
    if (error) throw error;
    return data;
  };
  
  export const deleteCreator = async (id) => {
    const { data, error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
  
    if (error) throw error;
    return data;
  };

export default supabase;
