
const dishes = [];

dishes.push({
id: '1',
name: 'Burger and french fries',
price: '18',

});

dishes.push({
id: '2',
name: 'Steak and salade',
price: '30',
})

dishes.push({
id: '3',
name: 'Falafel',
price: '5',
})


window.onload = () => {
    console.log('loaded');

    document.getElementById('form')
    .addEventListener('submit', event => {
        event.preventDefault();

        let name = document.getElementById('nameinput').value;
        let email = document.getElementById('emailinput').value;
        let order = document.getElementById('orderinput').value;
        
        let orders = {
            name,
            email,
            order,
            
        }


    function printOrder(name, email, order) {
        let strings = `The order for the customer ${name} is the following: ${order}
        The customer may be notified by email: ${email}`

        document.getElementById('message').innerHTML= strings;
    }
        
    printOrder(orders.name, orders.email, orders.order);
        

    })

  };

