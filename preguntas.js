const questions = [
   {
        question: "Dada la siguiente matriz, ¿cuál sería su traspuesta?",
        answer: "Respuesta correcta: ",
        points: 100,
        image: "imagen/p1.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r1.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Considera la siguiente matriz, ¿cuál sería su matriz traspuesta?",
        answer: "Respuesta correcta: ",
        points: 200,
        image: "imagen/p2.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r2.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices C y D, Calcula la suma de C+D",
        answer: "La resputa es: ",
        points: 300,
        image: "imagen/p3.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r3.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices E y F. Calcula la suma de E+F",
        answer: "La resputa es: ",
        points: 400,
        image: "imagen/p4.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r4.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices G y H. Calcula la resta de G−H",
        answer: "La respuesta es: ",
        points: 500,
        image: "imagen/p5.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r5.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices I y J. Calcula la resta de I−J",
        answer: "La respuesta es: ",
        points: 600,
        image: "imagen/p6.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r6.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz K y el escalar α. Calcula el producto de αK",
        answer: "La respuesta es: ",
        points: 700,
        image: "imagen/p7.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r7.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz L y el escalar β. Calcula el producto de βL.",
        answer: "La respuesta es:",
        points: 800,
        image: "imagen/p8.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r8.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices P y Q. Calcula el producto de PQ",
        answer: "La respuesta es: ",
        points: 900,
        image: "imagen/p9.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r9.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dadas las siguientes matrices R y S. Calcula el producto de RS",
        answer: "La respuesta es: ",
        points: 1000,
        image: "imagen/p10.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r10.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz C. Realiza la operación elemental de fila que consiste en multiplicar la fila 2 (F2) por 3/2 y determina la matriz equivalente resultante.",
        answer: "La respuesta es: ",
        points: 1100,
        image: "imagen/p11.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r11.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Considera la matriz D. Se desea aplicar una operación elemental a la fila 3 (F3) de la matriz D, multiplicándola por −2. Calcula la matriz equivalente resultante",
        answer: "La respuesta es: ",
        points: 1200,
        image: "imagen/p12.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r12.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz E. Calcula el determinante de la matriz E",
        answer: "La respuesta correcta es: /E/ = ad − bc",
        points: 1300,
        image: "imagen/p13.jpg", // Imagen relacionada con la pregunta
        answerImage: "" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Considera la matriz F. ¿Cuál es el determinante de la matriz F?",
        answer: "El determinante de la matriz F es −2",
        points: 1400,
        image: "imagen/p14.jpg", // Imagen relacionada con la pregunta
        answerImage: "" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz G. Calcula el determinante de la matriz G",
        answer: "El determinante de la matriz G es 0",
        points: 1500,
        image: "imagen/p15.jpg", // Imagen relacionada con la pregunta
        answerImage: "" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz H. Calcula el menor complementario del elemento ubicado en la posición i=2, j=3. (fila i y Columna j)",
        answer: "Para el elemento en la posición i=2, j=3 de la matriz H', el menor complementario es: 50",
        points: 1600,
        image: "imagen/p16.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r16.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz A, encuentra el menor complementario del elemento ubicado en la posición i=2, j=3. (fila i y Columna j) ",
        answer: "El valor del menor complementario es −10",
        points: 1700,
        image: "imagen/p17.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r17.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Sea la matriz A. Calcular el adjunto de la posición (2,3) en la matriz A",
        answer: "El adjunto de la posición (2,3) en la matriz A es = 3 positivo",
        points: 1800,
        image: "imagen/p18.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r18.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Sea la matriz A. Calcular el adjunto del elemento (2,3) en la matriz A",
        answer: "El adjunto del elemento (2,3) en la matriz A es = 6 positivo",
        points: 1900,
        image: "imagen/p19.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r19.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Calcular el determinante de la matriz A",
        answer: "El determinante de la matriz A es = 0",
        points: 2000,
        image: "imagen/p20.jpg", // Imagen relacionada con la pregunta
        answerImage: "" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Calcula el determinante de la siguiente matriz",
        answer: "El determinante de la matriz A es = 23",
        points: 2100,
        image: "imagen/p21.jpg", // Imagen relacionada con la pregunta
        answerImage: "" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la siguiente matriz A, encuentra su matriz adjunta",
        answer: "La matriz adjunta de A es: ",
        points: 2200,
        image: "imagen/p22.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r22.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz B. ¿Cuál es la matriz adjunta de B?",
        answer: "La matriz adjunta de B es: ",
        points: 2300,
        image: "imagen/p23.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r23.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz C. ¿cuál es la matriz adjunta de C?",
        answer: "La matriz adjunta de C es: ",
        points: 2400,
        image: "imagen/p24.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r24.jpg" // Imagen para mostrar con la respuesta
    },
    
    {
        question: "Dada la matriz D. ¿cuál es la matriz adjunta de D?",
        answer: "La matriz adjuntas de D es:",
        points: 2500,
        image: "imagen/p25.jpg", // Imagen relacionada con la pregunta
        answerImage: "imagen/r25.jpg" // Imagen para mostrar con la respuesta
    },
];

