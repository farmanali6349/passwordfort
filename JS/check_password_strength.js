// LOGO
const logo = document.getElementsByClassName('logo')[0];
logo.addEventListener('click', ()=>{
    window.location.href = '/index.html';
})

// MENU
const menu1 = document.querySelector('nav ul');

let menuOpen1 = async () => {
    menu1.style.right = '0px';
}

let closeMenu1 = async () => {
    menu1.style.right = '-275px';
}

// INPUT
const passwordInput = document.getElementById('password-input');
const resultContainer = document.getElementsByClassName('result')[0];


// CREATE RESULT
let createResult = async () => {
    let value = passwordInput.value;

    if (value.length >= 1 && value.length != '') {
        let response = zxcvbn(value);
        let time = response.crack_times_display.offline_slow_hashing_1e4_per_second;
        let score = response.score;

        let strength;

        if (score == 0) {
            strength = 'Very Week';
        } else if (score == 1) {
            strength = 'Week';
        } else if (score == 2) {
            strength = 'Week';
        } else if (score == 3) {
            strength = 'Strong';
        } else if (score == 4) {
            strength = 'Very Strong';
        }

        resultContainer.innerHTML = `<h3 class="main-heading">This will take <span id="time">${time} </span> to <span>CRACK</span> your password.</h3>
        <div class="row">
            <div class="score">
                <h4>SCORE</h4>
                <h3>0${score}<span>/04</span></h3>
            </div>
            <div class="strength">
                <h4>Strength</h4>
                <h3>${strength}</h3>
            </div>
        </div>
    </div>`

    } else {
        resultContainer.innerHTML = `<h3 class="main-heading">Your input is <span id="time">EMPTY </span></h3>`
    }
}


// CREATING RESULT
// ON LOAD
window.onload = ()=> {
    createResult();
}
// ON INPUT
passwordInput.oninput = ()=> {
    createResult();
}