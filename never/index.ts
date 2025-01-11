// never é usado para indicar que uma função nao ira retornar nada nunca 
// geralmente usada para informar erros na aplicação


function showError():never{
  throw new Error(" erro ao tentar ser melhor que lauricio");
}