const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Las pizzas que tengan un id impar.


const listaIdImpar = pizzas.filter(p => p.id %2 != 0);
console.log(listaIdImpar);

console.log("\n");

//Responder: ¿Hay alguna pizza que valga menos de $600?

const menorPrecio = pizzas.find(p => p.precio < 600);
console.log("La pizza de menor valor que $600 es "+menorPrecio.nombre+" con un precio de $"+menorPrecio.precio);

console.log("\n");

//El nombre de cada pizza con su respectivo precio.

const nombreYPrecio = pizzas.map((p)=>{

  console.log("Nombre: "+p.nombre+" Precio: $"+p.precio);
})

console.log("\n");

//Todos los ingredientes de cada pizza

const ingredientesCadaPizza = pizzas.forEach(pizza => {

  console.log("## "+pizza.nombre+" ##");
  pizza.ingredientes.forEach(i => {

    console.log("→ "+i);
  })
  console.log("\n");
})