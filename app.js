const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navBarLinks = document.getElementsByClassName('navBarLinks')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})
