const slider = document.querySelector('.slider');
//arrows
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

//dots
const indicatorDots = document.querySelector(".controls ul");

// position of slider
let levelSlider = 0;

// arrow function left
leftArrow.addEventListener("click", function() {
    if (levelSlider > 0) {
        levelSlider--;
    } else {
        levelSlider = 3;
    }
	// dots add and remove
    document.querySelector(".selected").classList.remove("selected");
    indicatorDots.children[levelSlider].classList.add("selected");
	// slider move
    slider.style.transform = "translate(" + (levelSlider) * -25 + "%)";
});

// arrow function right
rightArrow.addEventListener("click", function() {
    if (levelSlider < 3) {
        levelSlider++;
    } else {
        levelSlider = 0;
    }
	// dots add and remove
    document.querySelector(".selected").classList.remove("selected");
    indicatorDots.children[levelSlider].classList.add("selected");
	// slider move
    slider.style.transform = "translate(" + (levelSlider) * -25 + "%)";
});