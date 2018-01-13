let collectionName = document.getElementById('collectionName').innerHTML.toLowerCase(),
  items,
  photoContainer = document.createElement('li'),
  galleryContainer = document.getElementById('gallery__photos'),
  photo = document.createElement('img'),
  text = document.createElement('p'),
  addPhotosToGallery = () => {
    items.map(function(item) {
      let photoContainer = document.createElement('li'),
        galleryContainer = document.getElementById('gallery__photos'),
        photo = document.createElement('img'),
        text = document.createElement('p')
      photo.src = item.source
        /*    photoContainer.className = "";*/
      text.innerHTML = item.name
      galleryContainer.appendChild(photoContainer)
      photoContainer.appendChild(photo)
      photoContainer.appendChild(text)
      photoContainer.setAttribute('onclick', 'addModalWithPhoto()')


      /*
      document.querySelector('style').textContent +=
          "@media screen and (min-width:400px) { div { color: red; }}"
          
          */


    })

  },
  modal = document.getElementById('myModal'),
  span = document.getElementsByClassName("close")[0],
  openModal = () => {
    modal.style.display = "block"
  },
  addPhotoToModal = () => {
    photo.src = item.source
    modal.appendChild(photo)
  },
  makeGallery = () => {
    switch (collectionName) {
      case 'amber':
        items = dresses.amber
        break;
      case 'gold':
        items = dresses.gold
        break;
      default:
        return false
    }
    addPhotosToGallery()


    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  },
  addModalWithPhoto = () => {
    openModal()
    addPhotosToGallery()
  }


makeGallery()