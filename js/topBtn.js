window.addEventListener('scroll', function() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    shrinkOn = 300
    if (distanceY > shrinkOn) {
      console.log(distanceY)
      document.getElementById('top-btn').style.display = "block"
    } else {
      document.getElementById('top-btn').style.display = "none"
    }
  }
)

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
