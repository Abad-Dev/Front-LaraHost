const changeTheme = document.getElementById('selectTheme');
const themeName = 'theme';
let actualTheme = localStorage.getItem(themeName);

if (!actualTheme){
    localStorage.setItem(themeName, 'light')
} else {
    changeTheme
}

changeTheme.addEventListener('change', (e) => {
    if (e.target.checked) { // acaba de activarlo
        localStorage.setItem(themeName, 'dark')
    } else {
        localStorage.setItem(themeName, 'light')
    }
    console.log(localStorage)
} )
