// let nombre = localStorage.getItem("nombre");
// if (nombre == null){
//     nombre = prompt("Ingrese su nombre");
//     localStorage.setItem("nombre",nombre)
// }
// let campoSaludo = document.getElementById("saludos")
// campoSaludo.innerHTML = `<h2>Bienvenido ${nombre}!</h2>`;

class Producto{
    constructor(id,marca,modelo,precio){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = 10;
    }
    vender(){
        this.stock -=1;
    }
}

let productos = [];

const producto1 = new Producto(1,"Adidas","Precision",20000);
const producto2 = new Producto(2,"Adidas","Supernova",40000);
const producto3 = new Producto(3,"Bullpadel","Evo",50000);
const producto4 = new Producto(4,"Dunlop","Rapidpower",25000);
const producto5 = new Producto(5,"Dunlop","Rocket",10000);
const producto6 = new Producto(6,"Vairo","Razor",15000);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);

let carrito = [];

const guardarLocal = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

for(const producto of productos){
    guardarLocal(producto.id, producto);
}

    let btn1 = document.getElementById("product1");
    btn1.addEventListener("click",()=> agregarElemento(1));

    let btn2 = document.getElementById("product2");
    btn2.addEventListener("click",()=> agregarElemento(2));

    let btn3 = document.getElementById("product3");
    btn3.addEventListener("click",()=> agregarElemento(3));

    let btn4 = document.getElementById("product4");
    btn4.addEventListener("click",()=> agregarElemento(4));

    let btn5 = document.getElementById("product5");
    btn5.addEventListener("click",()=> agregarElemento(5));

    let btn6 = document.getElementById("product6");
    btn6.addEventListener("click",()=> agregarElemento(6));
    

    // let btn7 = document.getElementById("checkout");
    // btn7.addEventListener("click",mostrarCarrito)

    let btn8 = document.getElementById("deleteproduct1");
    btn8.addEventListener("click",()=>{
        carrito = []
        alert("El carrito se vacío correctamente")
    })

    let btn9 = document.getElementById("deleteproduct2");
    btn9.addEventListener("click",()=>{
        carrito = []
        alert("El carrito se vacío correctamente")
    })

    let btn10 = document.getElementById("deleteproduct3");
    btn10.addEventListener("click",()=>{
        carrito = []
        alert("El carrito se vacío correctamente")    
    })

    let btn11 = document.getElementById("deleteproduct4");
    btn11.addEventListener("click",()=>{
        carrito = [] 
        alert("El carrito se vacío correctamente")   
    })

    let btn12 = document.getElementById("deleteproduct5");
    btn12.addEventListener("click",()=>{
        carrito = []
        alert("El carrito se vacío correctamente")
    })

    let btn13 = document.getElementById("deleteproduct6");
    btn13.addEventListener("click",()=>{
        carrito = []
        alert("El carrito se vacío correctamente")    
    })



function agregarElemento(productoID){
    let producto = productos.find((p=>p.id == productoID));
    console.log(producto)
    carrito.push(producto);
    if(productoID == 1){
        producto1.vender()
    }
    else if(productoID == 2){
        producto2.vender()
    }
    else if(productoID == 3){
        producto3.vender()
    }
    else if(productoID == 4){
        producto4.vender()
    }
    else if(productoID == 5){
        producto5.vender()
    }
    else if(productoID == 6){
        producto6.vender()
    }
    alert(`Se ha agregado correctamente el producto ${producto.marca} ${producto.modelo}`)
}



function mostrarCarrito(){
    console.log("El carrito contiene los siguientes productos:")
    let preciototal = 0;
    for(const producto of carrito){
        console.log(`Marca:${producto.marca}, Modelo:${producto.modelo} y Precio:${producto.precio} pesos`);
        preciototal += producto.precio
    }
    alert(`El precio total es de ${preciototal} pesos`)
}




// for(const producto of carrito){
//     console.log(carrito)
//     elementProductos.append(`
//         <div>
//             <h3>${producto.marca}</h3>
//             <b> Precio: $ ${producto.precio}
//         </div> 
//     `)
// }
