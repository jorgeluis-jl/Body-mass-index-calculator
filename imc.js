"use strict";
const imc = {};  //objecto que guarda todas as nossas funções;

imc.processar = function () {
   /** @todo parte 2 - console.log para indicar que a função processar foi chamada correctamente. */
   console.log("função processar invocada");
   /** 
    * @todo parte 4 - Recolher todos os valores inseridos pelo utilizador.
    * (Ver sugestões de implementação no enunciado)
    */
   const pesoStr = document.getElementById("pesoId").value;
   const alturaStr = document.getElementById("alturaId").value;
   /**
    * @todo parte 5 - Testar a validade dos valores inseridos.
    * Caso sejam válidos mostrar a div com id "resultados" e apresentar os resultados . 
    * Caso sejam inválidos apresentar mensagens de erro esconder a div com id "resultados" 
    */

      /**
       * @todo parte 3 - Mostrar a div onde serão mostrados os resultados quando o utilizador clica em Calcular.
       * (Ver sugestões de implementação no enunciado) 
       */
      let divResultados = document.getElementById("resultados");
      divResultados.style.display="block";
      /**
       * @todo parte 4 - Calcular o IMC
       * (Ver sugestões de implementação no enunciado)
       */
      const valor = imc.calcularIMC(pesoStr, alturaStr);
      /**
       * @todo parte 4 - Mostrar os resultados na página.
       * (Ver sugestões de implementação no enunciado)
       */
      document.getElementById("resultadoIMC").innerText = valor;
      /**
       * @todo parte 6 - Modificar a apresentação da tabela de referência do IMC de modo a destacar a linha do
       * intervalo de valores em que o IMC calculado se insere.
       * (Ver sugestões de implementação no enunciado)
       */
};

imc.limpar = function () {
   /** @todo parte 2 - console.log para indicar que a função "limpar" foi chamada correctamente. */
   
   /** 
    * @todo parte 3 - limpar e Esconder a div onde serão mostrados os resultados quando o utilizador clica em "Limpar”.
    * (Ver sugestões de implementação no enunciado)
    */
   let divResultados = document.getElementById("resultados");
   divResultados.style.display="none";
   /** @todo parte 5 - Limpar qualquer mensagem de erro que tenha sido mostrada an div com o id "mensagemErro". */
};

/**
 * @todo Parte da parte 4
 * Cálcula o Índice de Massa Corporal (IMC)
 * @param {number} peso - Peso
 * @param {number} altura - Altura
 * @returns {number} IMC
 */
imc.calcularIMC = function (pesoStr, alturaStr) {
   const pesofloat = parseFloat (pesoStr);
   const alturafloat = parseFloat (alturaStr);
   const resultado = pesofloat/(alturafloat*alturafloat);
   return resultado;
}

/**
 * @todo Parte da parte 5
 * Apresenta mensagem de erro, no id="mensagemErro", se houver um valor no peso, na altura.
 * @param {number} peso - Peso
 * @param {number} altura - Altura
 * @returns {boolean} true/false consoante haja, ou não, um valor errado
 */
imc.verificarValores = function (peso, altura) {

}

/** 
 * @todo parte 6- Função auxiliar para modificar a apresentação da tabela de referência do IMC
 * de modo a destacar a linha do intervalo de valores em que o IMC calculado se insere.
 * (Ver sugestões de implementação no enunciado)
 * @param {number} v - Valor calculado para o IMC 
 */
imc.indicarIntervaloIMC = function (v) {
   var tabelaIMC = [16, 16.9, 18.4, 24.9, 29.9, 34.9, 39.9];
   //descobrir qual a linha que temos de pintar
}