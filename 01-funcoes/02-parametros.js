function apresentar(nome){
    console.log("Olá. "+ nome);
}

apresentar("Anna");


function sistema(nome = "Visitante"){
    console.log("Olá, "+ nome);
}
sistema();
sistema("Anna");