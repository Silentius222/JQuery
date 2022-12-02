$(document).ready(function(){
    $('#gora').click(function(){
        $('p:last').insertBefore('p:first');
        $('#dol').insertAfter('#gora');
        $('#dol').css({display: 'inline'});
    });
$('body').append('<button id="dol">Dół');
    $('#dol').css({display: 'none'});

$('#dol').click(function() {
    $('p:first').insertAfter('p:last');
    });
});