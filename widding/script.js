/* ========================================
   LOADING
======================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");


    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});

/* ========================================
   حنة إبراهيم
======================================== */

const groomHennaYear = 2026;

const groomHennaMonth = 9;

const groomHennaDay = 23;

const groomHennaHour = 20;

const groomHennaMinute = 0;

/* ========================================
   تاريخ الفرح
======================================== */

const weddingDate = new Date(
    2026,
    9,
    25,
    20,
    0,
    0
).getTime();



/* ========================================
   COUNTDOWN
======================================== */

function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";

        document.getElementById("hours").textContent = "00";

        document.getElementById("minutes").textContent = "00";

        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);



/* ========================================
   زر افتح الدعوة
======================================== */

const openButton =
    document.getElementById("openInvitation");

const weddingAudio =
    document.getElementById("weddingAudio");

const audioToggle =
    document.getElementById("audioToggle");

const audioIcon =
    document.getElementById("audioIcon");


openButton.addEventListener("click", () => {

    document.getElementById(
        "weddingDetails"
    ).scrollIntoView({

        behavior: "smooth"

    });

    weddingAudio.muted = false;

    weddingAudio.play().then(() => {
        audioToggle.classList.add("is-playing");
        audioToggle.setAttribute("aria-label", "كتم الصوت");
        audioToggle.setAttribute("aria-pressed", "true");
        audioIcon.textContent = "🔊";
    }).catch(() => {
        audioIcon.textContent = "🔇";
    });

});


audioToggle.addEventListener("click", () => {

    if (weddingAudio.paused) {
        weddingAudio.muted = false;
        weddingAudio.play();
    } else {
        weddingAudio.muted = !weddingAudio.muted;
    }

    const isMuted = weddingAudio.muted;

    audioToggle.classList.toggle("is-muted", isMuted);
    audioToggle.classList.toggle("is-playing", !isMuted);
    audioToggle.setAttribute(
        "aria-label",
        isMuted ? "تشغيل الصوت" : "كتم الصوت"
    );
    audioToggle.setAttribute("aria-pressed", String(!isMuted));
    audioIcon.textContent = isMuted ? "🔇" : "🔊";

});



/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* ========================================
   ADD TO CALENDAR
======================================== */

const addCalendar =
    document.getElementById("addCalendar");


addCalendar.addEventListener("click", () => {

    const title =
        "حفل زفاف إبراهيم & نيره";


    const start =
        "20261025T200000";


    const end =
        "20261025T230000";


    const calendarUrl =
        "https://calendar.google.com/calendar/render" +
        "?action=TEMPLATE" +
        "&text=" +
        encodeURIComponent(title) +
        "&dates=" +
        start +
        "/" +
        end;


    window.open(
        calendarUrl,
        "_blank"
    );

/* ========================================
   كتابة تاريخ الحنة
======================================== */

const groomHennaDate = new Date(
    groomHennaYear,
    groomHennaMonth,
    groomHennaDay
);


const arabicDays = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
];


groomHennaDateText.textContent =
    `${arabicDays[groomHennaDate.getDay()]}، ${groomHennaDay} ${monthNames[groomHennaMonth]} ${groomHennaYear}`;

    /* ========================================
   حنة نيره
======================================== */

const brideHennaYear = 2026;

const brideHennaMonth = 9;

const brideHennaDay = 22;

const brideHennaHour = 20;

const brideHennaMinute = 0;


/* ========================================
   Calendar حنة نيره
======================================== */

const brideHennaDays =
    document.getElementById(
        "brideHennaDays"
    );


const brideHennaMonthTitle =
    document.getElementById(
        "brideHennaMonth"
    );


const brideHennaDateText =
    document.getElementById(
        "brideHennaDateText"
    );


brideHennaMonthTitle.textContent =
    `${monthNames[brideHennaMonth]} ${brideHennaYear}`;


const brideFirstDay =
    new Date(
        brideHennaYear,
        brideHennaMonth,
        1
    ).getDay();


const brideDaysInMonth =
    new Date(
        brideHennaYear,
        brideHennaMonth + 1,
        0
    ).getDate();


brideHennaDays.innerHTML = "";


/* الفراغات قبل أول يوم */

for (
    let i = 0;
    i < brideFirstDay;
    i++
) {

    const empty =
        document.createElement("span");

    empty.classList.add("empty");

    brideHennaDays.appendChild(empty);

}


/* أرقام الشهر */

for (
    let day = 1;
    day <= brideDaysInMonth;
    day++
) {

    const dayElement =
        document.createElement("span");

    dayElement.textContent = day;


    if (
        day === brideHennaDay
    ) {

        dayElement.classList.add(
            "selected-day"
        );

    }


    brideHennaDays.appendChild(
        dayElement
    );

}


/* ========================================
   تاريخ حنة نيره
======================================== */

const brideHennaDate =
    new Date(
        brideHennaYear,
        brideHennaMonth,
        brideHennaDay
    );


brideHennaDateText.textContent =
    `${arabicDays[brideHennaDate.getDay()]}، ${brideHennaDay} ${monthNames[brideHennaMonth]} ${brideHennaYear}`;
    document
.getElementById("coverOpen")
.addEventListener("click",()=>{

document
.querySelector(".invitation-card")
.scrollIntoView({

behavior:"smooth"

});

});
});