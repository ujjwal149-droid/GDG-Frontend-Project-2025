let navToggleButton = document.querySelector('.links-toggle')
let navBar = document.querySelector('.nav-links')
let isNavOpen = true

navToggleButton.addEventListener('click', () => {
    if(isNavOpen == false) {
        navBar.classList.remove('hidden')
        navBar.classList.add('visible')
        isNavOpen = true
        navToggleButton.style.backgroundImage = "url('./Images/icons/cross.png')"
    }
    else {
        navBar.classList.add('hidden')
        navBar.classList.remove('visible')
        isNavOpen = false
        navToggleButton.style.backgroundImage = "url('./Images/icons/hamburger.png')"
    }
})