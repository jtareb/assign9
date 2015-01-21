var etsy_items




var etsy_items = ['images', 'title'];

console.log=(images);






//*view array of things neeeded*//

//*loop through those items to find what your want and move to html*//


etsy_items.results.forEach( function (item) {


$('title').append('<img src="' + item.Images[0].url_fullxfull +'">')



};


