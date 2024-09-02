const bolaBotao = document.getElementById('circuloBotao');
const fundoBotao = document.getElementById('fundoBotao');
const botaoImagem = document.getElementById('imgBotao');
const titulo = document.getElementById('txt1');

let ativado = false;

function alternarTema() {
    if (ativado) {
        console.log("desativado");
        bolaBotao.style.marginLeft = '5px';
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';

        titulo.style.color = 'rgb(156, 156, 156)';
        botaoImagem.src="img2/SunDark.png";
        fundoBotao.style.boxShadow = ' inset 0px 0px 10px rgba(29, 29, 29, 0.158)';
        fundoBotao.style.backgroundColor = 'rgb(240, 240, 240)';
        bolaBotao.style.backgroundColor = 'rgb(247, 247, 247)'
        bolaBotao.style.boxShadow = '0px 0px 10px rgba(29, 29, 29, 0.158)';
        botaoImagem.style.marginLeft = '0px';


        
        
    } else {
        console.log("ativado");
        bolaBotao.style.marginLeft = '64px';
        document.body.style.backgroundColor = 'rgb(40, 40, 40)';

        titulo.style.color = 'rgb(119, 119, 119)';
        botaoImagem.src="img2/MoonLight.png";
        fundoBotao.style.boxShadow = 'inset 0px 0px 10px rgba(95, 95, 95, 0.658)';
        fundoBotao.style.backgroundColor = 'rgb(50, 50, 50)';
        bolaBotao.style.backgroundColor = 'rgb(40, 40, 40)'
        bolaBotao.style.boxShadow = '0px 0px 10px rgba(100, 100, 100, 0.358)';
        botaoImagem.style.marginLeft = '-4px';
       
        
    }

    ativado = !ativado;
}