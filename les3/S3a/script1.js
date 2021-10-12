

let magicNumber = 0;

window.onload = function () {
    document.getElementById('geussBtn')
    .addEventListener('click',function(event){
        let message = '';
        compareNumber(document)
    })
}

function addMessage(m, type) {
    document.getElementById('messages').innerHTML= 
    `<div class ="alert ${type == 'S'? 'alert-succes' : 'alert-danger'}  " role = "alert">
        ${m}
    </div>`
    
}

function generateNumber() {
    magicNumber = Math.floor(Math.random() *21);
    return magicNumber;
}