
  document.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      document.querySelector('.logoHome').style = "width: 100px; top: 30px;";

    } else {
      document.querySelector('.logoHome').style = "width: 98vw; top: 6rem;";
    }
  });