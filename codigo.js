
let tarjetaCepas = document.getElementById('tarjeta');
let tablaBody = document.getElementById('tablabody');
let totalCompra = document.getElementById('total');


function renderizarCepas(cepas){

    tarjetaCepas.innerHTML='';

    for (const cepa of cepas){
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
                </section>
    `;
    }

    let botonesDeCompra = document.getElementsByClassName('comprar');
        for (const boton of botonesDeCompra){
            boton.addEventListener('click',()=>{
                const semaAlCarro = cepas.find((cepa) => cepa.id == boton.id);
                agregarACarrito(semaAlCarro);
            });
        }

    function agregarACarrito(cepa){
        carrito.push(cepa);
        tablaBody.innerHTML +=`
            <tr>
                <td>${cepa.nombre}</td>
                <td>${cepa.precio}</td>
            </tr>`;
        const sumaTotal = carrito.reduce((acumulador,cepa)=>acumulador+cepa.precio,0);
        totalCompra.innerHTML = sumaTotal;
    }
}

renderizarCepas(cepas);

