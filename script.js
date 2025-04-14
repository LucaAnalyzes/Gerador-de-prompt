// Função para gerar o prompt com base nas entradas do formulário
function gerarPrompt() {
  const tema = document.getElementById('tema');
  const categoria = document.getElementById('categoria');
  const novaCategoria = document.getElementById('novaCategoria');
  const detalhes = document.getElementById('detalhes');
  const estilo = document.getElementById('estilo');
  const formato = document.getElementById('formato');
  const publico = document.getElementById('publico');
  const emocao = document.getElementById('emocao');
  const palavras = document.getElementById('palavras');
  const tom = document.getElementById('tom');
  const idioma = document.getElementById('idioma');

  let validado = true;

  // Função para verificar se o campo está vazio e aplicar borda vermelha
  function validarCampo(campo) {
    if (!campo.value.trim()) {
      campo.style.borderColor = 'red';
      validado = false;
    } else {
      campo.style.borderColor = ''; // Remove a borda vermelha quando o campo estiver preenchido
    }
  }

  // Validar campos obrigatórios
  validarCampo(tema);
  validarCampo(categoria);
  validarCampo(detalhes);
  validarCampo(estilo);
  validarCampo(formato);
  validarCampo(publico);
  validarCampo(emocao);
  validarCampo(palavras);
  validarCampo(tom);
  validarCampo(idioma);

  // Verificar se todos os campos obrigatórios foram preenchidos
  if (!validado) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Se o usuário escolher "Outra" na categoria, usar o valor da nova categoria
  const categoriaFinal = categoria.value === 'outro' ? novaCategoria.value.trim() : categoria.value;

  // Gerar o prompt com os dados fornecidos
  const promptGerado = `
    Tema: ${tema.value.trim()}
    Categoria: ${categoriaFinal}
    Detalhes: ${detalhes.value.trim()}
    Estilo: ${estilo.value.trim()}
    Formato: ${formato.value.trim()}
    Público-alvo: ${publico.value.trim()}
    Emoção: ${emocao.value.trim()}
    Palavras-chave: ${palavras.value.trim()}
    Tom: ${tom.value.trim()}
    Idioma: ${idioma.value.trim()}

    **Instruções para a IA:**
- Crie um conteúdo com base no tema proposto, ajustando a profundidade de informações conforme o nível de detalhes especificado.
- Utilize o estilo de escrita selecionado para garantir que o tom seja adequado ao público-alvo e ao formato desejado.
- O conteúdo gerado deve ser envolvente e refletir a emoção solicitada, sempre focando nas palavras-chave fornecidas.
- Lembre-se de usar o tom correto do conteúdo para adequar o texto ao objetivo do prompt.

---

**Exemplo de uso:**
Este prompt pode ser utilizado para gerar conteúdos como artigos, posts em blogs, scripts de vídeos ou outros formatos de mídia com base nas especificações fornecidas.

---

Esse prompt é altamente personalizável e pode ser ajustado conforme as necessidades do usuário, para proporcionar resultados mais eficazes e precisos.
;
  `;

  // Exibir o prompt gerado na tela
  document.getElementById('generatedPrompt').textContent = promptGerado;

  // Mostrar a área do prompt gerado
  document.getElementById('output').style.display = 'block';
}

// Função para copiar o prompt gerado para a área de transferência
document.getElementById('copyBtn').addEventListener('click', () => {
  const generatedPrompt = document.getElementById('generatedPrompt').textContent;

  // Utilizando a API Clipboard para copiar o conteúdo para a área de transferência
  navigator.clipboard.writeText(generatedPrompt).then(() => {
    alert('Prompt copiado para a área de transferência!');
  }).catch((err) => {
    console.error('Erro ao copiar o texto: ', err);
    alert('Falha ao copiar o texto. Tente novamente.');
  });
  
});

// Mostrar ou esconder a caixa de nova categoria dependendo da escolha do usuário
document.getElementById('categoria').addEventListener('change', () => {
  const novaCategoriaContainer = document.getElementById('novaCategoriaContainer');
  if (document.getElementById('categoria').value === 'outro') {
    novaCategoriaContainer.style.display = 'block';
  } else {
    novaCategoriaContainer.style.display = 'none';
  }
});

// Inicialização da exibição do prompt gerado
document.getElementById('output').style.display = 'none';
