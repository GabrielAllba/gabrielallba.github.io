let togglebtn = document.getElementsByClassName('fa-bars')[0]
let header = document.querySelector('header')
let toggleDesc = document.getElementsByClassName('toggle-desc')
let closebtn = document.getElementsByClassName('fa-times')[0]

let nav = document.querySelector('nav')
togglebtn.addEventListener('click', function(){
    header.style.width = '10rem'
    header.style.transition = '0.5s'
    for(let i = 0; i < toggleDesc.length; i++){
        toggleDesc[i].style.display = 'flex'
        toggleDesc[i].style.transition = '.5s'
    }
    togglebtn.style.display = 'none'
    closebtn.style.display = 'flex'
    nav.style.width = '100%'
    nav.style.transition = '.4s'
})

closebtn.addEventListener('click', function(){
    header.style.width = ''
    header.style.transition = '0.5s'
    togglebtn.style.display = 'flex'
    closebtn.style.display = 'none'
    if(screen.width < 480){
        nav.style.width = '0%'
        nav.style.transition = '0.4s'
    }
})