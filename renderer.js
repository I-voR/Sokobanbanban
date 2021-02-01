window.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn')
    const minimizeButton = document.getElementById('minimize-btn')
    const maxUnmaxButton = document.getElementById('max-unmax-btn')
    const closeButton = document.getElementById('close-btn')

    menuButton.addEventListener('click', () => {
        // Opens menu at (x,y) coordinates of mouse click on the hamburger icon.
        // window.openMenu(e.x, e.y)
        window.openMenu(0, 30)
    })

    // minimizeButton.addEventListener('click', () => {
    //     window.minimizeWindow()
    // })

    minimizeButton.onclick = () => {
        window.minimizeWindow()
        let test = document.createElement('DIV')
        test.innerHTML = 'lolz'
        document.body.appendChild(test)
    }

    maxUnmaxButton.addEventListener('click', () => {
        const icon = maxUnmaxButton.querySelector('i.far')
    
        window.maxUnmaxWindow()
    
        // Change the middle maximize-unmaximize icons.
        if (window.isWindowMaximized()) {
            icon.classList.remove('fa-square')
            icon.classList.add('fa-clone')
        } else {
            icon.classList.add('fa-square')
            icon.classList.remove('fa-clone')
        }
    })

    closeButton.addEventListener('click', () => {
        window.closeWindow()
    })
})