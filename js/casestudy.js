$(document).ready(function () {
    $(".button").hover(
      function () {
        $(this).css({
          background: '#FAF8F4',
          color: '#FAF8F4',
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': '#2B2B2B'
        });
      }, function () {
        $(this).css({
          background: '#FAF8F4',
          color: '#2B2B2B'
        });
      }
    );
  
    $(".button").click(
      function () {
        $(this).css({
          background: '#7C7C79',
          color: '#FAF8F4'
        });
      }
    );
  });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
