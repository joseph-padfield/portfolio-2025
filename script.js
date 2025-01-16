const aboutModal = document.getElementById('about-modal')
const openAboutModal = document.getElementById('open-about-modal')
const closeAboutModal = document.getElementById('close-about-modal')

openAboutModal.addEventListener('click', e => {
    e.preventDefault()
    aboutModal.style.display = 'flex'
})

closeAboutModal.addEventListener('click', e => {
    e.preventDefault()
    aboutModal.style.display = 'none'
})

const projects = document.getElementById('projects')
const projectsButton = document.getElementById('projects-button')

projectsButton.addEventListener('click', e => {
    e.preventDefault()
    projects.scrollIntoView({ behavior: 'smooth' })
})