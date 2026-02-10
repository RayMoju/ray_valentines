
// 🎆 Fireworks – triggered only on YES
function playFireworks() {
  // make sure parent is there
  TweenMax.set(".eight", { visibility: "visible", opacity: 1, zIndex: 999 });

  // reset
  TweenMax.set(".eight svg", {
    visibility: "hidden",
    opacity: 0,
    scale: 1,
    transformOrigin: "50% 50%",
  });

  // POP + fade while scaling
  TweenMax.staggerFromTo(
    ".eight svg",
    1.5,
    { visibility: "visible", opacity: 1, scale: 1 },
    {
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 0.3,
      ease: Expo.easeOut,
    },
    0.3
  );
}



// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

window.mainTL = new TimelineMax();
const tl = window.mainTL;
// Hide later scenes at the very start so replay doesn't show them early
tl.set(".six", { opacity: 0 });
tl.set(".seven", { opacity: 0 });
tl.set(".nine", { opacity: 0 });



  tl.to(".container", 0.1, {
    visibility: "visible",
  })
  // 👇 SHOW SYSTEM MESSAGE FIRST
.from("#wishText", 0.7, {
  opacity:0,
  y:20
})
.to("#wishText", 0.7, {
  opacity:0,
  y:-20
}, "+=2")

    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .call(() => {
  // fade love OUT just before SO hits
  fadeAudio(loveSong, 0, 1000);
})

    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
     .call(() => {
  bestPart.currentTime = 0;
  bestPart.volume = 1;
  bestPart.play().catch(()=>{});
})




    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
  

    .to(".seven", 0, { opacity: 1 })
    .to(".six", 0, { opacity: 1 })

    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )


    
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )

.call(() => {

  // swap image + mark it as angie
  const img = document.getElementById("imagePath");
  if (img) img.src = "img/angie.jpeg";
   img.classList.add("angie");

    gsap.fromTo(img,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );

})

    
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
  

    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
.to({}, 0., {})  
.call(() => {
  // 👇 SHOW BUTTONS ONLY WHEN NEEDED
  const btns = document.querySelector(".val-buttons");
  if (btns) btns.classList.remove("hidden");

})

.call(() => {
  if (window.mainTL) window.mainTL.pause();
})
    
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .to(".nine", 0, { opacity: 1 })

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);
  // ===== RESET VISUAL STATE (prevents old text showing) =====

// 0) reset system message fully


  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  if (!replyBtn) return;
  replyBtn.onclick = () => {

    // 1) reset chatbox typed spans back to hidden
const chat = document.querySelector(".hbd-chatbox");
if (chat) {
  // ensure spans exist (your timeline reveals spans)
  const spans = chat.querySelectorAll("span");
  spans.forEach(s => (s.style.visibility = "hidden"));

}


// 2) reset wish headline spans (GSAP sets inline styles like opacity/transform/color)
TweenMax.set(".wish-hbd span", { clearProps: "all" });
TweenMax.set(".wish h5", { clearProps: "all" });
TweenMax.set(".girl-dp", { clearProps: "all" });
TweenMax.set(".six", { clearProps: "all" });
TweenMax.set(".one, .two, .three, .four, .five, .seven", { clearProps: "all" });
  // 1) reset audios
  loveSong.pause();
  loveSong.currentTime = 0;
  loveSong.volume = 0.6;

  bestPart.pause();
  bestPart.currentTime = 0;
  bestPart.volume = 0.0;

  // 2) reset valentine buttons + response
  const btns = document.querySelector(".val-buttons");
  if (btns) btns.classList.add("hidden");

  const resp = document.getElementById("val-response");
  if (resp) resp.innerText = "";
  


  // 3) reset image back to default (matches your customize.json)
  const img = document.getElementById("imagePath");
  if (img) { img.src = "img/crush.jpeg";
  img.classList.remove("angie");
  }

  // 4) reset NO button position (it may be fixed somewhere random)
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";
    noBtn.style.zIndex = "";
  }

  // 5) show wishText again (in case it ended at opacity 0)
  const sys = document.getElementById("wishText");
  if (sys) sys.style.opacity = 0;
  sys.style.transform = "";

  const wishHbd = document.querySelector(".wish-hbd");
if (wishHbd) wishHbd.innerHTML = wishHbd.textContent; // remove the spans properly



  // restart animation
  tl.restart(true);
};

};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch();

// ===== HACKER PASSWORD SYSTEM =====
const robotAmbience = document.getElementById("robotAmbience");
robotAmbience.volume = 0.25; // keep subtle

// ▶️ START HACKING MUSIC ON FIRST INTERACTION (like before)
const startAudioOnce = () => {
  robotAmbience.currentTime = 0;
  robotAmbience.play().catch(()=>{});
  window.removeEventListener("pointerdown", startAudioOnce);
  window.removeEventListener("keydown", startAudioOnce);
};

window.addEventListener("pointerdown", startAudioOnce);
window.addEventListener("keydown", startAudioOnce);


const loveSong = document.getElementById("loveSong");
loveSong.volume = 0.6;
const staticSound = document.getElementById("staticSound");
if (staticSound) staticSound.volume = 0.35;

const bestPart = document.getElementById("bestPart");
bestPart.volume = 0.0;



const hackBtn = document.getElementById("hackBtn");
const hackInput = document.getElementById("hackInput");
const hackStatus = document.getElementById("hackStatus");
const hackGate = document.getElementById("hackGate");

hackBtn.addEventListener("click", () => {
  tryAccess();
});


hackInput.addEventListener("keypress", e=>{
  if(e.key === "Enter") tryAccess();
});
function fadeAudio(audio, target, ms = 800) {
  if (!audio) return;
  const start = (audio.volume !== undefined && audio.volume !== null) 
  ? audio.volume 
  : 0;
  const t0 = performance.now();

  const tick = (now) => {
    const t = Math.min((now - t0) / ms, 1);
    audio.volume = start + (target - start) * t;
    if (t < 1) requestAnimationFrame(tick);
    else if (target === 0) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  requestAnimationFrame(tick);
}

function tryAccess(){
  const val = hackInput.value.toLowerCase();

  if(val === "shayla"){

    document.body.classList.add("hacked"); // ⭐ add this
    robotAmbience.pause();
    robotAmbience.currentTime = 0
   if (staticSound) {
  staticSound.currentTime = 0;
  // 🔊 FULL BLAST STATIC
  staticSound.volume = 1.0;   // max volume
  staticSound.play().catch(()=>{});
}
// play static a second time (3s + 3s = 6s)
setTimeout(() => {
  if (staticSound) {
    staticSound.currentTime = 0;
    staticSound.play().catch(()=>{});
  }
}, 3000);



    hackStatus.style.color = "#42ff8c";
    hackStatus.innerText = "ACCESS GRANTED...";
    
  setTimeout(() => {
  hackGate.style.display = "none";

  // 1s silence after static finishes (static is 6s total)
  setTimeout(() => {
    loveSong.currentTime = 0;
    loveSong.volume = 0;              // start silent
    loveSong.play().catch(()=>{});
    fadeAudio(loveSong, 0.6, 2000);   // fade in over 2s

    animationTimeline();
  }, 1000);

}, 6000);


  }else{
    hackStatus.style.color = "#ff4d6d";
    hackStatus.innerText = "ACCESS DENIED";
    hackGate.animate(
      [{transform:"translateX(-10px)"},{transform:"translateX(10px)"},{transform:"translateX(0)"}],
      {duration:300}
    );
  }
}
// ===== TERMINAL TYPE EFFECT FOR WISH TEXT =====

function typeWishText(){
  const wish = document.querySelector(".wish-hbd");
  const text = wish.innerText;
  wish.innerText = "";

  let i = 0;

  const typer = setInterval(()=>{
    wish.innerText += text[i];
    i++;

    if(i >= text.length){
      clearInterval(typer);
    }
  },40); // typing speed (lower = faster)
}
// =====================
// VALENTINE BUTTON LOGIC
// =====================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const valResponse = document.getElementById("val-response");

if(yesBtn){
   yesBtn.onclick = () => {



    valResponse.innerText = "smart choice";


    document.querySelector(".val-buttons").classList.add("hidden");
    // 👇 hide buttons after she says yes
    const btnWrap = document.querySelector(".val-buttons");
    if(btnWrap) btnWrap.classList.add("hidden");

     // 🎆 FIREWORKS FIRST
    playFireworks();

// resume animation
setTimeout(() => {
    if (window.mainTL) {
      window.mainTL.resume();
    }
  }, 1800); // matches fireworks duration
};
}

if (noBtn) {
  noBtn.onclick = () => {
    

    // playful dodge
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 60 + "%";
};

}



function crossfade(fromAudio, toAudio, durationMs = 1800, toTargetVol = 0.7) {
  if (!fromAudio || !toAudio) return;
  const quizScene = document.getElementById("quizScene");
const quizQuestion = document.getElementById("quizQuestion");
const quizHint = document.getElementById("quizHint");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const revealModal = document.getElementById("revealModal");
const revealGif = document.getElementById("revealGif");
const revealContinue = document.getElementById("revealContinue");
const revealTitle = document.getElementById("revealTitle");


  




  // start the new track silently
  toAudio.currentTime = 0;
  toAudio.volume = 0;
  toAudio.play().catch(() => {});

  const start = performance.now();
  const fromStartVol = fromAudio.volume;

  const tick = (now) => {
    const t = Math.min((now - start) / durationMs, 1);

    fromAudio.volume = fromStartVol * (1 - t);
    toAudio.volume = toTargetVol * t;

    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      fromAudio.pause();
      fromAudio.currentTime = 0;
      fromAudio.volume = fromStartVol; // restore for next time
    }
  };

  requestAnimationFrame(tick);
}
