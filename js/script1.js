function carregar(){

    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let ano = data.getFullYear();
    let diaSemana = data.getDay();
    let diaMes = data.getDate();
    let month = data.getMonth();
   
    if(hora >= 0 && hora < 12){
        
        img.src = 'imagens/fotomanha.jpg';
        document.body.style.background = '#e2cd9f';

    }else if(hora >= 12 && hora < 18){
        
        img.src = 'imagens/fototarde.jpg';
        document.body.style.background = '#b9846f';

    }else{
        
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = '#515154';

    }

    switch(month){

        case 0:
            month = 'Janeiro';
            break;
        
        case 1:
            month = 'Fevereiro';
            break;

        case 2:
            month = 'Março';
            break;

        case 3:
            month = 'Abril';
            break;
        
        case 4:
            month = 'Maio';
            break;
        
        case 5:
            month = 'junho';
            break;

        case 6:
            month = 'julho';
            break;

        case 7:
            month = 'Agosto';
            break;

        case 8:
            month = 'Setembro';
            break;

        case 9:
            month = 'Outubro';
            break;

        case 10:
            month = 'Novembro';
            break;

        case 11:
            month = 'Dezembro';
            
    }

    switch(diaSemana){

        case 0:
            diaSemana = 'Domingo';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;

        case 1:
            diaSemana = 'Segunda';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;

        case 2:
            diaSemana = 'Terça';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;
            
        case 3:
            diaSemana = 'Quarta';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;

        case 4:
            diaSemana = 'Quinta';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;

        case 5:
            diaSemana = 'Sexta';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
            break;

        case 6:
            diaSemana = 'Sábado';
            msg.innerHTML = `${hora}:${minuto}<br>${diaSemana}, ${diaMes} de ${month} de ${ano}`;
       }

       
    
}
