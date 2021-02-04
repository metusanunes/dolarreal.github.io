const a = function() {

    const as = ['a','b','c'];
    for (let ass of as) {
        const contai = document.querySelector('.container');
        const aa= document.createElement('div');
        contai.appendChild(aa);
        aa.id = ass;
        console.log(aa);
    }
};
a();
