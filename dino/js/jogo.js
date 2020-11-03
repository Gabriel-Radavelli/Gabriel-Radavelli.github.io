console.log('Inicio de Jogo!');

const dino = document.querySelector('.dino');
//console.log(dino);
let dinoPosition = 0;
let estaPulando = false;

// Verificar se a tecla espaço foi pressionada
document.addEventListener('keydown', (event)=>{
    console.log(event.code)
    if(event.code === 'Space')
        if(!estaPulando) pular();
});

function pular(){
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
        if(dinoPosition >= 250){
            console.log('Topo!');
            clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(()=>{
                if (dinoPosition <= 0){
                    console.log('Chão');
                    estaPulando = false;
                    clearInterval(intervaloQueda);
                } else{
                    //decrementar a posição do Dino
                    dinoPosition -= 20;
                    //Atualizar a posção na tela
                    dino.style.bottom = dinoPosition + 'px';
                }
            },20);
            
        } else {
            //incrementar a possição do Dino
            dinoPosition += 20;
            //Atualizar a possição da Tela
            dino.style.bottom = dinoPosition + 'px';
        }
        
    },20);

}

//Criação de Cactos
const background = document.querySelector('.background');

function criarCacto() {
    let cactoPosition = 1000;
    const cacto = document.createElement('div');
    //Tempo aleatório entre 1s e 6s
    let tempoRandom = Math.random() * 6000 + 100;

    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    //Adicionar o cacto na tela
    background.appendChild(cacto);
    let intervaloEsquerda = setInterval(()=>{
        
        if (cactoPosition <= -60) {
            clearInterval(intervaloEsquerda);
            //Remover da tela
            background.removeChild(cacto);
        } else {
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }

    },20);
    
    let tempoCacto = setTimeout(criarCacto, tempoRandom);

}

criarCacto();


















