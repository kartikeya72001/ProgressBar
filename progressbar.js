function move() {
    var elem = document.getElementById("myBar"); 
    var elem2 = document.getElementById("percentage");  
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem2.innerHTML = width * 1  + '%';
      }
      if (width == 13){
        var ele = document.getElementById(13);
        ele.style.backgroundColor = "greenyellow";
        console.log(ele)
      }
      else if(width == 32){
        var ele = document.getElementById(32);
        ele.style.backgroundColor = "greenyellow";
        console.log(ele)
      }
      else if(width == 52){
        var ele = document.getElementById(52);
        ele.style.backgroundColor = "greenyellow";
        console.log(ele)
      }
      else if(width == 71){
        var ele = document.getElementById(71);
        ele.style.backgroundColor = "greenyellow";
        console.log(ele)
      }
    }
  }
  function reset(){
      document.getElementById("myBar").style.width = "10%";
      document.getElementById(13).style.backgroundColor = "#bbb";
      document.getElementById(32).style.backgroundColor = "#bbb";
      document.getElementById(52).style.backgroundColor = "#bbb";
      document.getElementById(71).style.backgroundColor = "#bbb";
  }
  function first(){
    document.getElementById("myBar").style.width = "14%";
    document.getElementById(13).style.backgroundColor = "greenyellow";
    document.getElementById(32).style.backgroundColor = "#bbb";
    document.getElementById(52).style.backgroundColor = "#bbb";
    document.getElementById(71).style.backgroundColor = "#bbb";
  }
  function second(){
    document.getElementById("myBar").style.width = "32%";
    document.getElementById(13).style.backgroundColor = "greenyellow";
    document.getElementById(32).style.backgroundColor = "greenyellow";
    document.getElementById(52).style.backgroundColor = "#bbb";
    document.getElementById(71).style.backgroundColor = "#bbb";
  }
  function third(){
    document.getElementById("myBar").style.width = "52%";
    document.getElementById(13).style.backgroundColor = "greenyellow";
    document.getElementById(32).style.backgroundColor = "greenyellow";
    document.getElementById(52).style.backgroundColor = "greenyellow";
    document.getElementById(71).style.backgroundColor = "#bbb";
  }
  function fourth(){
    document.getElementById("myBar").style.width = "71%";
    document.getElementById(13).style.backgroundColor = "greenyellow";
    document.getElementById(32).style.backgroundColor = "greenyellow";
    document.getElementById(52).style.backgroundColor = "greenyellow";
    document.getElementById(71).style.backgroundColor = "greenyellow";
  }