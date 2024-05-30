function addBolodiv(num) {
    const container = document.getElementById('galeria');

    for (let i = 0; i < num; i++) {
        const boloDiv = document.createElement('div');
        boloDiv.classList.add('combo-galeria');
        boloDiv.innerHTML = `
            <img src="../img/pizza.jpg" class="" alt="Pizza de exemplo"/>
            <ul>
                <li><a href="#produto"><h5>Pizza</h5></a></li>
            </ul>
            <p>Pizza de frango</p>
            <span>R$ 36.00</span>
        `;
        container.appendChild(boloDiv);
    }
}

document.getElementById('galeria').innerHTML =`
<aside>
<h1>teste</h1>

<section id= "galeria">

</section>
</aside>
`;

addBolodiv(4);