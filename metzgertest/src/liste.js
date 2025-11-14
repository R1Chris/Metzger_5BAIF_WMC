const products = [{
        id: 1,
        name: "Kaffe",
        preis: 9.90,
        isLegal: true,
        description: "spitzen vollender Edel Kaffee"
    },
    {
        id: 2,
        name:"Ganja",
        preis: 15,
        isLegal: false,
        description: "Nebelmacher"
    },
    {
        id:3,
        name:"Zucker",
    preis:8,
    isLegal:true,
    desription:"wir brauchen ihn"
    }];

const products10_20= products.filter(p=>p.preis > 10 && p.preis < 20)

console.log(products10_20)

const products10_20New = []
for (let p in products){
    if (p.preis>10 && p.preis<20){
        products10_20New.push(p);
    }

}

    console.log(products10_20New)

const productsToCheap =products.filter(p=>p.preis< 10).map(p=>p.preis*2);

console.log(productsToCheap);

const productsToCheap2=[];

for (let p in products){
    if(p.preis>10){
        p.preis*2
        productsToCheap2.push(p)
    }
}


const newProducts= [...products,products];
console.log(newProducts);

const fruits= ["apple","banane","pineapple"];

const newFruits =[...fruits,fruits];
console.log(newFruits);

const newFruits2=[]
const newProducts2=[]
const [first,...rest]=newFruits2;
const [firsta,...rest2]=newProducts2



console.log(newFruits2)
console.log(newProducts2)

const {name,id}= products;
const [elem1, elem2]=fruits;


function sumAll(...numbers) {
    let sum = 0;
    for (let p in numbers) {
        sum += Number( p.preis)
    }
    return sum;
}
console.log(sumAll(1,2,3))
const newArray = products.reduce((total, product) =>total + product.price, 0);
console.log(newArray);


