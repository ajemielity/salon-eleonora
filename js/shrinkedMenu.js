window.addEventListener('scroll', function() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop
    shrinkOn = 125
    if (distanceY > shrinkOn) {
      console.log(distanceY)
      document.getElementById('headerContainer').classList.add("smaller")
    } else {
      document.getElementById('headerContainer').classList.remove("smaller")
    }
  }
)
