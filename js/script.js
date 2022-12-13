const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');
    
    select.addEventListener('.click', () => {
        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {        
        option.addEventListener)'click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        menu.classList.remoge('menu-open');
        
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});
});


        
    

    


const audioCtx = new window.AudioContext || window.webkitAudioContext;
const startOsc = document.querySelector("#startOsc");
const stopOsc = document.querySelector("#stopOsc");

// ===== SLIDERS FOR ADSR ===== //
const attack = document.querySelector("#attackTime");
const decay = document.querySelector("#decayTime");
const sustain = document.querySelector("#sustainLevel");
const release = document.querySelector("#releaseTime");

// ===== SPANS FOR SLIDER VALUES //
const attackSpan = document.querySelector("#attackVal");
const decaySpan = document.querySelector("#decayVal");
const sustainSpan = document.querySelector("#sustainVal");
const releaseSpan = document.querySelector("#releaseVal");

// for some reason, JavaScript interprets the value of the range sliders as a string, not as a number. parseFloat() converts the decimal-point string into a decimal-point number
let attackVal = parseFloat(attack.value);
let decayVal = parseFloat(decay.value);
let sustainVal = parseFloat(sustain.value);
let releaseVal = parseFloat(release.value);

attackSpan.innerHTML = attackVal;
decaySpan.innerHTML = decayVal;
sustainSpan.innerHTML = 100 * sustainVal;
releaseSpan.innerHTML = releaseVal;

let osc, vol

startOsc.addEventListener("click", () => {   
    let now = audioCtx.currentTime;
    
    osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 220;

    vol = audioCtx.createGain();
    vol.gain.cancelScheduledValues(0);  // this action deletes any possiblity of pre-programmed future events getting in the way
    vol.gain.setValueAtTime(0, now);
    vol.gain.linearRampToValueAtTime(1, now + attackVal);
    vol.gain.linearRampToValueAtTime(sustainVal, now + attackVal + decayVal);

    osc.connect(vol);

    vol.connect(audioCtx.destination);

    osc.start();
})

stopOsc.addEventListener("click", () => {
    osc.stop();
})

// ===== Event Listeners for Changing ADSR Values ===== //
attack.addEventListener("input", () => {
    attackVal = parseFloat(attack.value);
    attackSpan.innerHTML = attackVal;
})

decay.addEventListener("input", () => {
    decayVal = parseFloat(decay.value);
    decaySpan.innerHTML = decayVal;
})

sustain.addEventListener("input", () => {
    sustainVal = parseFloat(sustain.value);
    sustainSpan.innerHTML = 100 * sustainVal;
})

release.addEventListener("input", () => {
    releaseVal = parseFloat(release.value);
    releaseSpan.innerHTML = releaseVal;
})


/////////////NEW///////////////


const startAudio = document.querySelector("#startAudio");

const playBtn = document.querySelector("#playBtn"); // Global Variable
const stopBtn = document.querySelector("#stopBtn"); // Global Variable
const playBtn01 = document.querySelector("#playBtn01"); // Global Variable
const stopBtn01 = document.querySelector("#stopBtn01"); // Global Variable
const playBtn001 = document.querySelector("#playBtn001"); // Global Variable
const stopBtn001 = document.querySelector("#stopBtn001"); // Global Variable

const playBtn2 = document.querySelector("#playBtn2"); // Global Variable
const stopBtn2 = document.querySelector("#stopBtn2"); // Global Variable
const playBtn02 = document.querySelector("#playBtn02"); // Global Variable
const stopBtn02 = document.querySelector("#stopBtn02"); // Global Variable
const playBtn002 = document.querySelector("#playBtn002"); // Global Variable
const stopBtn002 = document.querySelector("#stopBtn002"); // Global Variable

const playBtn3 = document.querySelector("#playBtn3"); // Global Variable
const stopBtn3 = document.querySelector("#stopBtn3"); // Global Variable
const playBtn03 = document.querySelector("#playBtn03"); // Global Variable
const stopBtn03 = document.querySelector("#stopBtn03"); // Global Variable

const playBtn4 = document.querySelector("#playBtn4"); // Global Variable
const stopBtn4 = document.querySelector("#stopBtn4"); // Global Variable
const playBtn5 = document.querySelector("#playBtn5"); // Global Variable
const stopBtn5 = document.querySelector("#stopBtn5"); // Global Variable
const playBtn6 = document.querySelector("#playBtn6"); // Global Variable
const stopBtn6 = document.querySelector("#stopBtn6"); // Global Variable
const playBtn7 = document.querySelector("#playBtn7"); // Global Variable
const stopBtn7 = document.querySelector("#stopBtn7"); // Global Variable

const range1 = document.querySelector("#gain1");
const range01 = document.querySelector("#gain01");
const range001 = document.querySelector("#gain001");

const range2 = document.querySelector("#gain2");
const range02 = document.querySelector("#gain02");
const range002 = document.querySelector("#gain002");

const range3 = document.querySelector("#gain3");
const range03 = document.querySelector("#gain03");

const range4 = document.querySelector("#gain4");
const range5 = document.querySelector("#gain5");
const range6 = document.querySelector("#gain6");
const range7 = document.querySelector("#gain7");


    const audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
let osc1 = '';
let range1Val = range1.value;
let vol1 = '';  

playBtn.addEventListener("click", () => {
    osc1 = audioCtx.createOscillator();  

    osc1.type = "sine";
    osc1.frequency.value = 110;

    vol1 = audioCtx.createGain();  
    console.log(range1Val);
    vol1.gain.value = range1Val;

    osc1.connect(vol1);
    vol1.connect(audioCtx.destination);
    osc1.start();
    console.log(osc1);
});

stopBtn.addEventListener("click", () => {
    osc1.stop();
});

range1.addEventListener("change", () => {

   range1Val = range1.value;    
   vol1.gain.value = range1Val; 
   gain1Level.innerHTML = range1Val;
   console.log(range1Val);
   console.log(vol1.gain.value);
});

//////////OSCILLATOR 2
let osc2 = '';   
let range2Val = range2.value;
let vol2 = '';

playBtn2.addEventListener("click", () => {
    osc2 = audioCtx.createOscillator();  
    osc2.type = "sine";
    osc2.frequency.value = 220;

    vol2 = audioCtx.createGain();
    vol2.gain.value = range2Val;

    osc2.connect(vol2);
    vol2.connect(audioCtx.destination);
    osc2.start();
})

stopBtn2.addEventListener("click", () => {
    osc2.stop();
});

range2.addEventListener("change", () => {

   range2Val = range2.value;
   vol2.gain.value = range2Val; 
   console.log(range2Val);
});

//////OSCILLATOR 3

let osc3 = '';
let range3Val = range3.value;
let vol3 = '';

playBtn3.addEventListener("click", () => {
    osc3 = audioCtx.createOscillator();
    osc3.type = "sine";
    osc3.frequency.value = 330;

    vol3 = audioCtx.createGain();
    vol3.gain.value = range3Val;

    osc3.connect(vol3);
    vol3.connect(audioCtx.destination);
    osc3.start();
})

stopBtn3.addEventListener("click", () => {
    osc3.stop();
});

range3.addEventListener("change", () => {
  
   range3Val = range3.value;
   vol3.gain.value = range3Val; 
   console.log(range3Val);
});

//////OSCILLATOR 4

let osc4 = '';
let range4Val = range4.value;
let vol4 = '';

playBtn4.addEventListener("click", () => {
    osc4 = audioCtx.createOscillator();
    osc4.type = "sine";
    osc4.frequency.value = 440;

    vol4 = audioCtx.createGain();
    vol4.gain.value = range4Val;

    osc4.connect(vol4);
    vol4.connect(audioCtx.destination);
    osc4.start();
})

stopBtn4.addEventListener("click", () => {
    osc4.stop();
});

range4.addEventListener("change", () => {
  
   range4Val = range4.value;
   vol4.gain.value = range4Val; 
   console.log(range4Val);
});

//////OSCILLATOR 5

let osc5 = '';
let range5Val = range5.value;
let vol5 = '';

playBtn5.addEventListener("click", () => {
    osc5 = audioCtx.createOscillator();
    osc5.type = "sine";
    osc5.frequency.value = 550;

    vol5 = audioCtx.createGain();
    vol5.gain.value = range5Val;

    osc5.connect(vol5);
    vol5.connect(audioCtx.destination);
    osc5.start();
})

stopBtn5.addEventListener("click", () => {
    osc5.stop();
});

range5.addEventListener("change", () => {
  
   range5Val = range5.value;
   vol5.gain.value = range5Val; 
   console.log(range5Val);
});

//////OSCILLATOR 6

let osc6 = '';
let range6Val = range6.value;
let vol6 = '';

playBtn6.addEventListener("click", () => {
    osc6 = audioCtx.createOscillator();
    osc6.type = "sine";
    osc6.frequency.value = 660;

    vol6 = audioCtx.createGain();
    vol6.gain.value = range6Val;

    osc6.connect(vol6);
    vol6.connect(audioCtx.destination);
    osc6.start();
})

stopBtn6.addEventListener("click", () => {
    osc6.stop();
});

range6.addEventListener("change", () => {
  
   range6Val = range6.value;
   vol6.gain.value = range6Val; 
   console.log(range6Val);
});

//////OSCILLATOR 7

let osc7 = '';
let range7Val = range7.value;
let vol7 = '';

playBtn7.addEventListener("click", () => {
    osc7 = audioCtx.createOscillator();
    osc7.type = "sine";
    osc7.frequency.value = 770;

    vol7 = audioCtx.createGain();
    vol7.gain.value = range7Val;

    osc7.connect(vol7);
    vol7.connect(audioCtx.destination);
    osc7.start();
})

stopBtn7.addEventListener("click", () => {
    osc7.stop();
});

range7.addEventListener("change", () => {
  
   range7Val = range7.value;
   vol7.gain.value = range7Val; 
   console.log(range7Val);
});




/////SPARE DUPLICATE OSCILLATORS///////
/////OSCILLATOR 01


let osc01 = '';
let range01Val = range01.value;
let vol01 = '';  

playBtn01.addEventListener("click", () => {
    osc01 = audioCtx.createOscillator();  

    osc01.type = "sine";
    osc01.frequency.value = 110;

    vol01 = audioCtx.createGain();  
    console.log(range01Val);
    vol01.gain.value = range01Val;

    osc01.connect(vol01);
    vol01.connect(audioCtx.destination);
    osc01.start();
    console.log(osc01);
});

stopBtn01.addEventListener("click", () => {
    osc01.stop();
});

range01.addEventListener("change", () => {

   range01Val = range01.value;    
   vol01.gain.value = range01Val; 
   gain01Level.innerHTML = range01Val;
   console.log(range01Val);
   console.log(vol01.gain.value);
});

//////////OSCILLATOR 02
let osc02 = '';   
let range02Val = range02.value;
let vol02 = '';

playBtn02.addEventListener("click", () => {
    osc02 = audioCtx.createOscillator();  
    osc02.type = "sine";
    osc02.frequency.value = 220;

    vol02 = audioCtx.createGain();
    vol02.gain.value = range02Val;

    osc02.connect(vol02);
    vol02.connect(audioCtx.destination);
    osc02.start();
})

stopBtn02.addEventListener("click", () => {
    osc02.stop();
});

range02.addEventListener("change", () => {

   range02Val = range02.value;
   vol02.gain.value = range02Val; 
   console.log(range02Val);
});

//////OSCILLATOR 03

let osc03 = '';
let range03Val = range03.value;
let vol03 = '';

playBtn03.addEventListener("click", () => {
    osc03 = audioCtx.createOscillator();
    osc03.type = "sine";
    osc03.frequency.value = 330;

    vol03 = audioCtx.createGain();
    vol03.gain.value = range03Val;

    osc03.connect(vol03);
    vol03.connect(audioCtx.destination);
    osc03.start();
})

stopBtn03.addEventListener("click", () => {
    osc03.stop();
});

range03.addEventListener("change", () => {
  
   range03Val = range03.value;
   vol03.gain.value = range03Val; 
   console.log(range03Val);
});

////OSCILLATOR 001

let osc001 = '';
let range001Val = range001.value;
let vol001 = '';  

playBtn001.addEventListener("click", () => {
    osc001 = audioCtx.createOscillator();  

    osc001.type = "sine";
    osc001.frequency.value = 110;

    vol001 = audioCtx.createGain();  
    console.log(range001Val);
    vol001.gain.value = range001Val;

    osc001.connect(vol001);
    vol001.connect(audioCtx.destination);
    osc001.start();
    console.log(osc001);
});

stopBtn001.addEventListener("click", () => {
    osc001.stop();
});

range001.addEventListener("change", () => {

   range001Val = range001.value;    
   vol001.gain.value = range001Val; 
   gain001Level.innerHTML = range001Val;
   console.log(range001Val);
   console.log(vol001.gain.value);
});

//////////OSCILLATOR 002
let osc002 = '';   
let range002Val = range002.value;
let vol002 = '';

playBtn002.addEventListener("click", () => {
    osc002 = audioCtx.createOscillator();  
    osc002.type = "sine";
    osc002.frequency.value = 220;

    vol002 = audioCtx.createGain();
    vol002.gain.value = range002Val;

    osc002.connect(vol002);
    vol002.connect(audioCtx.destination);
    osc002.start();
})

stopBtn002.addEventListener("click", () => {
    osc002.stop();
});

range002.addEventListener("change", () => {

   range002Val = range002.value;
   vol002.gain.value = range002Val; 
   console.log(range002Val);
});

