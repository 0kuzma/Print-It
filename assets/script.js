const slider = document.querySelector('.slider');
//arrows
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

// position of slider
let levelSlider = 0;

// arrow function left
leftArrow.addEventListener("click", function() {
    if (levelSlider > 0) {
        levelSlider--;
    } else {
        levelSlider = 3;
    }
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
	// slider move
    slider.style.transform = "translate(" + (levelSlider) * -25 + "%)";
});