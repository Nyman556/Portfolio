
const langSelect = document.querySelector('.lang-select')
const dropdown = document.querySelector('#dropdown')
const btn = document.querySelector('.nav-btn')
const profile = document.querySelector('.profile')
let dropdownActive = false;


langSelect.addEventListener('click', dropDownMenu)


function dropDownMenu(){
    if (dropdownActive == false){
    langSelect.style.border = 'none';
    dropdown.style.display = 'flex';
    return dropdownActive = true;
    }
    else {
        langSelect.style.border = '2px solid white';
        dropdown.style.display = 'none';
        return dropdownActive = false;
    }
}