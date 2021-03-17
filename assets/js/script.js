---
---

  const imageLeft = new Array ();
  {% for photo in site.photo %}
    {% for item in photo.images %}
    imageLeft.push("{{ item }}")
    {% endfor %}
  {% endfor %}

  function randomLeft() {
    const x = Math.floor(imageLeft.length * Math.random())
    return imageLeft[x]
  }

  const imageRight = new Array ();
  {% for cinema in site.cinema %}
    imageRight.push("{{ cinema.main_image }}")
  {% endfor %}
  

  function randomRight() {
    const y = Math.floor(imageRight.length * Math.random())
    return imageRight[y]
  }



