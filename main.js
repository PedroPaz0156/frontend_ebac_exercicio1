$(document).ready(function(){

$('form button').on('click', function(e) { 
    e.preventDefault();

    const tarefaTexto = $('#tarefa-nova-texto').val();
    
    $(`
        <li> 
        Tarefa: ${tarefaTexto}
        </li>
    `).appendTo('#lista-de-tarefas');
    $('#tarefa-nova-texto').val('');
})

    $(document).on('click', 'li', function() { 
        $(this).toggleClass('concluida');
    })
})