function con(){
    const real = document.getElementById('real').value;
    const resposta01 = document.querySelector('.resposta01');
    const resposta02 = document.querySelector('.resposta02');
    const resposta03 = document.querySelector('.resposta03');


    // pesquisa feita dia 22-08-20023
    // em dola americano 1.00 = 4.94 
    // em euro 1.00 =  5.36
    // em em libra 1.00 = 6.29
    // em dola canadense 1.00 = 3.64
    // em franco = 1.00 = 5.61

    if(!real){
        alert('Preencha o campo!');
    } else{
        let dola = parseFloat(real / 4.94).toFixed(2);
        let euro = parseFloat(real / 4.94).toFixed(2);
        let libra = parseFloat(real / 4.94).toFixed(2);
    
        resposta01.innerHTML = `Com ${real} você pode comparar US$${dola}`;
        resposta02.innerHTML = `Com ${real} você pode comparar ${euro} €`;
        resposta03.innerHTML = `Com ${real} você pode comparar £${libra}`;
    }
}