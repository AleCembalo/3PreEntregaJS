
let tarjetaCepas = document.getElementById('tarjeta');
let totalCompra = document.getElementById('total');
let botonesEliminar = document.querySelectorAll(".botonEliminar");
let botonesDeCompra = document.getElementsByClassName('comprar');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// RECUPERAR CARRO STORAGE
function cargarCarrito(){

    if (carrito.length != 0) {
        for (const prod of carrito){
            document.getElementById('tablabody').innerHTML +=`
            <tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button id= ${'posicion'+carrito.indexOf(prod)} class='botonEliminar btn'>🗑️</button></td>
            </tr>`;
        }    
        const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
        totalCompra.innerHTML = sumaTotal;
    }
    actualizarBotonesEliminar();
    actualizarTotal();
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
                            <button id=${item.id} class="comprar">
                                <i class="fa-solid fa-cart-arrow-down" style="color: #ffffff;"></i>
                                <span>Agregar al carrito</span>
                            </button>
                        </div>
                    </section>`;
    }
}

renderizarCepas(cepas);

// MENU

const botonesMenu = document.querySelectorAll (".botonMenu");

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
        }  else if (opcion.id === 'indicas'){
            const indicas = cepas.filter (cepa=> cepa.tipo === 'Indica');
            renderizarCepas(indicas);
        }
    })
});


//CARRITO

botonesDeCompra = document.getElementsByClassName('comprar');
    for (const boton of botonesDeCompra){
        boton.addEventListener('click',()=>{
        const semaAlCarro = cepas.find((cepa) => cepa.id == boton.id);
        agregarACarrito(semaAlCarro);
        });
    }

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".botonEliminar");

    botonesEliminar.forEach(boton => {
            boton.addEventListener('click',()=>{
            const semaEliminada = carrito.find((cepa) => 'posicion'+carrito.indexOf(cepa) == boton.id);
            eliminarDelCarrito(semaEliminada);
        });
    })
}

function actualizarTotal() {
    const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    totalCompra.innerHTML = sumaTotal;
}

function eliminarDelCarrito(){
    for (const boton of botonesEliminar){
        boton.addEventListener('click',()=>{
        const semaEliminada = carrito.find((cepa) => 'posicion'+carrito.indexOf(cepa) == boton.id);
        const index = carrito.indexOf(semaEliminada);
        carrito.splice(index,1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        carrito = JSON.parse(localStorage.getItem('carrito'));
        document.getElementById('tablabody').innerHTML = ``;
        cargarCarrito();
        });
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}
eliminarDelCarrito();


function agregarACarrito(semilla){
    carrito.push(semilla);
    document.getElementById('tablabody').innerHTML +=`
        <tr>
            <td>${semilla.nombre}</td>
            <td>${semilla.precio}</td>
            <td><button id= ${'posicion'+carrito.indexOf(semilla)} class='btn'>🗑️</button></td>
        </tr>`;
    const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    totalCompra.innerHTML = sumaTotal;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function vaciarCarro(){
    carrito.splice(0, carrito.length);
    document.getElementById('tablabody').innerHTML ='';
    totalCompra.innerHTML = '';
    localStorage.removeItem('carrito');
    actualizarTotal();
}