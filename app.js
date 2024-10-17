//Es. MAIL

const userEmails = ["ciao@prova.it", "test@test.com", "hello@world.com"];

let email = prompt("Inserisci qui la tua email: ");

if(userEmails.includes(email)){
    console.log(`Benvenuto ${email}`);
}else{
    console.log("La tua mail non risulta presente nel nostro elenco.")
}

//Es. DADI