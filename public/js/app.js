// First
var firstObj = _.first(products);

_.each(firstObj, function(value, key, list) {
  if (key === 'name') {
    $('#featured').html('<div id="first-item"><h1>' + list[key] + '</h1></div>');
  } else if (key === 'category') {
    $('#first-item').addClass(list[key]);
  } else if (key === 'selling_points') {
    $('#first-item').append('<ul></ul>');
    var sellPoints = firstObj['selling_points'];
    _.each(sellPoints, function(element, index, list) {
        $('#first-item > ul').append('<li class="selling-points">' + list[index] + '</li>');
    });
  } else if (key === 'price') {
    var price = firstObj['price'];
    $('#first-item').append('<h3 class="price">Price: $' + price + '</h3>');
  } else if (key === 'picture_url') {
    var pic = firstObj['picture_url'];
    $('#first-item').append('<img class="image">');
    $('#first-item > img').attr('src', '' + pic + '');
  }
});

// Last
var lastObj = _.last(products);

_.each(lastObj, function(value, key, list) {
  if (key === 'name') {
    $('#clearance').html('<div id="last-item"><h1>' + list[key] + '</h1></div>');
  } else if (key === 'category') {
    $('#last-item').addClass(list[key]);
  } else if (key === 'selling_points') {
    $('#last-item').append('<ul></ul>');
    var sellPoints = lastObj['selling_points'];
    _.each(sellPoints, function(element, index, list) {
        $('#last-item > ul').append('<li class="selling-points">' + list[index] + '</li>');
    });
  } else if (key === 'price') {
    var price = lastObj['price'];
    $('#last-item').append('<h3 class="price">Price: $' + price + '</h3>');
  } else if (key === 'picture_url') {
    var pic = lastObj['picture_url'];
    $('#last-item').append('<img class="image">');
    $('#last-item > img').attr('src', '' + pic + '');
  }
});
