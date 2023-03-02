// console.log(`hello from JavaScript`);

const iceCream = [{
    name: 'Cookie Dough',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
}]

function addIceCream(name) {
    const flavor = iceCream.find(f => f.name == name)
    flavor.quantity++
    console.log(flavor.name)
    console.log(`Flavor Choice`, flavor);

    drawCart()
}

function addTopping(name) {
    const flavor = toppings.find(f => f.name == name)
    flavor.quantity++
    console.log(flavor.name)
    console.log(`Flavor Choice`, flavor);

    drawCart()
}

function addContainer(name) {
    const flavor = containers.find(f => f.name == name)
    flavor.quantity++
    console.log(flavor.name)
    console.log(`Flavor Choice`, flavor);

    drawCart()
}

function drawCart() {
    console.log(`Drawing Cart`);
    let total = 0
    console.log('total', total);
    let template = ``

    iceCream.forEach(f => {
        total += f.price * f.quantity

        if (f.quantity) {
            template += `
            <div class="text-danger d-flex justify-content-between align-items-center">
            <p onclick="remove(iceCream, ${f.name})"><i class="mdi mdi-delete"></i></P>
            <h4 class="fixed-header">${f.name}</h4>
            <span class="fixed-span">${f.quantity}</span>
            <span class="fixed-span text-end">$${f.price}</span>
            <span class="fixed-big text-end">$${(f.quantity * f.price).toFixed(2)}</span></div>
        `
        }

    })
    toppings.forEach(f => {
        total += f.price * f.quantity

        if (f.quantity) {
            template += `
            <div class="text-danger d-flex justify-content-between align-items-center">
            <p onclick="remove(toppings, ${f.name})"><i class="mdi mdi-delete"></i></P>
            <h4 class="fixed-header">${f.name}</h4>
            <span class="fixed-span">${f.quantity}</span>
            <span class="fixed-span text-end">$${f.price}</span>
            <span class="fixed-big text-end">$${(f.quantity * f.price).toFixed(2)}</span></div>
        `
        }

    })
    containers.forEach(f => {
        total += f.price * f.quantity

        if (f.quantity) {
            template += `
            <div class="text-danger d-flex justify-content-between align-items-center">
            <p onclick="remove(containers, ${f.name})"><i class="mdi mdi-delete"></i></P>
            <h4 class="fixed-header">${f.name}</h4>
            <span class="fixed-span">${f.quantity}</span>
            <span class="fixed-span text-end">$${f.price}</span>
            <span class="fixed-big text-end">$${(f.quantity * f.price).toFixed(2)}</span></div>
        `
        }

    })

    document.getElementById(`selection`).innerHTML = template
    document.getElementById(`total`).innerText = total
}

function checkout() {
    if (window.confirm(`Are you ready to checkout?`)) {
        console.log(`checking out`);

        iceCream.forEach(i => i.quantity = 0)
        toppings.forEach(i => i.quantity = 0)
        containers.forEach(i => i.quantity = 0)

        drawCart();
    }
}

function remove(type, name) {
    const flavor = type.find(f => f.name == name)
    flavor.quantity--

    drawCart();
}