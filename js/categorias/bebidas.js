function addBebidadiv(num) {
    const container = document.getElementById('bebidas-section');

    for (let i = 0; i < num; i++) {
        const   BebidaDiv = document.createElement('div');
        BebidaDiv.classList.add('bebidas');
        BebidaDiv.style.display = 'inline-block';
        BebidaDiv.style.margin = '5px';
        BebidaDiv.style.textDecoration="none";
        BebidaDiv.style.color="#464646";
        BebidaDiv.style.textAlign="center"
        BebidaDiv.innerHTML = `
        <img src="../../img/bebida.jpg" class="" alt="Bebida"/>

            <div>
            <ul> 
            <li><a href="#produto"> <h5>Bebida</h5></a></li>
            </ul> 
                <p>Moster</p>
                <span>R$  9.00</span>
            </div>
        `;
        container.appendChild(BebidaDiv);
    }
}
document.getElementById('bebidas-section').innerHTML = `
<main>
<h1>Bebidas</h1>
<section id="bebidas-section">

  </section>
  </main>
`;

addBebidadiv(4);