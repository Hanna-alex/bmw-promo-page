const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    //заперт прокрутку браузера по умолчанию (event)
    event.preventDefault()

    const id = link.getAttribute('href').substring(1)
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})