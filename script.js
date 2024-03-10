// Selecionando meus elementos
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('p_h')

//Função para atualizar o relógio
function updateClock(){
    let now = new Date() // Pega  a data atual 
    let hour = now.getHours() // Função que pega as horas
    let minute = now.getMinutes() // Função que pega os minutos
    let second = now.getSeconds() // Função que pega as segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    
    // ((Ângulo do circulo / pelos segundo) * a quantidade de segundos) 
    let sDeg = ((360   /60) * second)  -90
    let mDeg = ((360  / 60) * minute)  -90
    let hDeg = ((360 /  12) * hour)    -90 

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`
}
// Adiciono um zero quando meu tempo for menor que 10
function fixZero(time){
    return time < 10? `0${time}` : time
}

setInterval(updateClock, 1000) //Executará a minha função updateClock em um intervalon de 1000 milissegundos (1 segundo)
updateClock()