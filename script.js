$(document).ready(function() {
    return desk();
})

$('#down').click(function(){
    $(".inputSize").attr('value', parseInt($(".inputSize").val()) - 1);
    return desk();
});

$('#rise').click(function(){
    $(".inputSize").attr('value', parseInt($(".inputSize").val()) + 1);
    return desk();
});

$('#colorBtn').click(function(){
    return desk();
});



function desk() {

	$("table").remove()

	$('<table></table>').appendTo('body');

	size = $('.inputSize').val();
	
	for(let i = 0; i < size; i++){
		$('<tr></tr>').appendTo('table');
	}
		
	for(let j = 0; j < $('tr').length; j++){
		$('<td></td>').appendTo('tr');
	}
	
	$('table').find('tr').each(function(i){
		$(this).children('td').each(function(j){
			if ((i%3 == 0 && j%3 == 0) || (i%3 == 1 && j%3 == 1) || (i%3 == 2 && j%3 == 2)) {
				$(this).addClass('color1');
			} else if (((i+1)%3 == 0 && j%3 == 0) || ((i+1)%3 == 1 && j%3 == 1) || ((i+1)%3 == 2 && j%3 == 2)) {
				$(this).addClass('color2');
			} else {
				$(this).addClass('color3');
			}
		})
	})
	
	$('table').css({
		'border-collapse': 'collapse',
	});
	
	$('td').css({
		'border': '1px solid black',
		'width': '50px',
		'height': '50px'
	});
	
	$('.color1').css({
		'background-color': "#"+$('.colorHEX1').val()
	});

	$('.color2').css({
		'background-color': "#"+$('.colorHEX2').val()
	});

	$('.color3').css({
		'background-color': "#"+$('.colorHEX3').val()
	});
	
}

