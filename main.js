function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localname === `audio`) {
        elemento.play();
    }
   else{
       //alert(`Elemento não encontrado´);
       console.log(`Elementos não encontrado ou seletor inálido´);
   }
