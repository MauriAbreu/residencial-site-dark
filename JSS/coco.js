function checkAge() {
    // Obtém o valor da idade do input
    var age = document.getElementById('age').value;
    var result = document.getElementById('result');

    // Converte a idade para um número inteiro
    age = parseInt(age);

    // Verifica a idade e define a mensagem apropriada
    if (isNaN(age) || age < 0) {
        result.textContent = 'Coloca um número que faça sentido parceiro.';
        result.style.color = 'red'; 
    } else if (age <=0) {
        result.textContent = 'Você é um rescem nascido.';
        result.style.color = 'yellow';  
    } else if (age <= 13) {
        result.textContent = 'Você é uma crianca.';
        result.style.color = 'yellow';  
    } else if (age <= 17) {
        result.textContent = 'Você é um adolecente.';
        result.style.color = 'gray';   
    } else if (age <= 59) {
        result.textContent = 'Você é adulto.';
        result.style.color = 'green';
    } else if (age <= 119) {
        result.textContent = 'Você é idoso.';
        result.style.color = 'green';
    } else if (age <= 125) {
        result.textContent = 'Você é uma recordista mundial!';
        result.style.color = 'cyan';
    } else {
        result.textContent = 'Você ja esta morto... (saia do meu site)';
        result.style.color = 'purple';
    }
    
}