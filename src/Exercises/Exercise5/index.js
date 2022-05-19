// faça uma função que verifica se a primeira letra de uma string é maiuscula, retorne true ou false

// Exemplo de saida:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

/** @param {string} text */
function checkIfTheFirstLetterIsUppercase(text = "") {
  if (!text.length) return false;

  const isFirstLetterUppercase = text[0] === text[0].toUpperCase();

  return isFirstLetterUppercase;
}

export default checkIfTheFirstLetterIsUppercase;
