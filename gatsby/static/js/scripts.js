
// document.addEventListener('scroll', function () {
//   if (window.pageYOffset > 0) {
//     document.querySelector('.logoHome').style = "width: 100px; top: 30px;";

//   } else {
//     document.querySelector('.logoHome').style = "width: 98vw; top: 6rem;";
//   }
// });

document.querySelector(".logo img").setAttribute('id', 'img');

// On Page Refresh
if (window.pageYOffset > 0) {
  document.getElementById('img').classList.add('shrink');
}

window.addEventListener('scroll', function () {

  if (window.pageYOffset > 0) {
    document.getElementById('img').classList.add('shrink');
  } else {
    document.getElementById('img').classList.remove('shrink');
  }

});

// Scroll indicator
window.addEventListener('mousemove', function (e) {
  var moveDiv = document.getElementById('scroll-ind');

  window.onmousemove = function (e) {
    var x = e.pageX,
      y = e.pageY;
    moveDiv.style.top = (y + 20) + 'px';
    moveDiv.style.left = (x + 20) + 'px';
  };

});