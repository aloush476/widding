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


openButton.addEventListener("click", () => {

    document.getElementById(
        "weddingDetails"
    ).scrollIntoView({

        behavior: "smooth"

    });

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
});