window.addEventListener('scroll', function() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300
  console.og(distanceY)
  console.log(shrinkOn)
  if (distanceY > shrinkOn) {
    document.getElementById('top-btn').style.display = "block"
  } else {
    document.getElementById('top-btn').style.display = "none"
  }
})

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}