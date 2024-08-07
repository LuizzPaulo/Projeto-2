let form= document.getElementById('form-contatos');

let linhas="";

let nomes=[];
let telefones=[];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adiciona();

})

function adiciona(){
    let nome= document.getElementById('nome').value;
    let telefone= document.getElementById('telefone').value;

    if(nomes.includes(nome)){
        alert('Esse nome de contato já existe!');
    
    }else{
    nomes.push(nome);
    telefones.push(telefone);

    let linha= '<tr>';
    linha+=`<td>${nome}</td>`;
    linha+=`<td>${parseInt(telefone)}</td>`;
    linha+='</tr>';

    linhas+=linha;

    linha='';

    let corpoTabela=document.getElementById('corpoTabela');
    corpoTabela.innerHTML= linhas;

    document.getElementById('nome').value="";
    document.getElementById('telefone').value="";
    }
    }
