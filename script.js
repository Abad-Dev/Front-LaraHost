const changeTheme = document.getElementById('selectTheme');
const themeName = 'theme';
let actualTheme = localStorage.getItem(themeName);

let colors = {
    navColor: '#eef1f5',
    color2: '#D5EBFF'
}

if (!actualTheme){
    localStorage.setItem(themeName, 'light')
} else if (actualTheme === 'dark'){
    changeTheme.checked = true
    setDark()
}

changeTheme.addEventListener('change', (e) => {
    if (e.target.checked) { // acaba de activarlo
        localStorage.setItem(themeName, 'dark')
        setDark()
    } else {
        localStorage.setItem(themeName, 'light')
        setLight()
    }
} )

function setDark(){
    colors.navColor = '#3B3F43';
    const nav = document.getElementById('nav')
    nav.style.backgroundColor = colors.navColor;
    nav.classList.add('navbar-dark')
    const main = document.getElementById('main')
    main.classList.add('bg-dark', 'text-light')
    const info = document.getElementById('info')
    info.style.backgroundColor = colors.navColor;
    info.classList.add('text-light')
    const contact = document.getElementById('contact')
    contact.classList.add('bg-dark', 'text-light')
    for (let element of document.getElementsByClassName('form-control')){
        element.style.backgroundColor = colors.navColor
        element.style.color = '#fff'
        element.style.border = 'none'
    }

    const footer = document.getElementById('footer')
    footer.style.backgroundColor = colors.navColor
}

function setLight(){
    const nav = document.getElementById('nav')
    nav.style.backgroundColor = colors.navColor;
    nav.classList.remove('navbar-dark')
    const main = document.getElementById('main')
    main.classList.remove('bg-dark', 'text-light')
    const info = document.getElementById('info')
    info.style.backgroundColor = colors.color2;
    info.classList.remove('text-light')
    const contact = document.getElementById('contact')
    contact.classList.remove('bg-dark', 'text-light')
    for (let element of document.getElementsByClassName('form-control')){
        element.style.backgroundColor = '#fff'
        element.style.color = '#000'
        element.style.border = '1px solid #CED4DA'
    }

    const footer = document.getElementById('footer')
    footer.style.backgroundColor = colors.navColor
}
