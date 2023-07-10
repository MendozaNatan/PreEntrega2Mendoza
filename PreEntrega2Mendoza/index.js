
// let unNumero = 6
// if (unNumero == 5)
// {
//     console.log("el numero es 5");
// }
// else (unNumero == 6)
// {
//     console.log ("casi pero no");
// }

// console.log ("hola world")



// function mostrar() {
//      alert("Bienvenido")
// }

// let edad = parseInt(prompt ("Ingrese edad")) 
// {

//      if (edad > 18) {
//           function mostrar(){
//           alert("Bienvenido");}
//           setTimeout (mostrar, 500)
//      }
//      else {
//           alert ("no puede netrar a esta pagina")
//           wwindow.close()
//      }
// }






function mostrar() {
           alert ("pulse enter para continuar");
}

const productos = [
     { nombre: "Comprar", precio: 4500 },
     { nombre: "Producir", precio: 5000 },
     { nombre: "grabar", precio: 10000 },
     { nombre: "Masterizar", precio: 4000 },
   ];
 
   let carrito = [];
   let nombre = "";
   let contraseña = 0;
 
 // DATOS DEL COMPRADOR

 nombre = prompt ("ingrese nombre de usuario")
 alert (nombre)
 
 function ingresoDeDatos() {
      prompt("Ingrese su nombre");
     contraseña += parseInt(prompt("Cree contraseña usando numeros")
     );
     let datosComprador = `-Nombre: ${nombre}\n-contraseña: ${contraseña}\n`;
     return datosComprador;
   }
   
   let validaccionDatos = prompt(
     `los datos:\n${ingresoDeDatos()}\nson correctos? \nresponda con un "si" o "no"`
   );
   while (validaccionDatos != "si" && validaccionDatos != "no") {
     confirmacion = prompt(`Responde con "si" o "no"`);
     validaccionDatos = confirmacion;
   }
 
 // COMPRA
 
 if (validaccionDatos === "si") {
     alert(
       "A continuacion nuestros productos disponibles.\nSelecciona cual o cuales deseas de la siguiente lista:"
     );
     let listaDeProductos = productos.map(
       (producto) => producto.nombre + " - " + "$" + producto.precio
     );
     alert(listaDeProductos.join("\n"));
   } else {
     alert("gracias, hasta la proxima!");
   }
   function comprar() {
   
   //   AGREGAR PRODUCTO
   
     let id = "";
     while (id != "ok") {
       id = prompt(
         `ingresa el nombre del producto o para finalizar tu compra escribe la palabra "ok"`
       );
       if (
         id == "comprar" ||
         id == "producir" ||
         id == "grabar" ||
         id == "masterizar" 
       ) {
         switch (id) {
             case "comprar":
               precio = 4500
             case "producir":
               precio = 5000;
               break;
             case "grabar":
               precio = 10000;
               break;
             case "masterizar":
               precio = 4000;
               break;
           }
         let cantidad = parseInt(prompt("cuantas unidades queres?"));
         carrito.push({ id, precio, cantidad });
       }
     }
   
   //  RESUMEN DE LA COMPRA
 
     let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);
     alert(`Los productos seleccionados son:\n${compra.join("\n")}`);
     const total = carrito.reduce(
       (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad * 0.21 ,
       0
     );
     alert(`El costo de impuesto IVA es de: $${total}`);
 
 // COMPRA
 
   }
   comprar();
   
   let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
   while (terminarCompra !== "no" || terminarCompra !== "si") {
     if (terminarCompra == "si") {
       alert(
         `Gracias ${nombre} por tu compra, en instantes te contactaran!!\n`
       );
       break;
     } else if (terminarCompra == "no") {
       alert(`Gracias, te esperamos la proxima!!`);
       break;
     } else {
       alert(`responde con "si" o "no"`);
       terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
     }
   }
 
 