function createMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    

    console.log(name, email, message)
    //validaçoes

    fetch('http://127.0.0.1:5000/createmessage', { 
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({name, email, message})
        })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data) 
        alert("Mensagem Enviada com Sucesso!")
    })
    .catch((err) => console.log(err));
}

