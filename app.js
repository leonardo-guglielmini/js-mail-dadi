//Es. MAIL

const userEmails = ["ciao@prova.it", "test@test.com", "hello@world.com"];

let email = prompt("Inserisci qui la tua email: ");

if(userEmails.includes(email)){
    console.log(`Benvenuto ${email}`);
}else{
    console.log("La tua mail non risulta presente nel nostro elenco.")
}

//Es. DADI

let numPlayer = (Math.floor(Math.random()*(6-1)+1));
let numComputer = (Math.floor(Math.random()*(6-1)+1));

console.log(`Numero generato per il giocatore: ${numPlayer}`);
console.log(`Numero generato per il computer: ${numComputer}`);

if(numPlayer>numComputer){
    console.log(`Il numero vincente è: ${numPlayer}`);
}else if( numComputer>numPlayer){
    console.log(`Il numero vincente è: ${numComputer}`);
}else{
    console.log("PAREGGIO");
}