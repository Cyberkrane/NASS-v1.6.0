let total = document.getElementById('total')

let Total_GF =JSON.parse(localStorage.getItem('Total_GF'))


function mostrarTotal() {
  
    total.innerHTML = `$ ` + (Total_GF || 0 )

    console.log(typeof(Total_GF))
}
mostrarTotal();



function ingresarDatos(a, b, c, d) {


    let suma = Total_GF + parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);

    total.innerHTML = `
$ ${suma}
    `;

    localStorage.setItem('Total_GF', suma)
}
