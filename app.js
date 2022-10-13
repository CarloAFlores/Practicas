let articulos = [
    {
        nombre_articulo: "Pizza queso",
        precio: 200.00,
        sub_categoria: "Tradicional",
        categoria: "Comida"
    },
    {
        nombre_articulo: "Pizza hawaiana",
        precio: 250.00,
        sub_categoria: "Tradicional",
        categoria: "Comida"
    },
    {
        nombre_articulo: "Sangría",
        precio: 100.00,
        sub_categoria: "Frias",
        categoria: "Qebidas"
    }
]
const  getuserr = () => {
    articulos.push("Papas");
    return articulos;
}

const menor = articulos.sort((Elige2)=> Elige2.precio>120);


const existe = articulos.find((Elige) => Elige.precio ===100);


console.log(articulos);

console.log(getuserr());

console.log(menor);

console.log(existe);
