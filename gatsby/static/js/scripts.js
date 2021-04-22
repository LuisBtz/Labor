
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