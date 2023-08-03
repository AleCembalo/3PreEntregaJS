
let tarjetaCepas = document.getElementById('tarjeta');
let tablaBody = document.getElementById('tablabody');
let totalCompra = document.getElementById('total');
let botonVaciarCarro = document.getElementsByClassName('botonVaciar');

// STOCK

function renderizarCepas(stock){
    tarjetaCepas.innerHTML =``
    for (const cepa of stock){
        tarjetaCepas.innerHTML += `
                    <section class="col-sm-12 col-md-6 col-lg-4 col-xl-4 tarjeta">    
                        <div class="imagen">
                        <img class="coco" src="${cepa.foto}" alt="cepaFoto">
                            <div class="icono">
                                <strong>PACK X 3<br>$ ${cepa.precio}</strong>
                            </div>
                        </div>
                        <div class="texto1">
                            ${cepa.nombre}
                        </div>
                        <div class="texto2">
                            ${cepa.familia}
                        </div>
                        <div class="texto3">
                            <div class="izquierda">
                                <div>
                                    THC ${cepa.thc}%
                                </div>
                            </div>
                            <div class="centro">
                                <div>
                                    CBD ${cepa.cbd}%
                                </div>
                            </div>
                            <div class="derecha">
                                <div>
                                    ${cepa.tipo}
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="texto4">
                            <button id=${cepa.id} type="button" data-bs-toggle="modal" data-bs-target="#myModal" class="comprar">
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

let botonesDeCompra = document.getElementsByClassName('comprar');
    for (const boton of botonesDeCompra){
        boton.addEventListener('click',()=>{
        const semaAlCarro = cepas.find((cepa) => cepa.id == boton.id);
        agregarACarrito(semaAlCarro);
        });
    }

function agregarACarrito(semilla){
    carrito.push(semilla); 
    tablaBody.innerHTML +=`
        <tr>
            <td>${semilla.nombre}</td>
            <td>${semilla.precio}</td>
        </tr>`;
    const sumaTotal = carrito.reduce((acumulador,semilla)=>acumulador+semilla.precio,0);
    totalCompra.innerHTML = sumaTotal;
}

function vaciarCarro(){
    carrito.splice(0, carrito.length);
    tablaBody.innerHTML =`
        `;
    totalCompra.innerHTML = `
    `;    
}



