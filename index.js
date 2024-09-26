

let div = document.querySelector('#root');


fetch('http://localhost:8081/api/v1/products')    
    .then(response => response.json())
    .then((data) => {
        const { products , ...pagination} = data
        div.innerHTML = products.map((product) => {
            return `<div>
                        <h1>${product.title}</h1>
                        <p>${product.description}</p>
                        <p>${product.id}</p>
                    </div>`
        }).join('')
    })
    
        

