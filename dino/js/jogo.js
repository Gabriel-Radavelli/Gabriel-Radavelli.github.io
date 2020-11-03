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




















