import ProductListComponent from "./ProductListCompents.jsx";
import {Button} from "./ProductListCompents.jsx";

function App() {

    const products = [{
        id: 1,
        name: "Kaffe",
        preis: 9.90,
        isLegal: true,
        description: "spitzen vollender Edel Kaffee"
    },
        {
            id: 2,
            name: "Ganja",
            preis: 15,
            isLegal: false,
            description: "Nebelmacher"
        },
        {
            id: 3,
            name: "Zucker",
            preis: 8,
            isLegal: true,
            desription: "wir lieben ihn"
        }];


    function foobar() {
        console.log("jemand hat mich angepixt")
    }


    return (
        <>
            <h1>Hello World</h1>
            <ProductListComponent products={products} />
            <Button onClick={foobar}/>
        </>

    )
}

export default App
