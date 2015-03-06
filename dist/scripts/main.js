

function choose() {
  var choice = document.getElementsByName("choice");

  for (i = 0; i < choice.length; i++) {
    currentchoice = choice[i];

      if (currentchoice.checked) {
        var selection = currentChoice.value;

      }

    }

  }



boxcontainer = $('.contentbox');

etsy_items.results.forEach( function (item) {

maincontent = '<div class="item">';
maincontent += '<img src="' + item.Images[0].url_170x135 + '"/>'; 
maincontent += '<h4>' + item.title + '</h4>';
maincontent += '<div class= info>';
maincontent += '<p class="contentshop">' + item.Shop.shop_name + '</p>';
maincontent += '<p class="money">$' + item.price + item.currency_code + '</p>';
maincontent += '</div></div>';


  




boxcontainer.append(maincontent);

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





  









