function addBoloPotdiv(num) {
    const container = document.getElementById('bolosTradicional-section');

    for (let i = 0; i < num; i++) {
        const boloPoteDiv = document.createElement('div');
        boloPoteDiv.classList.add('bolos');
        boloPoteDiv.style.display = 'inline-block';
        boloPoteDiv.style.margin = '5px';
        boloPoteDiv.innerHTML = `
        <img src="../../img/bolopote4.jpg" class="" alt="Bolo de pote"/>

            <div>
                <h5>Bolos</h5>
                <p>Bolo de chocolate ao leite</p>
                <span>$ 36.00</span>
            </div>
        `;
        container.appendChild(boloPoteDiv);
    }
}

document.getElementById('bolosTradicional-section').innerHTML = `
<main>
<h1>Bolos tradicionais</h1>

<section id="bolosTradicional-section">

  </section>
  </main>
`;
addBoloPotdiv(4);