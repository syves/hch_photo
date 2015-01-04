void function(){
  var container = document.getElementById('product-thumbs');
  var largeImg = document.getElementById('large-image');

  var index = 0;
  var imagePaths = Array.prototype.map.call(
    container.getElementsByTagName('img'),
    function(img) {
      return img.src;
    }

  );

  document.addEventListener('keyup', function(event){
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 37:
        index -= 1;
        largeImg.src = imagePaths[index];
        break;
      case 39:
        index += 1;
        largeImg.src = imagePaths[index];
        break;
    }
  }, false)

  container.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      largeImg.src = event.target.src
      largeImg.alt = event.target.alt
    }
  }, false)

}();


