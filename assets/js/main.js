const a = function () {
    function hora() {
        let dat = new Date();
        const data = dat.toLocaleDateString()

        return dat.toLocaleTimeString('pt-BR', {
            hour12: false
        }) + " - " + data;

    }
    const relogio= document.querySelector('.relogio');


    function i() {
       relogio.innerHTML = hora();
    }
    setInterval(i, 1000);

    var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='02/05/2021'&$format=json";
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
            var resposta = JSON.parse(request.responseText);
            var valores = resposta.value[0];
            const doll = valores.cotacaoCompra;
            const dll = doll.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            console.log(dll)
            a1.innerHTML = `US$: ${imputD}`;
            a2.innerHTML = ` ${moeda}`;
            a3.innerHTML = `${imputR} `;
            // console.log(valores.cotacaoVenda);
            document.getElementById('nreal').value = doll;
            // console.log(imputR)
            //  console.log(valores.dataHoraCotacao);

            const conversao = function (d, r) {
                ndola.value = d || 1
                nreal.value = doll;
                var cotaDola = doll;
                var dd = ndola.value;
                var m = (nreal.value *= ndola.value);
                var mm = m.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                console.log(mm)
                
                nreal.value = mm || dll
            };
            conversao()
            ndola.addEventListener('keyup', function (e) {
                if (e.keyup) {
                    resetNreal()
                }
                if (!ndola.value) return;
                conversao(ndola.value)
            });
            const cotacao = document.querySelector('.cotacao')
            ndola.addEventListener('click', function (e) {
                const el = e.target;
                if (el.ndola) return;
                document.getElementById("ndola").select();

            });
            function resetNreal() {
                nreal.value = doll;
                nreal.focus();
            }

        }
    };
    request.onerror = function () {
        console.log("Erro:" + request);
    };
    request.send();

    const moeda = '<img id="medaLib"src="assets/img/medaLib.png"  width="89"  ></img>';
    const as = ['a1', 'a2', 'a3', 'b2', 'c3'];
    const contai = document.querySelector('.cotacao');
    for (let ass of as) {
        const aa = document.createElement('div');
        contai.appendChild(aa);
        aa.id = ass;
        // console.log(aa);

    }
    let imputD = '<input id= "ndola"   placeholder="1"></input>';
    let imputR = `<input id= "nreal"></input>`;
    var n = document.querySelector('.nreal');


    // c3.innerHTML =hora+" - "+ data;

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
const efeitR = function () {


    for (let i = 0; i < 30; i++) {
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
        li.innerHTML = '<img src="assets/img/realv.png" alt="images" width = "210" ></img>';
        dol.appendChild(li);
    }
}
efeitR();
