var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

function loadSidebarFromLocalStorage() {
    // Retrieve the sidebar content from local storage
    const sidebarContent = localStorage.getItem('sidebarContent');

    // Check if there's any content stored
    if (sidebarContent) {
        // Find the element with class "sidebar"
        const sidebarElement = document.querySelector('.sidebar');
        
        // Check if the sidebar element exists on the page
        if (sidebarElement) {
            // Set the inner HTML of the sidebar element to the stored content
            sidebarElement.innerHTML = sidebarContent;
        } else {
            console.error('No element with class "sidebar" found.');
        }
    } else {
        console.warn('No sidebar content found in local storage.');
    }
}

// Call the function to load the sidebar content
loadSidebarFromLocalStorage();




function saveSidebarToLocalStorage() {
    const sidebar = document.getElementById('sidebar');
    localStorage.setItem('sidebar', sidebar.innerHTML);
}

// Function to load sidebar state from local storage
function loadSidebarFromLocalStorage() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = localStorage.getItem('sidebar');
    if (sidebarContent) {
        sidebar.innerHTML = sidebarContent;
        // Add event listeners for buttons (plus, minus, delete) in loaded items
        const gridContainers = sidebar.querySelectorAll(".grid-container");
        gridContainers.forEach(gridContainer => {
            const plusButtons = gridContainer.querySelectorAll('.plus-button');
            plusButtons.forEach(plusButton => {
                plusButton.addEventListener('click', () => {
                    const quantityElement = plusButton.previousElementSibling;
                    let quantity = parseInt(quantityElement.textContent);
                    quantityElement.textContent = quantity + 1;
                    saveSidebarToLocalStorage();
                });
            });
            const minusButtons = gridContainer.querySelectorAll('.minus-button');
            minusButtons.forEach(minusButton => {
                minusButton.addEventListener('click', () => {
                    const quantityElement = minusButton.nextElementSibling;
                    let quantity = parseInt(quantityElement.textContent);
                    if (quantity > 1) {
                        quantityElement.textContent = quantity - 1;
                    }else{
                        gridContainer.remove();
                    }
                    saveSidebarToLocalStorage();
                });
            });
            const deleteButtons = gridContainer.querySelectorAll('.gradient-button');
            deleteButtons.forEach(gradientButton => {
                gradientButton.addEventListener('click', () => {
                    gridContainer.remove();
                    saveSidebarToLocalStorage();
                });
            });
        });
    }
}

// JavaScript function to create a pizza container from the pizza_info array
function createPizzaContainer(pizza) {
    // Create the main container section
    const pizzaContainer = document.createElement('section');
    pizzaContainer.className = 'pizza-container';
    pizzaContainer.id = pizza.id;

    // Add new badge if the pizza is new
    if (pizza.is_new) {
        const newBadge = document.createElement('div');
        newBadge.className = 'new-badge';
        newBadge.textContent = 'Новинка'; // Assuming 'Новинка' means 'New' in Ukrainian
        pizzaContainer.appendChild(newBadge);
    }

    // Add the pizza image
    const pizzaImage = document.createElement('div');
    pizzaImage.className = 'pizza-image';
    pizzaImage.style.backgroundImage = `url('${pizza.icon}')`;
    pizzaContainer.appendChild(pizzaImage);

    // Add the pizza name
    const pizzaName = document.createElement('div');
    pizzaName.className = 'pizza-name';
    pizzaName.textContent = pizza.title;
    pizzaContainer.appendChild(pizzaName);

    // Add the pizza type
    const pizzaType = document.createElement('div');
    pizzaType.className = 'pizza-type';
    pizzaType.textContent = pizza.type;
    pizzaContainer.appendChild(pizzaType);

    // Add the pizza description
    const pizzaDescription = document.createElement('div');
    pizzaDescription.className = 'pizza-description';
    const meat = pizza.content?.meat ?? [];
    const chicken = pizza.content?.chicken ?? [];
    const cheese = pizza.content?.cheese ?? [];
    const pineapple = pizza.content?.pineapple ?? [];
    const additional = pizza.content?.additional ?? [];
    
    pizzaDescription.textContent = [
        ...meat,
        ...chicken,
        ...cheese,
        ...pineapple,
        ...additional
    ].join(', ');
    pizzaContainer.appendChild(pizzaDescription);

    // Create the pizza details section
    const pizzaDetails = document.createElement('section');
    pizzaDetails.className = 'pizza-details';

    // Helper function to create detail rows
    const createDetailRow = (label, value) => {
        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        if (label) {
            const detailLabel = document.createElement('div');
            detailLabel.className = 'detail-label';
            detailLabel.textContent = label;
            detailRow.appendChild(detailLabel);
        }

        const detailValue = document.createElement('div');
        detailValue.className = 'detail-value-small';
        if (typeof value === 'string') {
            detailValue.innerHTML = value;
        } else {
            detailValue.textContent = value;
        }
        detailRow.appendChild(detailValue);

        return detailRow;
    };

    // Add details for small size
    if(pizza.small_size){
        const smallSizeDetails = document.createElement('div');
        smallSizeDetails.appendChild(createDetailRow('∅', pizza.small_size.size));
        smallSizeDetails.appendChild(createDetailRow(null, `<img src="assets/images/weight.svg" alt="Weight Icon" style="width: 16px; height: 16px; margin-right: 5px;">${pizza.small_size.weight}`));
        smallSizeDetails.appendChild(createDetailRow(null, `<strong>${pizza.small_size.price}</strong><span> грн.</span>`));
        const smallSizeButton = document.createElement('button');
        smallSizeButton.className = 'select-button';
        smallSizeButton.addEventListener('click',  () => {
            addPizzaToSidebar(pizza, 'small');
            saveSidebarToLocalStorage()
        });
        smallSizeButton.textContent = 'Купити';
        smallSizeDetails.appendChild(smallSizeButton);
        pizzaDetails.appendChild(smallSizeDetails);
    }

    // Add details for big size
    if(pizza.big_size){
        const bigSizeDetails = document.createElement('div');
        bigSizeDetails.appendChild(createDetailRow('∅', pizza.big_size.size));
        bigSizeDetails.appendChild(createDetailRow(null, `<img src="assets/images/weight.svg" alt="Weight Icon" style="width: 16px; height: 16px; margin-right: 5px;">${pizza.big_size.weight}`));
        bigSizeDetails.appendChild(createDetailRow(null, `<strong>${pizza.big_size.price}</strong><span> грн.</span>`));
        const bigSizeButton = document.createElement('button');
        bigSizeButton.className = 'select-button';
        bigSizeButton.textContent = 'Купити';
        bigSizeButton.addEventListener('click', () => {
            addPizzaToSidebar(pizza, 'big');
            saveSidebarToLocalStorage()
        });
        bigSizeDetails.appendChild(bigSizeButton);
        pizzaDetails.appendChild(bigSizeDetails);
    }

    pizzaContainer.appendChild(pizzaDetails);
    saveSidebarToLocalStorage();
    return pizzaContainer;
}

function filterPizza(category,pizzaList){
    //print("aaa");
    const pizzas = document.querySelectorAll(".pizza-container");
    pizzas.forEach(pizza => {
        pizza.style.display = "none";
        pizzaList.forEach(p=>{
            if(p.id==pizza.id){
                switch (category.toLowerCase()) {
                    case 'all':
                        pizza.style.display = "block";
                        return
                    case 'meat':
                        if(p.content.meat){
                            pizza.style.display = "block";
                        }
                        break;
                    case 'pineapple':
                        if(p.content.pineapple){
                            pizza.style.display = "block";
                        }
                        break;
                    case 'sea':
                        if(p.content.ocean){
                            pizza.style.display = "block";
                        }
                        break;
                    case 'mushroom':
                        if(p.content.mushroom){
                            pizza.style.display = "block";
                        }
                        break;
                    case 'vega':
                        if(!p.content.meat){
                            pizza.style.display = "block";
                        }   
                        break;            
                }
            }
        });
    });
}

// Function to add a pizza to the sidebar
function addPizzaToSidebar(pizza, size) {
    // Determine size details
    const sizeDetails = size === 'small' ? pizza.small_size : pizza.big_size;
    const sizeText = size === 'small' ? 'Мала' : 'Велика';
    const pizzaIdentifier = `${pizza.title} (${sizeText})`;

    // Check if the pizza is already in the sidebar
    const sidebar = document.getElementById('sidebar');
    const existingPizzas = sidebar.getElementsByClassName('grid-container');
    for (let existingPizza of existingPizzas) {
        const row1 = existingPizza.querySelector('.row1');
        if (row1 && row1.textContent === pizzaIdentifier) {
            // Increment the quantity
            const numberElement = existingPizza.querySelector('.number');
            numberElement.textContent = parseInt(numberElement.textContent) + 1;
            return;
        }
    }

    // Create the grid container
    const gridContainer = document.createElement('section');
    gridContainer.className = 'grid-container';

    // Create the column-1 div
    const column1 = document.createElement('div');
    column1.className = 'column-1';

    // Add the pizza name and size
    const row1 = document.createElement('div');
    row1.className = 'row1 orange-font1';
    row1.textContent = pizzaIdentifier;
    column1.appendChild(row1);

    // Add the size and weight
    const row2 = document.createElement('div');
    row2.className = 'row2';
    const detailRowGrid1 = document.createElement('div');
    detailRowGrid1.className = 'detail-row detail-row-grid';
    detailRowGrid1.style.marginRight = '10px';
    detailRowGrid1.innerHTML = `<div class="detail-label">∅</div><div class="detail-value-small">${sizeDetails.size}</div>`;
    const detailRowGrid2 = document.createElement('div');
    detailRowGrid2.className = 'detail-row detail-row-grid';
    detailRowGrid2.innerHTML = `<div class="detail-value-small"><img src="assets/images/weight.svg" alt="Weight Icon" style="width: 16px; height: 16px; margin-right: 5px;">${sizeDetails.weight}</div>`;
    row2.appendChild(detailRowGrid1);
    row2.appendChild(detailRowGrid2);
    column1.appendChild(row2);

    // Add the price and buttons
    const row3 = document.createElement('div');
    row3.className = 'row3';
    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `${sizeDetails.price} грн.`;
    row3.appendChild(price);
    const minusButton = document.createElement('button');
    minusButton.className = 'minus-button';
    minusButton.textContent = '-';
    minusButton.addEventListener('click', () => {
        const quantityElement = minusButton.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }else{
            gridContainer.remove();
        }
        saveSidebarToLocalStorage();
    });
    row3.appendChild(minusButton);
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = '1'; // Default quantity to 1
    row3.appendChild(number);
    const plusButton = document.createElement('button');
    plusButton.className = 'plus-button';
    plusButton.textContent = '+';
    plusButton.addEventListener('click', () => {
        const quantityElement = plusButton.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        saveSidebarToLocalStorage();
    });
    row3.appendChild(plusButton);
    const gradientButton = document.createElement('button');
    gradientButton.className = 'gradient-button';
    gradientButton.innerHTML = '<span class="cross">✕</span>';
    gradientButton.addEventListener('click', () => {
        gridContainer.remove();
        saveSidebarToLocalStorage();
    });
    row3.appendChild(gradientButton);
    column1.appendChild(row3);

    // Add column-1 to the grid container
    gridContainer.appendChild(column1);

    // Add the pizza image
    const columnImg = document.createElement('img');
    columnImg.className = 'column-img';
    columnImg.src = pizza.icon;
    gridContainer.appendChild(columnImg);

    // Append the grid container to the sidebar
    sidebar.appendChild(gridContainer);
    saveSidebarToLocalStorage();
}

// Append the pizza container to a parent element (assuming there's a parent element with id 'pizza-list')
const pizzaList = document.getElementById('pizza-list');
pizza_info.forEach(pizza => {
    const pizzaContainer = createPizzaContainer(pizza);
    pizzaList.appendChild(pizzaContainer);
});

const filterButtons = document.querySelectorAll('.select-button');
filterButtons.forEach(filterButton => {
    a = document.querySelector(".selector");
    if(a){
        a.classList.remove("selector");
        a.classList.add("deselect");
    }
    filterButton.addEventListener("click",()=>{
        if(filterButton.classList.contains("deselect")){
            filterButton.classList.remove("deselect");
            filterButton.classList.add("selector");
            filterPizza(filterButton.id,pizza_info);
        }
    });
});

const clear_list = document.querySelector('.small-text');
clear_list.addEventListener("click",()=>{
    const sidebarElement = document.querySelector('.sidebar');
    buyElements = sidebar.querySelectorAll(".grid-container");
    buyElements.forEach(b=>b.remove());
    saveSidebarToLocalStorage();
});
