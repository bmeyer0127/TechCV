
// expArrow rotation
let expTags = document.getElementsByClassName("expTag");
let expArrows = document.getElementsByClassName("expArrow");
let currentTrans = [];
let rotate = [false, false, false];

// function getCurrentTrans() {
//     for (let i = 0; i < expArrows.length; i++) {
//         let currentPush = (String(expArrows[i].style.transform));
//         // let currentPush = getComputedStyle(expArrows[i]).getPropertyValue("transform");
//         currentTrans.push(currentPush);
//         console.log(currentTrans[0]);
//         console.log(currentTrans[1]);
//         console.log(currentTrans[2]);
//     };
// }



function rotateArrow(num) {
    if (!rotate[num]) {
        // expArrows[num].style.transform = "rotate(90deg)";
        expArrows[num].setAttribute("style", "transform: rotate(90deg);");
        rotate[num] = true;
        return;
    }
    if (rotate[num]) {
        // expArrows[num].style.transform = "rotate(0deg)";
        expArrows[num].setAttribute("style", "transform: rotate(0deg);");
        rotate[num] = false;
        return;
    }
}

function translateArrowOn(num) {
    // expArrows[num].style.transform = "translate(-3px,0)";
    compStyle = getComputedStyle(expArrows[num])
    expArrows[num].setAttribute("style", "transform: translate(-3px,0);");
}

function translateArrowOff(num) {
    // expArrows[num].style.transform = "translate(3px,0)";
    expArrows[num].setAttribute("style", "transform: translate(3px,0);");
}

function assignTransformation() {
    let finalTransformation = 
    expArrows[num].style.transform = finalTransformation;
}