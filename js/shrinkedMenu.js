window.addEventListener('scroll', function() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop
  shrinkOn = 125
  if (distanceY > shrinkOn) {
    document.getElementById('headerContainer').classList.add("smaller")
    document.getElementById('headerContainer').classList.add("smaller-main")
  } else {
    document.getElementById('headerContainer').classList.remove("smaller")
    document.getElementById('headerContainer').classList.remove("smaller-main")
  }
})