// LOGO
const logo = document.getElementsByClassName('logo')[0];
logo.addEventListener('click', ()=>{
    window.location.href = '/index.html';
})


class Password {
    constructor() {
        this.capitals = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        this.smalls = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];

        this.specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];

        this.funnyPasswords = [
            "BananaSocks42",
            "PizzaIsLife!",
            "SillyMonkey23",
            "CupcakeNinja",
            "JellybeanGalaxy",
            "CheeseburgerParade",
            "GigglesaurusRex",
            "PenguinDanceParty",
            "SunnySideUp123",
            "TickleMonster8",
            "WhisperingPickle",
            "BubblegumUnicorn",
            "CrazyCatLady79",
            "ChocoliciousDream",
            "RainbowSprinkles!",
            "MarshmallowMischief",
            "SillySausage21",
            "BouncyCastle4eva",
            "WaffleWonderland",
            "SnickerdoodleFiesta",
            "LlamaLounge99",
            "FluffyCloudCarnival",
            "PineapplePizzazz",
            "TicklishTurtle42",
            "ButterflyBlissful",
            "CookieMonsterParty",
            "SnoozyKangaroo12",
            "GigglyGiraffe87",
            "CottonCandyCircus",
            "PuppyLoveForever",
            "SillyStringSerendipity",
            "JellyfishJamboree",
            "PogoStickPalooza",
            "WhackyWatermelon",
            "ZigzagZebra23",
            "SquishyMarshmallow",
            "HappyHippoHugs",
            "BubblyBananaSplit",
            "SausageRollDelight",
            "BubbleBathBonanza",
            "SillySeahorseParty",
            "KookyKangaroo99",
            "SprinkleSundaeDelight",
            "FunnyBunnyHop",
            "SmileySunflower42",
            "RainbowWhiskers",
            "GigglingGrapes",
            "ChattyCheerleader",
            "PicklePants!",
            "SneezingSloth23",
            "WigglyWombatWorld",
            "CrazyCucumberCircus",
            "JazzHandsJamboree",
            "ButterflyWhisperer",
            "BouncyBallParade",
            "WackyWatermelon123",
            "SillyStrawberrySurprise",
            "PogoStickPizzazz",
            "WhimsicalWalrus",
            "ZanyZigzagUnicorn",
            "MarshmallowMayhem99",
            "HuggableHedgehog87",
            "CottonCandyDreamland",
            "PuppyPartyParadise",
            "SillySerpentSlither",
            "JumpingJellybeans",
            "GigglyGardenGnome",
            "CrazyCarrotCircus",
            "SquishySquidSpectacle",
            "HappyHulaHoop",
            "BubblyBlueberryBlast",
            "SausageSandwichSupreme",
            "BubbleBlowoutBash",
            "SillyStarfishSoiree",
            "KookyKoalaCapers",
            "SprinkleSorbetDelight",
            "FunnyFrogFling",
            "SmileyStrawberryShortcake",
            "RainbowRaindrops",
            "GigglingGummyBears",
            "ChattyChipmunk",
            "PickleParadise!",
            "SneezingSnail23",
            "WatermelonJubilee",
            "BouncingBumblebee99",
            "SillyPancakeParty",
            "GigglyGorillaGroove",
            "TickleMeElmo42",
            "ChatterboxChimpanzee",
            "PeachyKeenDreams",
            "SprinklesAndSmiles",
            "DancingDolphin123",
            "MellowMarigold",
            "SillySquirrelSquad",
            "BumblebeeBoogie",
            "WhisperingWillow42",
            "JovialJuggler",
            "GleefulGardenGnome",
            "CheeryChickadee",
            "PuddingPopDelight",
            "SunnyDayAdventures",
            "WittyWatermelon",
            "SillyShenanigans123",
            "BananaSplitSundae",
            "RaindropRhapsody",
            "HappyHamsterHugs",
            "BubblegumBliss",
            "SillyStringSerenade",
            "JellybeanJamboree",
            "TickleMeTiger42",
            "WhiskerWonderland",
            "ScoobyDooSpectacle",
            "BubblyButterflyBash",
            "WigglyWaffleWorld",
            "SillySalamander123",
            "ChuckleChickenCapers",
            "PeachyParfaitDelight",
            "SprinkleSunshine",
            "DaringDolphinDance",
            "MerryMarigold",
            "SillySlothSafari",
            "BouncingBunnyBonanza",
            "WhimsicalWillow42",
            "JollyJester",
            "GigglyGardenia",
            "CheeryCheetah",
            "PopsiclePleasure",
            "SunnySmileAdventures",
            "WittyWaterfall",
            "SillySausageSaga",
            "BananaBoatBonanza",
            "RainbowRhapsody",
            "HappyHedgehogHugs",
            "BubblegumBlissful",
            "SillySerpentSoiree"
        ];



    }

    generatePassword(n) {

        // VARIABLES
        let length = n;
        this.password = [];
        let specials = 0;
        let capitals = 0;
        let smalls = 0;
        let numbers = 0;

        // CALCULATING RANDOM RANGE OF LETTERS
        specials = Math.floor((Math.random() * (length / 4)) + 1); // Special Characters
        length = length - specials;
        capitals = Math.floor((Math.random() * (length / 3)) + 1); // Capital Letters
        length = length - capitals;
        numbers = Math.floor((Math.random() * (length / 2)) + 1); // Numbers
        length = length - numbers;
        smalls = length; // small letters

        // ADDING SPECIAL CHARACTERS
        for (let i = 0; i < specials; i++) {
            let length = this.specialCharacters.length;
            let character = this.specialCharacters[Math.floor(Math.random() * length)];
            this.password.push(character);
        }

        // ADDING CAPITAL LETTERS
        for (let i = 0; i < capitals; i++) {
            let length = this.capitals.length;
            let character = this.capitals[Math.floor(Math.random() * length)];
            this.password.push(character);
        }

        // ADDING Numbers
        for (let i = 0; i < numbers; i++) {
            let character = Math.floor(Math.random() * 10);
            this.password.push(character);
        }

        // ADDING SMALL LETTERS
        for (let i = 0; i < smalls; i++) {
            let length = this.smalls.length;
            let character = this.smalls[Math.floor(Math.random() * length)];
            this.password.push(character);
        }

        this.shuffle(this.password);

        return this.password.join('');

    }

    shuffle(arr) {
        let length = arr.length;
        for (let i = length - 1; i >= 0; i--) {
            let temp = arr[i];
            let randomIndex = Math.floor(Math.random() * i);
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;
        }

        return arr;
    }

    generateFunnyPassword() {
        return this.funnyPasswords[Math.floor(Math.random() * this.funnyPasswords.length)];
    }
}

// Password
const passwordObject = new Password();
let password = passwordObject.generatePassword(16);

// VARIABLES
const input = document.getElementById('input');
const copy = document.querySelector('div.copy');
const reGenerateBtn = document.getElementById('re-generate');

const passwordLength = document.getElementById('password-length');
const lengthValue = document.querySelector('.length span:nth-of-type(2)');
const passwordStrength = document.querySelector('.length span:nth-of-type(3)');

const funnyPasswordBtn = document.getElementById('funny-password');
const saveBtn = document.getElementById('save-password');
const inputTitleDiv = document.querySelector('.input-title');
const inputTitle = document.getElementById('title-input');


const savedPasswordContainer = document.getElementsByClassName('passwords')[0];

// Resetting Some Values
passwordLength.value = 10;
lengthValue.textContent = passwordLength.value;
if (lengthValue.textContent <= 5) {
    passwordStrength.style.color = 'red';
    passwordStrength.textContent = 'Very Week!';
} else if (lengthValue.textContent >= 6 && lengthValue.textContent <= 8) {
    passwordStrength.style.color = 'blue';
    passwordStrength.textContent = 'Week!';

} else if (lengthValue.textContent >= 9 && lengthValue.textContent <= 12) {
    passwordStrength.style.color = 'orange';
    passwordStrength.textContent = 'Strong!';
    
} else if (lengthValue.textContent >= 13 && lengthValue.textContent <= 16) {
    passwordStrength.style.color = 'green';
    passwordStrength.textContent = 'Very Strong!';

}

// PASSWORD GENERATOR
let generate = async (n) => {
    let password = passwordObject.generatePassword(n);
    input.value = password;
}

// GENERATE FUNNY PASSWORD
let generateFunnyPassword = () => {
    let password = passwordObject.generateFunnyPassword();
    input.value = password;
}


// GENERATE ON LOAD
window.onload = async () => {
    let length = passwordLength.value;
    length = Number.parseInt(length);
    generate(length);

    refreshPasswords().then((value)=> {
        console.log('Passwords are refreshed');
        console.log(value);
    }, (value)=> {
        console.log('Passwords are not refreshed');
        console.log(value);
    })
}

// GENERATE ON INPUT
passwordLength.oninput = async () => {
    let length = passwordLength.value;
    length = Number.parseInt(length);

    // Generating Password
    generate(length);

    // Changing the value
    lengthValue.textContent = length;

    // Telling the password strenth
    if (length <= 5) {
        passwordStrength.style.color = 'red';
        passwordStrength.textContent = 'Very Week!';
    } else if (length >= 6 && length <= 8) {
        passwordStrength.style.color = 'blue';
        passwordStrength.textContent = 'Week!';

    } else if (length >= 9 && length <= 12) {
        passwordStrength.style.color = 'orange';
        passwordStrength.textContent = 'Strong!';

    } else if (length >= 13 && length <= 16) {
        passwordStrength.style.color = 'green';
        passwordStrength.textContent = 'Very Strong!';

    }
}


// GENERATE ON REGENERATE
reGenerateBtn.onclick = async (event) => {
    // animation of click
    event.target.style.transform = 'rotate(-360deg)';
    setTimeout(() => {
        event.target.style.transform = 'rotate(0)';
    }, 300)

    let length = passwordLength.value;
    length = Number.parseInt(length);
    generate(length);
}

// COPYING PASSWORD
copy.onclick = async () => {

    let text = input.value;

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch((err) => {
            console.error('Error copying text to clipboard:', err);
        });

    copy.classList.add('active');
    copy.textContent = 'copied';

    setTimeout(() => {
        copy.textContent = 'copy';
        copy.classList.remove('active');
    }, 2000)
}

// DISPLAYING FUNNY PASSWORD
funnyPasswordBtn.addEventListener('click', generateFunnyPassword);



// SAVE

// BLOCK & NONE THE INPUT
saveBtn.addEventListener('click', ()=> {
    inputTitleDiv.classList.add('show');
})

inputTitleDiv.addEventListener('click', ()=> {
    inputTitleDiv.classList.add('show');
})

document.body.addEventListener('click', ()=> {
    inputTitleDiv.classList.remove('show');    

}, true)

// SAVE FUNCTION
let save = async ()=> {
    let value = inputTitle.value;
    let titleAlertPara = document.querySelector('.input-title p:nth-child(1)');


    if(value.length >= 1 && value != '' && value != undefined && !(value.includes("'"))) {
        localStorage.setItem(value, input.value);
        inputTitle.value = '';
        return 1;
    } else if(value.includes("'")) {
        titleAlertPara.textContent = 'Do Not Include Letters Like " \' "';
        setTimeout(()=>{
            titleAlertPara.textContent = '';
        }, 2000)

        return -1;
    } else {
        titleAlertPara.textContent = '*Title'
        setTimeout(()=>{
            titleAlertPara.textContent = '';
        }, 2000)

        return -1;
    }
}

// SAVING
document.addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        let response = save();
        response.then((value)=> {
            if(value === 1) {
                inputTitleDiv.classList.remove('show'); 
                refreshPasswords();
            }
        })
    }
})


// SHOWING & REFRESHING THE SAVED PASSWORD
let refreshPasswords = async ()=> {

    let para = document.querySelector('.mypasswords h2 + p');
    savedPasswordContainer.innerHTML = '';

    let length = localStorage.length;
    if(length >= 1) {
        para.style.display = 'none';
        const keys = Object.keys(localStorage);

        for(let i=0; i<length; i++) {
            
            // CREATING TEMPLATE FOR A PASSWORD

            // PASSWORD DIV
            let passwordDiv = document.createElement('div');
            passwordDiv.classList.add('password');

            // CONTENT DIV
            let contentDiv = document.createElement('div');
            contentDiv.classList.add('content');

            // H4
            let h4 = document.createElement('h4');
            h4.textContent = keys[i];


            // SINGLE BUTTON DIV
            let buttonDiv = document.createElement('button');
            buttonDiv.classList.add('button');


            // IMG
            let img = document.createElement('img');
            img.src = 'RESOURCES/eye-closed.svg';

            // DOUBLE BUTTON DIV
            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttons');

            // CREATING LINKS
            let deletePasswordButton = document.createElement('button');
            deletePasswordButton.textContent = 'Delete'

            let checkPasswordStrengthButton = document.createElement('button');
            checkPasswordStrengthButton.textContent = 'Check Password Strength';



            // ADDING THE TEMPLATE TO THE BODY
            savedPasswordContainer.appendChild(passwordDiv);
            passwordDiv.appendChild(contentDiv);
            passwordDiv.appendChild(buttonDiv);
            passwordDiv.appendChild(buttonsDiv);

            contentDiv.appendChild(h4);
            buttonDiv.appendChild(img);
            buttonsDiv.appendChild(checkPasswordStrengthButton);
            buttonsDiv.appendChild(deletePasswordButton);



            // FUNCTIONALITIES

            // VIEW PASSWORD
            buttonDiv.addEventListener('click', ()=> {

                if(h4.textContent === keys[i]) {
                    h4.innerHTML =  `<span style="font-family: 'Source Code Pro', monospace;">${localStorage.getItem(keys[i])}</span> - (${keys[i]})`
                    img.src = 'RESOURCES/eye-open.svg'
                } else {
                    h4.textContent = keys[i];
                    img.src = 'RESOURCES/eye-closed.svg'
                }
            })


            // DELETE PASSWORD
            deletePasswordButton.addEventListener('click', ()=> {
                localStorage.removeItem(keys[i]);
                savedPasswordContainer.removeChild(passwordDiv);
                refreshPasswords2();
            })

            // CHECK STRENGTH
            checkPasswordStrengthButton.addEventListener('click', ()=> {
                let password = localStorage.getItem(keys[i]);
                let encodedPassword = encodeURIComponent(password);
                window.location.href = '/HTML/check-password-strength.html?password=' + encodedPassword;

            })

            
        }
    } else {
        para.style.display = 'block';
    }
}

// OUTER REFRESH OF THE PASSWORDS
let refreshPasswords2 = async ()=> {
    refreshPasswords();
}

// MENU
let menu = document.querySelector('nav ul');

// MENU OPEN
let menuOpen = async () => {
    menu.style.right = '0px';
}
// MENU CLOSE
let closeMenu = async () => {
    menu.style.right = '-275px';
}





