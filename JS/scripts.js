
//updateInfoText
    const personalInfoChoices = document.getElementsByName("personalInfoChoice");
    function updateInfoText() {
        console.log("is calling function");
        if (personalInfoChoices[0].checked) {
            document.getElementById("personalInfoContentYeah").style.visibility = "visible";
            document.getElementById("personalInfoContentNah").style.visibility = "hidden";
        }
        if (personalInfoChoices[1].checked) {
            document.getElementById("personalInfoContentNah").style.visibility = "visible";
            document.getElementById("personalInfoContentYeah").style.visibility = "hidden";
        }
    }
//updateInfoText

// expArrow Transformations
let expArrows = document.getElementsByClassName("expArrow");
let rotate = [false, false, false, false];
let trans = [false, false, false, false];
let rotateTrans = ["rotate(90deg)", "rotate(-90deg)"];
let transTrans = ["translate(-3px,0)", "translate(3px,0)"];


let expTags = document.getElementsByClassName("expTag");
let aboutMeContent = document.getElementById("aboutMeContent");
let open = false;
function aboutMeOpen() {
    if (!open) {
        aboutMeContent.style.visibility = "visible";
        aboutMeContent.style.transform = "translate(0,10px)";
        open = !open;
    }
    else if (open) {
        aboutMeContent.style.transform = "translate(0,-10px)";
        aboutMeContent.style.visibility = "hidden";
        open = !open;
    }
}

function assignTrans(index, type) {

    if (type == "transOn") {
        expArrows[index].style.transform += transTrans[0];
    }
    else if (type == "transOff") {
        expArrows[index].style.transform += transTrans[1];
    }
    else if (type == "rotate") {
        if (rotate[index] == false) {
            expArrows[index].style.transform += rotateTrans[0];
            rotate[index] = true;
        }
        else if (rotate[index] == true) {
            expArrows[index].style.transform += rotateTrans[1];
            rotate[index] = false;
        }
    }
}
//expArrow Transformation

//contactIcon Transformation
let contactIcons = document.getElementsByClassName("contactInfoIcon");
let contactInfo = document.getElementsByClassName("contactInfo");
let contactInfoHiders = document.getElementsByClassName("contactInfoHider");
function contactIconTrans(index) {
    if (!trans[index]) {
        contactIcons[index].style.transform += "translate(-265px, 0)";

        contactInfoHiders[index].style.transform += "translate(-250px,0)";
        trans[index] = !trans[index];
    }
    else {
        return;
    }
}
//contactIcon Transformation