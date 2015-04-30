var itemUrl;
var itemPic;
var itemTitle;
var itemPrice;
var shopName;
var currencyCode;
var itemContent;

etsy_items.results.forEach( function (item)	{

	currencyCode = item.currency_code;
	itemContent = '<div class=itemBox'>;

	$('.mainContent').append(itemContent + '<a href="' + item.url + '" ><img.src="' + item.Images(0).url_170x135 + '"></a> <a href="' + item.url + '"<span class="titleSpace">' + item.title + '</span></a><a href="' + item.Shop.url + '"><span class="shopName">' + item.Shop.shop_name + '</span></a><span class="curCode">' + currencyCode + '</span><span class="priceColor">' '$' + item.price + '</span>' );
	$('.itemBox').append('<div class="hoverPics"><img src = "../images/heart.png"></div>');
	$('.itemBox').append('<div class="hoverPics2"><img src = "../images/hamburger.png"></div>');


});