document.getElementById("cadastro-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("https://unblusas-api-production.up.railway.app/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha })
    });

    const result = await response.json();
    document.getElementById("mensagem").innerText = result.message;
});