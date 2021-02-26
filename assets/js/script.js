---
---

  const imageLeft = new Array ();
  {% for photo in site.photo %}
    {% for item in photo.images %}
    imageLeft.push("{{ item }}")
    {% endfor %}
  {% endfor %}
  const size = imageLeft.length
  const x = Math.floor(size*Math.random())
  
  const imageRight = new Array ();
  {% for cinema in site.cinema %}
    imageRight.push("{{ cinema.main_image }}")
  {% endfor %}
  const sizeY = imageRight.length
  const y = Math.floor(sizeY*Math.random())
  

  $(document).ready(function(){
    $('#leftImages').attr('src',imageLeft[x]);
    $('#rightImages').attr('src',imageRight[y]);
  });


