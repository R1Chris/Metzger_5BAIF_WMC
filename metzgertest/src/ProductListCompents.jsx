export default function ProductListComponent({ products,isLegal, onClick }) {
    if(products.length ===0){
        return <p>Produkte nicht vorhanden!</p>
    }

    return (
        <>
            <h2> Produkte</h2>
            <ul>

                {products.filter(p=>p.isLegal===isLegal)}
                {products.map((item, index) =>
                    (<li key={index} >{item.name} , {item.preis}"</li>)
                )}
                <button onClick={onClick}/>
            </ul>

        </>
    );
}

export function Button(props){
    const onclick =props.onclick

    return(
        <button onClick={onclick}>
            klick mich
        </button>

    );


}