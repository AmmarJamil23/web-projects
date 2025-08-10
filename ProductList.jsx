import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name: 'Phone' , price: 'Rs 50000'},
        {id: 2, name: 'Laptop' , price: 'Rs 100000'},
        {id: 3, name: 'Apple' , price: 'Rs 100/kg'},


    ]


    return (
        <div>
            {products.map(p => (
                <div key={p.id}>
                    <h2>Name: {p.name}</h2>
                    <h2>Price: {p.price}</h2>

                    </div>
            ))}
        </div>
    )
}

export default ProductList;