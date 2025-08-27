document.addEventListener("DOMContentLoaded", function() { 
    const foto = document.querySelector("#avatar")
    const nomePerfil = document.querySelector("#name");
    const nomeUsuario = document.querySelector("#username");
    const repositorios = document.querySelector("#repositories");
    const seguidores = document.querySelector("#followers");
    const seguindo = document.querySelector("#following");
    const linkGit = document.querySelector("#profile-link");

    fetch('https://api.github.com/users/PedroPaz0156').then(function(resposta) { 
        return resposta.json();
    }).then(function(json) { 
        foto.src = json.avatar_url;
        nomePerfil.innerHTML = json.name;
        nomeUsuario.innerHTML = json.login;
        repositorios.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        linkGit.href = json.html_url;
    })
})