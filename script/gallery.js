function trans(){
    document.body.style.opacity='0';
    setTimeout( function(){
      window.location.href='team.html';
    },1000);
  }
  
  function trans0(){
    document.body.style.opacity='0';
    setTimeout( function(){
      window.location.href='Gallery.html';
    },1000);
  }
  
  function trans1(){
    document.body.style.opacity='0';
    setTimeout( function(){
      window.location.href='AboutUs.html';
    },1000);
  }
  
  function trans2(){
    document.body.style.opacity='0';
    setTimeout( function(){
      window.location.href='loadingout.html';
    },1000);
}
    function trans3(){
        document.body.style.opacity='0';
        setTimeout( function(){
          window.location.href='home.html';
        },1000);
  }

function enlargeImage(img) {
    // Get the source of the clicked image
    var imgSrc = img.src;

    // Set the source of the enlarged image
    document.getElementById("enlarged-image").src = imgSrc;

    // Show the enlarged container
    document.getElementById("enlarged-container").style.display = "flex";
}

function closeEnlarged() {
    // Hide the enlarged container when clicked
    document.getElementById("enlarged-container").style.display = "none";
}


