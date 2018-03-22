let listaLinks = document.getElementById("listaLinks");
axios.get('https://raw.githubusercontent.com/lds-ulbra-torres/desafio-front-end/master/Assets/urls.json')
    .then(function (response) {
        response.data.sort(function(a, b) {return b.hits-a.hits});
        for (var i = 0; i < 5; i++) {
            let newLi = document.createElement('li');
            newLi.className = "liStyle";
            
            let divMaster = document.createElement('div');
            divMaster.className = "flex-container";
            
            let div1 = document.createElement('div');
            div1.className = "chaordicLiDiv1";
            div1.appendChild(document.createTextNode(response.data[i].shortUrl));
            let div2 = document.createElement('div');
            div2.className = "chaordicLiDiv2";
            div2.appendChild(document.createTextNode(response.data[i].hits));

            divMaster.appendChild(div1);
            divMaster.appendChild(div2);

            newLi.appendChild(divMaster)
            listaLinks.appendChild(newLi);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

function shortLink (){
    let input = document.getElementById("inputFstSection");
    let button = document.getElementById("btnFstSection");

    input.value = "http://chr.dc/xyzxyz";
    input.style.color = "#fff";
    button.value = "COPIAR";
}