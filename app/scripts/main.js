
etsy_items.results.forEach( function (item)	{

$('.contentpage').append('<img src="' + item.Images[0].url_170x135 + ' "/>');
$('.contenttitle').append('<p class="contenttitle">' + item.title + '</p>');
$('.contentprice').append('<p class="contentprice">' + item.price + '</p>');
$('contentcurr').append('<p class="contentcurr">' + item.currency_code + '</p>');





console.log(item.Images);

});










         









//*view array of things neeeded*//

//*loop through those items to find what your want and move to html*//




/* read array...results 
					title
					price
					Images
					currency type
					
append will send results to <div mainpage>
*/





	









