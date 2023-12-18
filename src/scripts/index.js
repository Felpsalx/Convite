let conviteOpen = document.querySelector(".convite__details__text")
const btn = document.querySelector(".convite__details__btn")

btn.addEventListener("click", ()=>{
    conviteOpen.classList.toggle("convite__details__text-is--active")
    if(conviteOpen.classList.contains("convite__details__text-is--active") ){
        btn.innerText = "Fechar"
    }else{
        btn.innerText = "Abrir"
    }
    const dataEvent = new Date ("Dec 28, 2023 23:00:00");

    const timeStampEvent = dataEvent.getTime();

    const contaHoras = setInterval(()=>{
    
    const now = new Date();
    const timeStampAtual = now.getTime();


    const diaEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60
    const minutes = 1000 * 60;

    const distanciaAteOEvento = timeStampEvent - timeStampAtual;

    const diasAteOEvento = Math.floor( distanciaAteOEvento / (diaEmMs) );

    const HorasAteOEvento = Math.floor(distanciaAteOEvento % (diaEmMs) / (HoraEmMs))

    const MinutosAteOEvento = Math.floor(distanciaAteOEvento % (HoraEmMs) / (minutes))
    
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % (minutes) / (1000))
        
    document.getElementById('count').innerHTML = `${diasAteOEvento}Dias ${HorasAteOEvento}Hr ${MinutosAteOEvento}Min ${segundosAteOEvento}Seg`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('count').innerHTML = "Evento Expirado";
    }
    }, 1000) 
})
    


