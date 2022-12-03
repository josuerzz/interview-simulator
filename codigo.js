

let seccionPregunta = document.querySelector('.preguntas')

let seccionTiempo = document.querySelector('.tiempo')
let preguntas = ["", "¿Cuáles son tus metas?", "Hablame de ti", "¿Por qué deberíamos contratarte?", 
"¿Por qué te interesa este trabajo y esta empresa?", "¿Cómo te ves en cinco años?", 
"Describe una situación en la cual te encontraste ante un desafío y cómo lo superaste", 
"Descríbete a ti mismo", "¿Tienes alguna pregunta? (demuestrale que estas interesado)", 
"Dime alguna debilidad que tengas en el ámbito profesional", "Cuentame de algo que te sientas orgulloso (logro)", "¿Qué le interesa en su tiempo libre?", "Con quien vives y a qué se dedican"
];
let btnCambioPregunta = document.getElementById('btn-cambio');
let segundosPregunta = 40;


function aleatorio(min, max)
{
    let numero = Math.floor(Math.random() * (max - min + 1) + min);

    return numero
}


function preguntaCargada()
{
    let nPregunta = aleatorio(1, preguntas.length-1)
    hablar(preguntas[nPregunta])
    seccionPregunta.innerText = preguntas[nPregunta]
    
    setInterval(() => {

       seccionTiempo.innerHTML = segundosPregunta--
    
    }, 1000);

    recargarPagina()
    
}


function hablar(texto)
{
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}


function recargarPagina()
{
    setTimeout(()=>
    {
        location.reload()
    }, 40000)
    
}


btnCambioPregunta.addEventListener('click', ()=>
{
    location.reload()
})


window.addEventListener('load', preguntaCargada)




