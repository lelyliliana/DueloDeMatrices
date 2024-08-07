// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    let activeCells = []; // Mantén un registro de las casillas activas
    let lastSelectedCell = null; // Variable para mantener un registro de la última casilla seleccionada
    let currentAnswer = ''; // Aquí almacenas la respuesta cuando se muestra la pregunta
    let currentQuestionValue = 0; // Esta variable almacena el valor de puntos de la pregunta actual
    let countdown;
    let timeInMinutes = 0; // El tiempo inicial en minutos
    let currentQuestionIndex = 0; // Asegúrate de que esta variable esté definida a nivel global
    
    document.getElementById('increment-timer').addEventListener('click', incrementTimer);
    document.getElementById('decrement-timer').addEventListener('click', decrementTimer);
    document.getElementById('start-timer').addEventListener('click', startTimer);
    document.getElementById('continue-playing').addEventListener('click', hideQuestion);

     
function startTimer() {
    const endTime = Date.now() + timeInMinutes * 60000; // Convertir minutos a milisegundos
    displayTimeLeft(timeInMinutes * 60); // Inicialmente muestra el tiempo

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        // Si el tiempo se acabó
        if (secondsLeft < 0) {
            clearInterval(countdown);
            playSound(); // Función para reproducir un sonido
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function incrementTimer() {
    timeInMinutes += 1; // Aumenta el tiempo en 1 minuto
    updateTimerDisplay();
}

function decrementTimer() {
    timeInMinutes = Math.max(0, timeInMinutes - 1); // Reduce el tiempo en 1 minuto, no permite valores negativos
    updateTimerDisplay();
}

function updateTimerDisplay() {
    // Actualiza la visualización del tiempo
    // Asume que timeInMinutes es el tiempo en minutos, ajusta según tu lógica
    let seconds = timeInMinutes * 60;
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('timer-minutes').textContent = display;
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('timer-minutes').textContent = display;
}

function playSound() {
    // Asume que tienes un archivo de sonido `timer-end.mp3` en el directorio correcto
    const audio = new Audio('timer-end.mp3');
    audio.play();
}


document.getElementById('show-answer').addEventListener('click', function() {
    document.getElementById('question-text').innerHTML = `
        <p>${currentAnswer}</p>
        ${currentAnswerImage ? `<img src="${currentAnswerImage}" alt="Imagen de respuesta" style="max-width:100%; height:auto;">` : ""}
    `;
});


    // Función para activar las casillas adyacentes
    function activateAdjacentCells(cellNumber) {
        // Calcula las casillas adyacentes basado en el número de la casilla actual
        const adjacentCellsNumbers = getAdjacentCellsNumbers(cellNumber);
        // Actualiza el registro de las casillas activas
        activeCells = adjacentCellsNumbers;
        updateCellStyles();
    }

    // Función para obtener los números de casillas adyacentes
    function getAdjacentCellsNumbers(cellNumber) {
        const row = Math.ceil(cellNumber / 5);
        const column = cellNumber % 5 || 5;
        return [
            cellNumber - 5, // Arriba
            cellNumber + 5, // Abajo
            column > 1 ? cellNumber - 1 : null, // Izquierda
            column < 5 ? cellNumber + 1 : null, // Derecha
        ].filter(num => num > 0 && num <= 25); // Filtra números de casillas válidos
    }

 // Función para cambiar la puntuación de los equipos
 function changeScore(groupNumber, addOrSubtract) {
    const pointsDisplay = document.getElementById(`team${groupNumber}-points`);
    let currentScore = parseInt(pointsDisplay.textContent, 10);

    if (isNaN(currentScore)) {
        console.error('El puntaje actual no es un número');
        return;
    }

    let pointsToAddOrSubtract = addOrSubtract * currentQuestionValue;
    currentScore = Math.max(0, currentScore + pointsToAddOrSubtract);

    pointsDisplay.textContent = currentScore;
}


 // Hacer que changeScore esté disponible globalmente
    window.changeScore = changeScore;


     function updateCellStyles() {
    // Solo resetea y marca como adyacentes las celdas activas, sin tocar la .selected
    document.querySelectorAll('.cell').forEach(cell => {
        if (!cell.classList.contains('selected')) {
            cell.classList.remove('adjacent');
        }
    });

    activeCells.forEach(number => {
        const cell = document.querySelector(`.cell:nth-child(${number})`);
        if (cell && !cell.classList.contains('selected')) {
            cell.classList.add('adjacent');
        }
    });
}    
    
// Crear las casillas de la matriz
    const matrixBoard = document.getElementById('matrix-board');
    for (let i = 1; i <= 25; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i * 100;
        cell.onclick = function() {
            cellClicked(i);
        };
        matrixBoard.appendChild(cell);
    }
    
    
// Crear los marcadores de los equipos
   const teamScores = document.getElementById('team-scores');

// Supongamos que tienes 5 grupos
for (let i = 1; i <= 5; i++) {
    let teamScore = document.createElement('div');
    teamScore.className = 'team-score';
    teamScore.innerHTML = `
        <div>Grupo ${i}</div>
        <div class="team-points" id="team${i}-points">0</div>
        <button class="score-button add" id="team${i}-add">+</button>
        <button class="score-button subtract negative" id="team${i}-subtract">-</button>
    `;
    teamScores.appendChild(teamScore);
    
    // Asignar event listeners para los botones de este equipo
    document.getElementById(`team${i}-add`).addEventListener('click', function() { changeScore(i, 1); });
    document.getElementById(`team${i}-subtract`).addEventListener('click', function() { changeScore(i, -1); });

}
    
    // Función para ocultar la sección de preguntas
    function hideQuestion() {
        // Ocultar la sección de preguntas
    document.getElementById('question-container').style.display = 'none';

    // Mostrar el tablero de casillas nuevamente
    document.getElementById('matrix-board').style.display = 'grid'; // o 'flex', 'block', etc., dependiendo de tu diseño
    
    // Detener el cronómetro
    clearInterval(countdown);

    // Restablecer el tiempo y la visualización del temporizador
    timeInMinutes = 0; // O el valor inicial que prefieras
    updateTimerDisplay(); // Asegúrate de que esta función actualice correctamente el tiempo mostrado
    }
    

// Función para manejar el clic en una casilla
function cellClicked(cellNumber) {
    if (activeCells.includes(cellNumber) && !document.querySelector(`.cell:nth-child(${cellNumber})`).classList.contains('used')) {
        // Resetea el estado de todas las casillas excepto la seleccionada previamente
        document.querySelectorAll('.cell').forEach(cell => {
            // Aquí aseguramos que solo la última casilla seleccionada se marque como usada
            // y quitamos 'selected' de cualquier casilla que la tenga.
            cell.classList.remove('selected');
            if (cell.classList.contains('adjacent')) {
                cell.classList.remove('adjacent');
            }
            if (cell === lastSelectedCell) {
                cell.classList.add('used'); // Marca la casilla previamente seleccionada como usada
            }
        });
        
        // Activa las casillas adyacentes a la seleccionada
        activateAdjacentCells(cellNumber);

        // Marca la nueva casilla seleccionada y guarda la referencia para el futuro
        const selectedCell = document.querySelector(`.cell:nth-child(${cellNumber})`);
        selectedCell.classList.add('selected');
        lastSelectedCell = selectedCell; // Actualiza la última casilla seleccionada

        // Muestra la pregunta basada en el índice calculado
        const questionIndex = cellNumber - 1;
        showQuestion(questionIndex);
    } else {
        console.log("Casilla no activa o ya usada. Por favor, selecciona una casilla adyacente.");
    }
}    
    
     // Función para activar las casillas adyacentes a la casilla inicial
   function initializeGame() {
    // Haz todas las casillas "adyacentes" al inicio
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.add('adjacent');
    });

    // Inicializa activeCells con todos los números de casilla al inicio
    activeCells = Array.from({length: 25}, (_, i) => i + 1);
}

  
    
    document.getElementById('continue-playing').addEventListener('click', hideQuestion);
  
  
 function showQuestion(index) {
    const question = questions[index];
    currentQuestionValue = question.points;

    document.getElementById('question-points').textContent = `Pregunta por: ${currentQuestionValue} puntos`;
    document.getElementById('question-text').innerHTML = `
        <p>${question.question}</p>
        ${question.image ? `<img src="${question.image}" alt="Imagen relacionada" style="max-width:100%; height:auto;">` : ""}
    `;

    // Guardar la respuesta y la imagen de la respuesta para usarlas después
    currentAnswer = question.answer;
    currentAnswerImage = question.answerImage; // Asegúrate de definir esta variable globalmente

    document.getElementById('question-container').style.display = 'block';
    document.getElementById('matrix-board').style.display = 'none';
}


      
        // Llama a la función de inicialización para empezar el juego
    initializeGame();
});
