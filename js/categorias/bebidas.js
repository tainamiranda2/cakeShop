function addBebidadiv(num) {
    const container = document.getElementById('bebidas-section');

    for (let i = 0; i < num; i++) {
        const   BebidaDiv = document.createElement('div');
        BebidaDiv.classList.add('bebidas');
        BebidaDiv.style.display = 'inline-block';
        BebidaDiv.style.margin = '5px';
        BebidaDiv.innerHTML = `
        <img src="../../img/bebida.jpg" class="" alt="Bebida"/>

            <div>
                <h5>Monster</h5>
                <p>Moster</p>
                <span>$ 9.00</span>
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