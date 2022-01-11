var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //faz com que o form não faça suas ações padrões, como enviar algo para uma nova pagina e dar refresh na pagina
    

    var form = document.querySelector("#form-adiciona")

    // Extraindo informaçõe do novo paciente do form
    var paciente = obtemPacienteDoFormulario(form);
   

    // Cria nova sessão na tabela de pacientes (tr e td)
    var pacienteTr = montaTr(paciente);

   
   // adicionando paciente na tabela
   var tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr);

   form.reset();

});

function obtemPacienteDoFormulario (form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // appendChild atribui a função de elemento filho a uma tag pai (no caso, a teg pai seria a Tr, que abre a tag da tabela. e Td seria a filha que corresponde as linhas da tabela.)
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));  
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr

}

function montaTd (dado, classe ) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}