$('document').ready(function() {

    $('.lista-produto button').click(function() {
        const destino = $('#carrinho');

        const nomeTenis = $(this).parent().find('h3').text();

        $('#tenis-interesse').val(nomeTenis);


        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})