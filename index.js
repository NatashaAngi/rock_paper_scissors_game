
const opcoes = ['rock','paper','scissors']

function get_playerchoice() {

   let choice = prompt('Choose: Rock, Paper, Scissors').toLocaleLowerCase()


   if(opcoes.includes(choice)){

    return choice
   }

   else{   
        alert('Choose a valid option')
        return get_playerchoice()

   }

}

function get_pcchoice(){

    let numero_escolhido = Math.floor(Math.random()*3)
    const escolha_final = opcoes[numero_escolhido]

    return escolha_final
}


function compare_choices(playerchoice,pc_choice ){

    let result =''

    const regras = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if( pc_choice === playerchoice){
        result = 'Tied'
    }
    
    else if (pc_choice === regras[playerchoice]){
        result = 'You WIN'}
        
    else{ result = 'PC WINS' }

    return result
}

function game(){
   let player_score = 0
   let pc_score = 0

    while( player_score < 5 && pc_score < 5){
        
    let playerchoice = get_playerchoice()
    let pc_choice = get_pcchoice()
    let result_match = compare_choices(playerchoice, pc_choice)
        
    if(result_match === 'You WIN' ){
        player_score++
    }
    else if(result_match === 'PC WINS'){
        pc_score++
    }

    console.log(`Placar atual: Jogador: ${player_score} x PC: ${pc_score}`)
    }

    if(player_score > pc_score){
        console.log(`The winner is the player with ${player_score} points.`)
    }
    else{ console.log(`The winner is the PC with ${pc_score} points.`)}
}
game()




