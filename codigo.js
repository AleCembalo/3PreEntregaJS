
let tarjetaCepas = document.getElementById('tarjeta');
const botonesMenu = document.querySelectorAll (".botonMenu");
let totalCompra = document.getElementById('total');
let subTotal = document.getElementById('subTotal');
let montoFinal = document.getElementById('montoFinal');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// RECUPERAR CARRO STORAGE
function cargarCarrito(){

    if (carrito.length != 0) {
        for (const prod of carrito){
            document.getElementById('tablabody').innerHTML +=`
            <tr>
                <td><img class='fotocarro' src=${prod.foto}></td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button id=${prod.id}  class='botonEliminar btn'>🗑️</button></td>
            </tr>`;
        }    
        const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
        totalCompra.innerHTML = sumaTotal;
    }
    actualizarBotonesEliminar();
    actualizarTotal();
    actualizarBotonTerminar();
    actualizarSubTotal();
}
cargarCarrito();

// STOCK

function renderizarCepas(stock){
    tarjetaCepas.innerHTML ='';
    for (const item of stock){
        tarjetaCepas.innerHTML += `
                    <section class="col-sm-12 col-md-6 col-lg-4 col-xl-4 tarjeta">    
                        <div class="imagen">
                        <img class="coco" src="${item.foto}" alt="cepaFoto">
                            <div class="icono">
                                <strong>PACK X 3<br>$ ${item.precio}</strong>
                            </div>
                        </div>
                        <div class="texto1">
                            ${item.nombre}
                        </div>
                        <div class="texto2">
                            ${item.familia}
                        </div>
                        <div class="texto3">
                            <div class="izquierda">
                                <div>
                                    THC ${item.thc}%
                                </div>
                            </div>
                            <div class="centro">
                                <div>
                                    CBD ${item.cbd}%
                                </div>
                            </div>
                            <div class="derecha">
                                <div>
                                    ${item.tipo}
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="texto4">
                            <button id='btn${item.id}' class="comprar">
                                <i class="fa-solid fa-cart-arrow-down" style="color: #ffffff;"></i>
                                <span>Agregar al carrito</span>
                            </button>
                        </div>
                    </section>`;
    }

    cepas.forEach((item) => {
        document.getElementById(`btn${item.id}`).addEventListener('click', () => {
            agregarACarrito(item);
        });
    });
}

renderizarCepas(cepas);

// MENU

botonesMenu.forEach(opcion => {

    opcion.addEventListener ("click",() => {
        if (opcion.id === 'inicio'){
            renderizarCepas(cepas);
        } else if (opcion.id === 'feminizadas'){
            const feminizadas = cepas.filter (cepa=> cepa.sexo === 'Feminizada');
            renderizarCepas(feminizadas);
        } else if (opcion.id === 'regulares'){
            const regulares = cepas.filter (cepa=> cepa.sexo === 'Regular');
            renderizarCepas(regulares);
        } else if (opcion.id === 'sativas'){
            const sativas = cepas.filter (cepa=> cepa.tipo === 'Sativa');
            renderizarCepas(sativas);
        } else if (opcion.id === 'hibridas'){
            const hibridas = cepas.filter (cepa=> cepa.tipo === 'Hibrida');
            renderizarCepas(hibridas);
        } else if (opcion.id === 'indicas'){
            const indicas = cepas.filter (cepa=> cepa.tipo === 'Indica');
            renderizarCepas(indicas);
        }
    })
});

// CARRITO
// ACTUALIZAR

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".botonEliminar");

    botonesEliminar.forEach(boton => {
            boton.addEventListener('click',()=>{
            const semaEliminada = carrito.find((cepa) => cepa.id == boton.id);
            eliminarDelCarrito(semaEliminada);
        });
    })
}

function actualizarBotonTerminar(){
    document.getElementById('terminarCompra').addEventListener('click', () => {
        mostrarCompraFinal(carrito);
    });
}

function actualizarTotal() {
    const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    totalCompra.innerHTML = sumaTotal;
}

function actualizarSubTotal(){
    const sumaSubTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    subTotal.innerHTML = sumaSubTotal;
}

function eliminarDelCarrito(sema){
        const index = carrito.indexOf(sema);
        carrito.splice(index,1);
        document.getElementById('tablabody').innerHTML = ``;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
    }

function agregarACarrito(semilla){
    carrito.push(semilla);
    //SWEET ALERT
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        iconColor: '#3085d6',
        color: '#3085d6',
        background:'#2f415b',
        heightAuto: false,
        toast: true,
        title: `${semilla.nombre}, agregado al carrito!`,
        showConfirmButton: false,
        timer: 1500
    })

    document.getElementById('tablabody').innerHTML +=`
        <tr>
            <td><img class='fotocarro' src=${semilla.foto}></td>
            <td>${semilla.nombre}</td>
            <td>${semilla.precio}</td>
            <td><button id= ${semilla.id} class='botonEliminar btn'>🗑️</button></td>
        </tr>`;
    const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    totalCompra.innerHTML = sumaTotal;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarBotonesEliminar();
    actualizarTotal();
    actualizarSubTotal();
    actualizarBotonTerminar();
}

function vaciarCarro(){
    carrito.splice(0, carrito.length);
    document.getElementById('tablabody').innerHTML ='';
    totalCompra.innerHTML = '';
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarTotal();
    actualizarSubTotal();
}

// document.getElementById(`terminarCompra`).addEventListener('click', () => {
//     mostrarCompraFinal(carrito);
// });

function mostrarCompraFinal(){
    document.getElementById('tablabodyTerminar').innerHTML =``
    if (carrito.length != 0) {
        for (const prod of carrito){
            document.getElementById('tablabodyTerminar').innerHTML +=`
            <tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
            </tr>`;
        }
        const sumaSubTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
        subTotal.innerHTML = sumaSubTotal;
        montoFinal.innerHTML = '$'+sumaSubTotal;
    }
    elegirEnvio();
}

// function elegirFormaDePago (){

//     const sumaSubTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
//     montoFinal.innerHTML = sumaSubTotal;    
//     document.getElementById(`flexRadioDefault4`).addEventListener('click', () => {
//         actualizarSubTotal();
//         montoFinal.innerHTML = '$'+(sumaSubTotal * 0.9).toFixed(2);
//     });
//     document.getElementById(`flexRadioDefault5`).addEventListener('click', () => {
//         actualizarSubTotal();
//         montoFinal.innerHTML = '$'+(sumaSubTotal);
//     });
//     document.getElementById(`flexRadioDefault6`).addEventListener('click', () => {
//         actualizarSubTotal();
//         montoFinal.innerHTML = '$'+(sumaSubTotal * 0.9).toFixed(2);
//     });
// }
// elegirFormaDePago();

function elegirEnvio (){
    const radiosEnvio = document.getElementsByTagName('input');
    const sumaSubTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);

    for (const radio of radiosEnvio){
        radio.addEventListener('click',()=>{
            if (radio.id === 'flexRadioDefault1'){
                montoFinal.innerHTML = sumaSubTotal + 3100;
            } else if (radio.id === 'flexRadioDefault2'){
                montoFinal.innerHTML = sumaSubTotal + 3400;
            } else if (radio.id ==='flexRadioDefault3'){
                montoFinal.innerHTML = sumaSubTotal;
            }
        })
    }
}
