let navToggleButton = document.querySelector('.links-toggle')
let sideBar = document.querySelector('.side-bar')
let isNavOpen = false

navToggleButton.addEventListener('click', () => {
    if(isNavOpen == false) {
        sideBar.classList.remove('hidden')
        sideBar.classList.add('visible')
        isNavOpen = true
        navToggleButton.style.backgroundImage = "url('./Images/icons/home-icon.png')"
    }
    else {
        sideBar.classList.add('hidden')
        sideBar.classList.remove('visible')
        isNavOpen = false
        navToggleButton.style.backgroundImage = "url('./Images/icons/hamburger.png')"
    }
})