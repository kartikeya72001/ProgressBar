function move() {
    var elem = document.getElementById("myBar"); 
    var elem2 = document.getElementById("percentage");  
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem2.innerHTML = width * 1  + '%';
      }
    }
  }