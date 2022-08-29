let total = document.getElementById('total')

let Total_mes = JSON.parse(localStorage.getItem('Total_mes'))
let Total_GV = JSON.parse(localStorage.getItem('Total_GV'))
let Total_GF = JSON.parse(localStorage.getItem('Total_GF'))


function mostrarTotal() {

    let Total_updated = Total_mes - (Total_GV + Total_GF)

    total.innerHTML = `$ ` + Total_updated

}
mostrarTotal();

function borrarDatos() {

    total.innerHTML = `
    <h5>Estas segur@ de borrar los datos?</h5>
    <label for="si">si</label>
    <input type="checkbox" name="si" id="si">
    <label for="no">no</label>
    <input type="checkbox" name="no" id="no">
    `

    let si = document.getElementById('si')
    let no = document.getElementById('no')

    si.addEventListener('click', e => {

        e.preventDefault()

        localStorage.removeItem('Total_mes')
        localStorage.removeItem('Total_GV')
        localStorage.removeItem('Total_GF')

        total.innerHTML = `
        <h4>Datos Eliminados</h4>
        `
        setTimeout(() => {
            
            total.innerHTML =`
            <h3 class="text-center" id="total">$ 0 </h3>
            `
        }, 3000);
    })

    no.addEventListener('click', e => {
        total.innerHTML = `
        <h4>Los datos no seran eliminados.</h4>
        `

        setTimeout(() => {
            total.innerHTML =`
            <h3 class="text-center" id="total"> </h3>
            `
            mostrarTotal()
        }, 3000);
    })

    
}