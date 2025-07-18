document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById('tabuada').addEventListener('submit', function(evento) { 
        evento.preventDefault();
        let numeroBase = document.getElementById('numeroBase').value;
        let numeroMax = document.getElementById('numeroMax').value;
        numeroBase = parseInt(numeroBase);
        numeroMax = parseInt(numeroMax);

        for(let i = 1; i<=numeroMax; i++) { 
            const resultado = i * numeroBase;
            const span = document.createElement('span');
            const node = document.createTextNode(`${numeroBase} x ${i} = ${resultado}`);
            span.appendChild(node);

            document.querySelector('.multiplicacoes').appendChild(span);
        }

        document.querySelector('.resultado').style.display = 'block';
    })
})