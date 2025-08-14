import express from "express";
import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente
const supabaseUrl = "https://hrhslvrlqplratqzvkne.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaHNsdnJscXBscmF0cXp2a25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1ODI0ODIsImV4cCI6MjA3MDE1ODQ4Mn0.lbwALry07_GHjonyvUM1BTyMDTrD9oi2WAgHiSnt6_s";

// Conexão com o Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const PORT = 3000;

// Endpoint GET para "Hello World"
app.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("teste") 
    .select("mensagem")
    .eq("id", 1)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ mensagem: data.mensagem });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
