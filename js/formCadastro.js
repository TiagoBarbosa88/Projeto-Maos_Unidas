// --------------- FUNÇÕES GERAIS ---------------//
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });
    // Esconder popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

// Função para estilizar inputs corretos
function estilizarInputCorreto(input, helper) {
    helper.innerText = ""; // Limpa a mensagem de erro
    helper.classList.remove("visible"); // Esconde a mensagem de erro
    input.classList.remove("error"); // Remove a estilização de erro do campo
    input.classList.add("correct"); // Adiciona estilização de correto ao campo
}

// Função para estilizar inputs incorretos
function estilizarInputIncorreto(input, helper, mensagem) {
    helper.innerText = mensagem; // Define a mensagem de erro
    helper.classList.add("visible"); // Torna a mensagem de erro visível
    input.classList.add("error"); // Adiciona estilização de erro ao campo
    input.classList.remove("correct"); // Remove estilização de correto, se houver
}

// --------------- VALIDAÇÃO DO NOME ---------------//
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel);

// Adicionando validação ao evento blur do campo de nome
nomeInput.addEventListener("blur", () => {
    if (nomeInput.value.trim() === "") {
        nomeHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        nomeHelper.classList.add("visible"); // Torna a mensagem de erro visível
        nomeInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        nomeHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        nomeHelper.classList.remove("visible"); // Esconde a mensagem de erro
        nomeInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// --------------- VALIDAÇÃO TIPO DE ORGANIZAÇÃO ---------------//
let tipoInput = document.getElementById("tipo-ong");
let tipoLabel = document.querySelector('label[for="tipo-ong"]');
let tipoHelper = document.getElementById("tipo-ong-helper");

togglePopup(tipoInput, tipoLabel);

// Adicionando validação ao evento blur do campo de tipo
tipoInput.addEventListener("blur", () => {
    if (tipoInput.value.trim() === "") {
        tipoHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        tipoHelper.classList.add("visible"); // Torna a mensagem de erro visível
        tipoInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        tipoHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        tipoHelper.classList.remove("visible"); // Esconde a mensagem de erro
        tipoInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// --------------- VALIDAÇÃO CAMPO CNPJ ---------------//
let cnpjInput = document.getElementById("cnpj");
let cnpjLabel = document.querySelector('label[for="cnpj"]');
let cnpjHelper = document.getElementById("cnpj-helper");

togglePopup(cnpjInput, cnpjLabel);

// Função para permitir apenas entrada numérica
cnpjInput.addEventListener("input", function (e) {
    // Remove caracteres não numéricos
    let valor = e.target.value.replace(/\D/g, '');
    e.target.value = valor;
});

// Adicionando validação ao evento blur do campo de cnpj
cnpjInput.addEventListener("blur", () => {
    if (cnpjInput.value.trim() === "") {
        cnpjHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        cnpjHelper.classList.add("visible"); // Torna a mensagem de erro visível
        cnpjInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        cnpjHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        cnpjHelper.classList.remove("visible"); // Esconde a mensagem de erro
        cnpjInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// --------------- VALIDAÇÃO CAMPO TELEFONE ---------------//
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

togglePopup(telefoneInput, telefoneLabel);

// Adicionando validação ao evento blur do campo de telefone
telefoneInput.addEventListener("blur", () => {
    if (telefoneInput.value.trim() === "") {
        telefoneHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        telefoneHelper.classList.add("visible"); // Torna a mensagem de erro visível
        telefoneInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        telefoneHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        telefoneHelper.classList.remove("visible"); // Esconde a mensagem de erro
        telefoneInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// --------------- VALIDAÇÃO CAMPO LOCALIDADE ---------------//
let localInput = document.getElementById("localidade");
let localLabel = document.querySelector('label[for="localidade"]');
let localHelper = document.getElementById("localidade-helper");

togglePopup(localInput, localLabel);

// Adicionando validação ao evento blur do campo de local
localInput.addEventListener("blur", () => {
    if (localInput.value.trim() === "") {
        localHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        localHelper.classList.add("visible"); // Torna a mensagem de erro visível
        localInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        localHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        localHelper.classList.remove("visible"); // Esconde a mensagem de erro
        localInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// --------------- VALIDAÇÃO CAMPO EMAIL---------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

// Adicionando validação ao evento blur do campo de email
emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
        emailHelper.textContent = "Este campo é obrigatório."; // Mensagem de erro
        emailHelper.classList.add("visible"); // Torna a mensagem de erro visível
        emailInput.classList.add("error"); // Adiciona estilização de erro ao campo
    } else {
        emailHelper.textContent = ""; // Limpa a mensagem de erro se o campo for válido
        emailHelper.classList.remove("visible"); // Esconde a mensagem de erro
        emailInput.classList.remove("error"); // Remove a estilização de erro do campo
    }
});

// ---------- VALIDAÇÃO DE SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaHelper = document.getElementById("senha-helper");

senhaInput.addEventListener("blur", () => {
    let valor = senhaInput.value.trim();

    if (valor === "") {
        estilizarInputIncorreto(senhaInput, senhaHelper, "O campo senha não pode estar vazio");
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper);
    }
});

// ---------- VALIDAÇÃO DE CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

confirmaSenhaInput.addEventListener("blur", () => {
    let valorConfirmaSenha = confirmaSenhaInput.value.trim();

    if (valorConfirmaSenha !== senhaInput.value.trim()) {
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper, "As senhas precisam ser iguais");
    } else if (valorConfirmaSenha === "") {
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper, "O campo de confirmação de senha não pode estar vazio");
    } else {
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    }
});

// ---------- NAVEGAÇÃO DO FORMULÁRIO COM ENTER ---------- //
document.querySelectorAll('.formCadastro input').forEach(input => {
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Impede o comportamento padrão do Enter
            const inputs = Array.from(document.querySelectorAll('.formCadastro input'));
            const index = inputs.indexOf(this);
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move para o próximo campo
            } else {
                inputs[0].focus(); // Volta para o primeiro campo se estiver no último
            }
        }
    });
});

// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {         // Criando objetos
    nome: false,
    tipoOng: false,
    cnpj: false,
    telefone: false,
    localidade: false,
    email: false,
    senha: false,
    confirmaSenha: false
};

btnSubmit.addEventListener("submit", (e) => {
    if (inputsCorretos.nome == false ||
        inputsCorretos.tipoOng == false ||
        inputsCorretos.cnpj == false ||
        inputsCorretos.telefone == false ||
        inputsCorretos.localidade == false ||
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
    } else {
        alert("Formulário enviado com Sucesso!");
    }
});
