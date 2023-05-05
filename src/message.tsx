
function Message() {
    const name='Pawan';
    if (name)
        return <h1>Hello {getName()}!!</h1>;
    else
    return <h1>Hello world!!</h1>;
}

function getName(){
    return "Pawan Kumar KC!!"
}

export default Message;