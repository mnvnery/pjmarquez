window.onload = function () {
    var images = document.getElementsByTagName('img');
  
    for( var i=0; i<images.length;i++){
      if (images[i].naturalWidth > images[i].naturalHeight) {
        $(images[i]).addClass('landscape');
      } 
      else{ 
        if(images[i].naturalWidth < images[i].naturalHeight) {
          $(images[i]).addClass('portrait');  
        }
      }
    }
  }