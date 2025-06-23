const products = [
{id: 1, name:"Laptop", price: 1200},
{id: 2, name:"Phone", price: 800},
{id: 3, name:"Monitor", price: 300},
{id: 4, name:"Keyboard", price: 100},
];

// филтрирање по параметар

const expenProducts = products.filter(product => product.price > 500);
console.log(expenProducts);

// сортирање на дадена низа по параметар

const sortiranjePoCena = [...products].sort((a,b) => a.price - b.price);
console.log(sortiranjePoCena);

// сумирање на сите цени

const siteCeni = products.reduce((sum,product) => sum + product.price, 0);
console.log("Zbir" , siteCeni);

// пронаоѓање на член по параметар

const telefon = products.find(product => product.name === "Phone");
console.log(telefon);

// Функциите се прв степен граѓани во Јаваскрипт зато може да се чуваат во променливи , да се проследуваат како аргументи и да се враќаат од други финкции.