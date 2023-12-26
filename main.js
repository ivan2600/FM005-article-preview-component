const shareButton = document.querySelector('.share-button');
const shareSection = document.querySelector('.share-section');
const avatarSection = document.querySelector('.avatar-section');

shareButton.addEventListener('click', ()=> {
  if (shareSection.classList.contains('activo')) {
    // Borrar la clase activo
    shareSection.classList.remove('activo')
  } else {
    // Si no la contiene, agregarla.
    shareSection.classList.add('activo')
  }
  if (avatarSection.classList.contains('activo')) {
    // Borrar la clase activo
    avatarSection.classList.remove('activo')
  } else {
    // Si no la contiene, agregarla.
    avatarSection.classList.add('activo')
  }
})