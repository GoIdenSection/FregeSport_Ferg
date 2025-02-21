function checkAnswers() {
    let score = 0;

    // Check question 1
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'Teal') {
        score++;
        document.querySelector('.question:nth-of-type(1)').style.color = '#4CAF50'; 
    } else {
        document.querySelector('.question:nth-of-type(1)').style.color = 'red'; 
    }

    // Check question 2
    let q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'Navy') {
        score++;
        document.querySelector('.question:nth-of-type(2)').style.color = '#4CAF50'; 
    } else {
        document.querySelector('.question:nth-of-type(2)').style.color = 'red'; 
    }

    // Check question 3
    let q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'Turkos') {
        score++;
        document.querySelector('.question:nth-of-type(3)').style.color = '#4CAF50'; 
    } else {
        document.querySelector('.question:nth-of-type(3)').style.color = 'red'; 
    }

    // Visa resultatmeddelande
    let resultMessage = document.getElementById('resultat');
    resultMessage.textContent = `Du fick ${score} av 3 rätt.`;
    resultMessage.style.display = 'block';

    // Uppdatera poängräknaren
    document.getElementById('score').textContent = score;
}
