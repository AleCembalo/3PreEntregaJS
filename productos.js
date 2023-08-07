
class cepa{
    constructor(id, foto, nombre, tipo, thc, cbd, sexo, produccion, familia, precio){
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.tipo = tipo;
        this.thc = thc;
        this.cbd = cbd;
        this.sexo = sexo;
        this.produccion = produccion;
        this.familia = familia;
        this.precio = precio;
    }
    sumarTotalCompra(){
        totalCompra += this.precio;
    }
}

const cepa1 = new cepa(1, './Multimedia/imagenes-tarjetas/wedding-cake.png', 'Wedding cake', 'Hibrida', 24, 1, 'Feminizada', 'XL', 'Aka Triangle Mints #23, Pink Cookies.', 6500);
const cepa2 = new cepa(2, './Multimedia/imagenes-tarjetas/Gelato.png', 'Gelato', 'Hibrida', 17, 0, 'Regular', 'XXL', 'Aka Gelato 42, Larry Bird, Zelato.', 7500);
const cepa3 = new cepa(3, './Multimedia/imagenes-tarjetas/Sour-Diesel.png', 'Sour Diesel', 'Hibrida', 19, 0, 'Feminizada', 'L', 'Aka Sour D, Sour Deez.', 6000);
const cepa4 = new cepa(4, './Multimedia/imagenes-tarjetas/OG-Kush.png', 'OG Kush', 'Hibrida', 18, 0, 'Regular', 'XXL', 'AKa Premium OG Kush.', 6500);
const cepa5 = new cepa(5, './Multimedia/imagenes-tarjetas/Jack-Herer.png', 'Jack Herer', 'Sativa', 18, 1, 'Feminizada', 'L', 'Aka JH, The Jack, Premium Jack, Platinum Jack, Jack.', 8000);
const cepa6 = new cepa(6, './Multimedia/imagenes-tarjetas/Northern-lights.png', 'Northern Lights', 'Indica', 18, 1, 'Regular', 'L', 'Aka NL.', 7000);
const cepa7 = new cepa(7, './Multimedia/imagenes-tarjetas/MAC.png', 'MAC', 'Hibrida', 22, 1, 'Feminizada', 'XL', 'Aka Miracle Alien Cookies, Miracle Cookies.', 7500);
const cepa8 = new cepa(8, './Multimedia/imagenes-tarjetas/SLH.png', 'Super Lemon Haze', 'Sativa', 19, 1, 'Feminizada', 'XXL', 'Aka SLH.', 5800);
const cepa9 = new cepa(9, './Multimedia/imagenes-tarjetas/AK-47.png', 'AK-47', 'Hibrida', 19, 0, 'Regular','XL', 'Aka AK.', 5800);
const cepa10 = new cepa(10, './Multimedia/imagenes-tarjetas/BubbleGum.png', 'Bubble Gum', 'Hibrida', 17, 1, 'Regular', 'XL', 'Aka Bubba Gum.', 7000);
const cepa11 = new cepa(11, './Multimedia/imagenes-tarjetas/blueberry.png', 'Blueberry', 'Indica', 17, 1, 'Feminizada', 'L', 'Aka Berry Blue.', 6300);
const cepa12 = new cepa(12, './Multimedia/imagenes-tarjetas/TropicanaCookies.png', 'Tropicana Cookies', 'Sativa', 16, 0, 'Feminizada', 'XXL', 'Aka Tropicanna Cookies, Tropicanna Cookies F2, MTN Trop.', 6000);
const cepa13 = new cepa(13, './Multimedia/imagenes-tarjetas/Icecream.png', 'Ice Cream', 'Hibrida', 18, 1, 'Regular','XL', 'Aka Ice Cream Kush, Ice Cream #1, Ice cream #3.', 6900);
const cepa14 = new cepa(14, './Multimedia/imagenes-tarjetas/Blackdiamont.png', 'Black Diamond', 'Indica', 17, 1, 'Regular', 'L', 'Aka Black Diamond OG, Black Diamond Kush.', 7200);
const cepa15 = new cepa(15, './Multimedia/imagenes-tarjetas/Haze.png', 'Haze', 'Sativa', 18, 0, 'Feminizada', 'XL', 'Aka Original Haze, Haze Brothers.', 5800);
const cepa16 = new cepa(16, './Multimedia/imagenes-tarjetas/Fire.png', 'White Fire OG', 'Hibrida', 22, 1, 'Regular', 'L', 'Aka WiFi OG, WiFi, White Fire, WiFi Kush.', 7600);
const cepa17 = new cepa(17, './Multimedia/imagenes-tarjetas/Nerds.png', 'Nerds', 'Hibrida', 24, 1, 'Feminizada', 'XL', 'Aka Nerdz, Blue Nerds, Pink Nerds, Nerds OG, Nerdz OG, Blue Nerd.', 8000);
const cepa18 = new cepa(18, './Multimedia/imagenes-tarjetas/Afghani.png', 'Afghani', 'Indica', 18, 0, 'Regular', 'XXL', 'Aka Afghan, Afghanistan.', 7000);
const cepa19 = new cepa(19, './Multimedia/imagenes-tarjetas/Sour-Tangie.png', 'Sour Tangie', 'Sativa', 18, 0, 'Feminizada', 'XL', 'Aka Sunva.', 6800);
const cepa20 = new cepa(20, './Multimedia/imagenes-tarjetas/Blueberry-Kush.png', 'Blueberry Kush', 'Indica', 18, 1, 'Regular', 'XL', 'Aka Blueberry OG Kush.', 7600);

const cepas = [cepa1, cepa2, cepa3, cepa4, cepa5, cepa6, cepa7, cepa8, cepa9, cepa10, cepa11, cepa12, cepa13, cepa14, cepa15, cepa16, cepa17, cepa18, cepa19, cepa20];
