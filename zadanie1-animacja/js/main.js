$('.kwadrat').css({
    width: '200px',
    height: '200px',
    background: 'red'});

    $('button').click(function() {
        $('div').animate({
            right: '100px',
            height: '100px', 
            width: '100px'}, 3000,
            function() {
                $('div').animate({backgroundColor: 'blue'}, 5000,
            function() {
                $("p").text("Animacja zakończona");
            });
        });
    });

    