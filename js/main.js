document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll(' li a');
  
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const sectionId = this.getAttribute('href'); 
            const targetSection = document.querySelector(sectionId); 
  
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.add('d-none');
            });
  
            targetSection.classList.remove('d-none');
        });
    });
  });
  
function addBolodiv(num) {
    const container = document.getElementById('bolos-section');

    for (let i = 0; i < num; i++) {
        const boloDiv = document.createElement('div');
        boloDiv.classList.add('bolos');
        boloDiv.style.display = 'inline-block';
        boloDiv.style.margin = '5px';
        boloDiv.style.textDecoration="none";
        boloDiv.style.textAlign="center"
        boloDiv.style.color="#464646";
        boloDiv.innerHTML = `

            <img src="../img/bolo.jpg" class="" alt="Bolo de exemplo"/>
            <div>             
               <ul> 
               <li><a href="#produto"> <h5>Bolo</h5></a></li>
               </ul>
            <p>Bolo de chocolate ao leite</p>
                <span>R$ 36.00</span>
            </div>
        `;
        container.appendChild(boloDiv);
    }
}

function addDocediv(num) {
    const container = document.getElementById('doces-section');

    for (let i = 0; i < num; i++) {
        const doceDiv = document.createElement('div');
        doceDiv.classList.add('doces');
        doceDiv.style.display = 'inline-block';
        doceDiv.style.margin = '5px';
        doceDiv.style.color="#464646";
        doceDiv.style.textAlign="center"
        doceDiv.style.textDecoration="none";
        doceDiv.innerHTML = `
            <img src="../img/doce.jpg" class="" alt="Doce de exemplo"/>
            <div>
            <ul> 
            <li><a href="#produto"> <h5>Doce</h5></a></li>
            </ul>
                <p>Doce de chocolate ao leite</p>
                <span>R$  36.00</span>
            </div>
        `;
        container.appendChild(doceDiv);
    }
}

function addPizzadiv(num) {
    const container = document.getElementById('pizzas-section');

    for (let i = 0; i < num; i++) {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('pizza');
        pizzaDiv.style.display = 'inline-block';
        pizzaDiv.style.color="#464646";
        pizzaDiv.style.margin = '5px';
        pizzaDiv.style.textAlign="center"
        pizzaDiv.style.textDecoration="none";
        pizzaDiv.innerHTML = `
            <img src="../img/pizza.jpg" class="" alt="Pizza de exemplo"/>
            <div>
            <ul> 
            <li><a href="#produto"> <h5>Pizza</h5></a></li>
            </ul>
                <p>Pizza de frango</p>
                <span>R$  36.00</span>
            </div>
        `;
        container.appendChild(pizzaDiv);
    }
}

document.getElementById('main').innerHTML = `
<main>
<h1>Principais itens</h1>
  <section id="bolos-section">
   
  </section>

  <section id="doces-section">
   
  </section>

  <section id="pizzas-section">
   
  </section>
</main>
`;

addBolodiv(4);
addDocediv(4);
addPizzadiv(4);
