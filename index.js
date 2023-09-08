var rec = document.querySelector("#center");

rec.addEventListener("mousemove", function (detail) {

    // get the Rectangle's location
    var rectangleLocation = rec.getBoundingClientRect();

    // get to know that how much we are inside the recgtangle 
    // by getting the x and y position of mouse pointer relative    

    var insiderRectVal = detail.clientX - rectangleLocation.left;

    if (insiderRectVal < rectangleLocation.width / 2) {
        var redBg = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insiderRectVal);

        gsap.to(rec, {
            backgroundColor: `rgb(${redBg},0,0)`,
            ease: Power4
        })
    } else {
        var blueGb = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insiderRectVal);

        gsap.to(rec, {
            backgroundColor: `rgb(0,0,${blueGb})`,
            ease: Power4
        })
    }
})

rec.addEventListener("mouseleave", function () {
    gsap.to(rec, {
        backgroundColor: "white"
    })
})