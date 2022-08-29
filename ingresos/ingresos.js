let total = document.getElementById('total')

let Total_mes =JSON.parse(localStorage.getItem('Total_mes'))


function mostrarTotal() {
  
    total.innerHTML = `$ ` + (Total_mes || 0  )
}
mostrarTotal();



function ingresarDatos(a) {


    let suma = Total_mes + parseInt(a);

    total.innerHTML = `
$ ${suma}
    `;

    localStorage.setItem('Total_mes', suma)
}
