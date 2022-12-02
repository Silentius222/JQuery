$(document).ready(function(){

    $('#count-sum').click(function(){

        $('.salary').each(function(){
            let suma = 0;

            $('.salary').each(function(){
            suma += +$(this).text() || 0;
        });

        $('#sum').text(suma);

        });
    });    
});