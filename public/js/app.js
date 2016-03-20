// First Object
var firstObj = _.first(products);

_.each(firstObj, function(value, key, list) {
  if (key === 'name') {
    $('#featured').html('<div id="book1"><h1>' + list[key] + '</h1></div>');
  } else if (key === 'category') {
    $('#book1').addClass(list[key]);
  } else if (key === 'selling_points') {
    $('#book1').append('<ul></ul>');
    var sellPoints = firstObj['selling_points'];
    _.each(sellPoints, function(element, index, list) {
        $('#book1 > ul').append('<li class="selling-points">' + list[index] + '</li>');
    });
  } else if (key === 'price') {
    var price = firstObj['price'];
    $('#book1').append('<h3 class="price">Price: $' + price + '</h3>');
  } else if (key === 'picture_url') {
    var pic = firstObj['picture_url'];
    $('#book1').append('<img class="image">');
    $('#book1 > img').attr('src', '' + pic + '');
  }
});

