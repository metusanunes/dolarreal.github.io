const a = function () {
    let dat = new Date();
    const data = dat.toLocaleDateString()
    var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='02/04/2021'&$format=json";
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
            var resposta = JSON.parse(request.responseText);
            var valores = resposta.value[0];
            a1.innerHTML = `R$: ${valores.cotacaoCompra}`;
            console.log(valores.cotacaoVenda);
            //  console.log(valores.dataHoraCotacao);
        }
    };
    request.onerror = function () {
        console.log("Erro:" + request);
    };
    request.send();

    const as = ['a1', 'b2', 'c3'];
    for (let ass of as) {
        const contai = document.querySelector('.container');
        const aa = document.createElement('div');
        contai.appendChild(aa);
        aa.id = ass;
        console.log(aa);

    }
    a1.innerHTML = "";
    b2 = [];
    c3.innerHTML = data;
}
a();
const efeit = function () {


    for (let i = 0; i < 10; i++) {
        var eP = document.body;
        var dola = document.createElement('ul');
        dola.className = 'dolas';
        eP.appendChild(dola);
        const dol = document.querySelector("ul.dolas");
        const li = document.createElement("li");
        const random = (min, max) => Math.random() * (max - min) + min;
        const size = Math.floor(random(1, 110));
        const position = random(1, 100);
        const delay = random(0, 1);
        const duration = random(16, 32);
        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`;
        li.style.left = `${position}%`;
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
        li.innerHTML = '<img src="assets/img/oneD.png" alt="images" ></img>';
        dol.appendChild(li);
    }
}
efeit();
