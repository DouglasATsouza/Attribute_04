const cards = document.getElementsByClassName("card");
for(const c of cards){
    c.setAttribute('style', 'background-color: orange');

    c.children[0].innerHTML = 'Meu Card';
    c.children[0].setAttribute('style','color: #2b385b; margin-bottom: 30px');

    c.children[1].innerHTML = 'Descrição modificada pelo Javascript';
    c.children[1].setAttribute('style','color: #ffff; margin-bottom: 30px');

    c.children[2].setAttribute('style','background-color: green; border-radius: 30px; padding: 10px ; border-radius: 10px; border: none ; color: white');

    c.children[3].setAttribute('style','background-color: red; border-radius: 30px; padding: 10px ; border-radius: 10px; border: none; color: white');
}

const listaBtnEditar = document.querySelectorAll('.botao-editar');
const listaBtnApagar = document.querySelectorAll('.botao-apagar');

for(const btn of listaBtnEditar){
    btn.setAttribute('onclick', 'editarCard()')
}
function editarCard(){
    alert('Clicou!')
}
for(const btn of listaBtnApagar){
    btn.setAttribute('onclick', 'apagarCard()')
}
function apagarCard(){
    const confirma = confirm('Tem certeza que desejas excluir o card?')
    
    confirma ? alert('Confirmado!') : alert('Cancelou')
}