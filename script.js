const changeTheme = document.getElementById('selectTheme');
const themeName = 'theme';
let actualTheme = localStorage.getItem(themeName);

let colors = {
    navColor: '#eef1f5',
    darkNavColor: '#3B3F43',
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
    const nav = document.getElementById('nav')
    nav.style.backgroundColor = colors.darkNavColor;
    nav.classList.add('navbar-dark')
    const [sun, darkSun] = [document.getElementById('sun'), document.getElementById('light-sun')]
    sun.style.display = 'none'; darkSun.style.display = 'block'
    const [moon, darkMoon] = [document.getElementById('moon'), document.getElementById('light-moon')]
    moon.style.display = 'none'; darkMoon.style.display = 'block'
    const main = document.getElementById('main')
    main.classList.add('bg-dark', 'text-light')
    changeCtaDark();
    for (let img of document.getElementsByClassName('info-img')){
        img.style.backgroundColor = '#C8C8C8'
    }
    const info = document.getElementById('info')
    info.style.backgroundColor = colors.darkNavColor;
    info.classList.add('text-light')
    for (let plan of document.getElementsByClassName('plan')){
        plan.style.backgroundColor = colors.darkNavColor;
    }
    const contact = document.getElementById('contact')
    contact.classList.add('bg-dark', 'text-light')
    for (let element of document.getElementsByClassName('form-control')){
        element.style.backgroundColor = colors.darkNavColor
        element.style.color = '#fff'
        element.style.border = 'none'
    }
    const submit = document.getElementById('submit')
    submit.style.color = '#fff'

    const footer = document.getElementById('footer')
    footer.style.backgroundColor = colors.darkNavColor
}

function setLight(){
    colors.navColor = '#eef1f5'
    const nav = document.getElementById('nav')
    nav.style.backgroundColor = colors.navColor;
    nav.classList.remove('navbar-dark')
    const [sun, darkSun] = [document.getElementById('sun'), document.getElementById('light-sun')]
    sun.style.display = 'block'; darkSun.style.display = 'none'
    const [moon, darkMoon] = [document.getElementById('moon'), document.getElementById('light-moon')]
    moon.style.display = 'block'; darkMoon.style.display = 'none'
    const main = document.getElementById('main')
    main.classList.remove('bg-dark', 'text-light')
    changeCtaLight()
    for (let img of document.getElementsByClassName('info-img')){
        img.style.backgroundColor = 'transparent'
    }
    const info = document.getElementById('info')
    info.style.backgroundColor = colors.color2;
    info.classList.remove('text-light')
    for (let plan of document.getElementsByClassName('plan')){
        plan.style.backgroundColor = '#ffffff';
    }
    const contact = document.getElementById('contact')
    contact.classList.remove('bg-dark', 'text-light')
    for (let element of document.getElementsByClassName('form-control')){
        element.style.backgroundColor = '#fff'
        element.style.color = '#000'
        element.style.border = '1px solid #CED4DA'
    }
    const submit = document.getElementById('submit')
    submit.style.color = '#000'

    const footer = document.getElementById('footer')
    footer.style.backgroundColor = colors.navColor
}

function changeCtaDark(){
    let cta = document.getElementById('light-cta')
    cta.style.display = 'none'
    let darkCta = document.getElementById('dark-cta')
    darkCta.style.display = ''
}

function changeCtaLight(){
    let cta = document.getElementById('light-cta')
    cta.style.display = ''
    let darkCta = document.getElementById('dark-cta')
    darkCta.style.display = 'none'
}