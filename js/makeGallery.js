let collectionName = document.getElementById('collectionName').innerHTML.toLowerCase(),
  items,
  photoContainer = document.createElement('li'),
  galleryContainer = document.getElementById('gallery__photos'),
  photo = document.createElement('img'),
  text = document.createElement('p'),
  modalInner = document.getElementById('modal-inner'),
  modalOuter = document.getElementById('modal-outer'),
  modalPhotoContainer = document.getElementById('modal-photo-container'),
  modalText = document.getElementById('modal-text'),
  modalCloseBtn = document.createElement('span'),
  modalArrowLeft = document.getElementById('modal-arrow-left'),
  modalArrowRight = document.getElementById('modal-arrow-right'),
  modalPhoto = document.createElement('img')
modalPhoto.setAttribute('id', 'modal-photo')
modalPhoto.setAttribute('class', 'modal-photo')
addPhotosToGallery = () => {
    items.map(function(item) {
      let galleryCollection = document.getElementsByClassName('gallery'),
        gallery = galleryCollection[0],
        photoContainer = document.createElement('li'),
        galleryContainer = document.getElementById('gallery__photos'),
        photo = document.createElement('img'),
        text = document.createElement('p')
      photo.src = item.source
      text.innerHTML = item.name
      galleryContainer.appendChild(photoContainer)
      photoContainer.appendChild(photo)
      photoContainer.appendChild(text)

      photo.onclick = function() {
        modalOuter.style.display = "block"
        modalOuter.appendChild(modalCloseBtn)
        modalCloseBtn.setAttribute('class', 'close')
        modalCloseBtn.innerHTML = '&times'
        modalPhotoContainer.appendChild(modalPhoto)
        modalPhoto.src = photo.src
        modalText.innerHTML = text.innerHTML
          /*modalPhoto.style.textAlign = 'center'
          modalPhoto.style.margin = 'auto'*/
      }

      modalArrowRight.onclick = function() {
        let modalPhotoInList = items.filter(function(item) {
          return item.name === modalText.innerHTML
        })
        let nextPhotoForModal = items.filter(function(item) {
          return item.position === modalPhotoInList[0].position + 1
        })

        let newPhotoSrc = nextPhotoForModal[0].source,
          newPhotoText = nextPhotoForModal[0].name
        modalPhotoInList = []
        nextPhotoForModal = []
        modalText.innerHTML = newPhotoText
        modalPhoto.src = newPhotoSrc
      }

      modalArrowLeft.onclick = function() {
        let modalPhotoInList = items.filter(function(item) {
          return item.name === modalText.innerHTML
        })
        let nextPhotoForModal = items.filter(function(item) {
          return item.position === modalPhotoInList[0].position - 1
        })

        let newPhotoSrc = nextPhotoForModal[0].source,
          newPhotoText = nextPhotoForModal[0].name
        modalPhotoInList = []
        nextPhotoForModal = []
        modalText.innerHTML = newPhotoText
        modalPhoto.src = newPhotoSrc
      }

      modalCloseBtn.onclick = function() {
        modalOuter.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modalInner) {
          modalOuter.style.display = "none";
        }
      }


    })
  },
  makeGallery = () => {
    switch (collectionName) {
      case 'amber':
        items = dresses.amber
        console.log('make gallery is done')
        break;
      case 'gold':
        items = dresses.gold
        console.log('make gallery is done')
        break;
      default:
        return false
    }
    addPhotosToGallery()
  }


makeGallery()