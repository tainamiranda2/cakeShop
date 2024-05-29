function addBoloPotEspecialdiv(num) {
    const container = document.getElementById('bolosEspeciais-section');

    for (let i = 0; i < num; i++) {
        const  boloPoteEspecialDiv = document.createElement('div');
        boloPoteEspecialDiv.classList.add('bolos');
        boloPoteEspecialDiv.style.display = 'inline-block';
        boloPoteEspecialDiv.style.margin = '5px';
        boloPoteEspecialDiv.innerHTML = `
        <img src="../../img/boloespecial.jpg" class="" alt="Bolo de pote"/>

            <div>
                <h5>Bolos</h5>
                <p>Bolo de chocolate ao leite</p>
                <span>$ 36.00</span>
            </div>
        `;
        container.appendChild(boloPoteEspecialDiv);
    }
}

document.getElementById('bolosEspeciais-section').innerHTML = `
<main>
<h1>Bolos Especiais</h1>

<section id="bolosEspeciais-section">

  </section>
  </main>
`;
addBoloPotEspecialdiv(4)