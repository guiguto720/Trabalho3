function somar() {
    // Obtém os valores dos campos de entrada
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
  
    // Converte os valores para números para que não ocorra concatenação
    const valor1 = parseFloat(num1) || 0;
    const valor2 = parseFloat(num2) || 0;
  
    // Realiza a soma
    const soma = valor1 + valor2;
  
    // Exibe o resultado na página
    document.getElementById('resultado').textContent = soma;
  }