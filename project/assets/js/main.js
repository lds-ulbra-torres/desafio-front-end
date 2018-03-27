$(document).ready(function(){
    /* Ao executar o script */

    /* Funções */
    ajustar_banner();
    hits();
});

$(window).resize(function(){
    /* Quando a tela sofrer alteração de tamanho */

    /* Funções */
    ajustar_banner();
});


/* Events */
$('#encurtador_btn').click(function(e){
    e.preventDefault();

    let element = $(this);
    let value = $('#encurtador_link').val();

    var json = get_json();
    
    shortLink = encurtar_link(value, json);
    if(shortLink){
        $('#encurtador_link').val(shortLink);
    } else{
        console.error("Não existe");
    }

    $('#encurtador_btn').html('copiar');
    $('#encurtador_link').css('color', '#fff');
    $('#encurtador .clear').show('500');
});


$('.clear').click(function(){
    let e = $(this).data('input');
    $(e).val('');
    $('#encurtador .clear').hide('500');
});

$('.link_hits').click(function(){
    let value = $('.contador').text();
    value = parseInt(value);
    value += 1;
    $('.contador').text(value);
    localStorage.setItem('hits',(value));
});

/* Funções */
function ajustar_banner(){
    let element = $('#banner');
    let size_screen = $(window).height();
    let header = $('header').height();

    let size = size_screen - header;
    element.css({
        'height': size,
        'max-height': size
    });
}

function hits(){

    let value = localStorage.getItem('hits');
    if(value != undefined){
        $('.contador').text(value);

    }else{
        localStorage.setItem('hits',$('.contador').text());
    }
}

function encurtar_link(url, json){
    for(let i = 0; i < json.length; i++){
        if(url == json[i].url){
            return json[i].shortUrl;
        }
    }
    return "http://chr.dc/aycayc";
}

function get_json(){
    return [{
        "id": "23094",
        "hits": 1003,
        "url": "http://globo.com",
        "shortUrl": "http://chr.dc/9dtr4"
    },
    {
        "id": "76291",
        "hits": 1922,
        "url": "http://google.com",
        "shortUrl": "http://chr.dc/aUx71"
    },
    {
        "id": "66761",
        "hits": 765,
        "url": "http://terra.com.br",
        "shortUrl": "http://chr.dc/u9jh3"
    },
    {
        "id": "70001",
        "hits": 1519,
        "url": "http://facebook.com",
        "shortUrl": "http://chr.dc/qy61p"
    },
    {
        "id": "21220",
        "hits": 311,
        "url": "http://diariocatarinense.com.br",
        "shortUrl": "http://chr.dc/87itr"
    },
    {
        "id": "10743",
        "hits": 722,
        "url": "http://uol.com.br",
        "shortUrl": "http://chr.dc/y81xc"
    },
    {
        "id": "19122",
        "hits": 1320,
        "url": "http://chaordic.com.br",
        "shortUrl": "http://chr.dc/qy5k9"
    },
    {
        "id": "55324",
        "hits": 997,
        "url": "http://youtube.com",
        "shortUrl": "http://chr.dc/1w5tg"
    },
    {
        "id": "70931",
        "hits": 487,
        "url": "http://twitter.com",
        "shortUrl": "http://chr.dc/7tmv1"
    },
    {
        "id": "87112",
        "hits": 130,
        "url": "http://bing.com",
        "shortUrl": "http://chr.dc/9opw2"
    }];
}

 