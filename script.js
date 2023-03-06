function toggleMode() {
  const body = document.querySelector('body')
  body.classList.toggle('light')

  const avatar = document.querySelector('#profile img')

  if (body.classList.contains('light')) {
    avatar.setAttribute('src', './assets/avatar-light.png')
  } else {
    avatar.setAttribute('src', './assets/avatar-dark.png')
  }
}