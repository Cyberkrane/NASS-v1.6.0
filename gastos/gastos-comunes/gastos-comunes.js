let total = document.getElementById('total')

let Total_GV =JSON.parse(localStorage.getItem('Total_GV'))


function mostrarTotal() {
  
    total.innerHTML = `$ ` + (Total_GV || 0)

    console.log(typeof(Total_GV))
}
mostrarTotal();



function ingresarDatos(a, b, c, d) {


    let suma = Total_GV + parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);

    total.innerHTML = `
$ ${suma}
    `;

    localStorage.setItem('Total_GV', suma)
}
