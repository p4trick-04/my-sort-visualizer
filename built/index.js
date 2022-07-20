"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var sizeRange = document.querySelector("size-range");
var sizeInput = document.querySelector(".size-input");
var barContainer1 = document.querySelector(".bar-container-1");
var bar_List = barContainer1.children;
var newArray = document.querySelector(".new-array");
var moreSetting = document.querySelector(".more-setting");
// set the sizeInput element "value attribute" the same as the sizeRange has
sizeInput.value = String(bar_List.length);
// adjust the width according the text content
adjustInputText(sizeInput, 2);
var currSizeVal = bar_List.length;
// initial array
// set all of the array with random height
for (var i = 0; i < currSizeVal; i++) {
    var bar = barContainer1.children[i];
    (0, utils_1.setRandHeight)(bar);
}
/**
 * insert element in three ways
 */
function appendChildRandom(element, interval) {
    var rand = (0, utils_1.getRandNum)(10);
    if (rand < 5) {
        // insert at the end
        barContainer1.appendChild(element);
    }
    else if (rand > 5) {
        // insert random
        barContainer1.insertBefore(element, bar_List[(0, utils_1.getRandNum)(interval - 1)]);
    }
    else {
        // insert at the beginning
        barContainer1.insertBefore(element, bar_List[0]);
    }
}
/**
 * returns the width of child text of any DOM node as a float
 */
function getTextWidth(el) {
    // uses a cached canvas if available
    // let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));  
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    // get the full font style property
    var font = window.getComputedStyle(el, null).getPropertyValue('font');
    // get the user input
    var getInputTxt = el.value;
    // set the font attr for the canvas text
    context.font = font;
    var textMeasurement = context.measureText(getInputTxt);
    return textMeasurement.width;
}
function adjustInputText(inputTxt, extraPadding) {
    if (extraPadding === void 0) { extraPadding = 0; }
    var width = Math.floor(getTextWidth(inputTxt));
    // add padding to adjust the size
    var widthInPx = (width + extraPadding) + "px";
    // console.log(widthInPx);
    inputTxt.style.width = widthInPx;
}
// navbar line animation
{
    var menu = document.querySelector(".menu");
    var menu_List = menu.children;
    var menuLine_1 = document.querySelector(".menu-line");
    var leftDef_1 = 0, widthDef_1 = 0;
    var leftAnimation_1, widthAnimation_1;
    // is first time hover?
    var isFirstTime_1 = true;
    // minus 1 to exclude this: <li class="menu-line"></li>
    for (var i = 0; i < menu_List.length - 1; i++) {
        /* references
        https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
        https://stackoverflow.com/questions/11634770/get-position-offset-of-element-relative-to-a-parent-container
        */
        menu_List[i].addEventListener("mouseover", function (e) {
            var menu = e.target;
            console.log(menu);
            console.log(menu.offsetLeft);
            // show the line
            menuLine_1.style.display = "block";
            // set the with same as the hovered element
            // reason why we do this weird arithmetic operation:
            // 16*2 is the total of left and right padding. We want to exclude padding so that we get the actual content width
            // so with that said we need to substract the total width with the paddings
            // menu.offsetWidth is the total width(which is paddings included)
            widthAnimation_1 = menu.offsetWidth - 16 * 2;
            menuLine_1.style.width = menu.offsetWidth - 16 * 2 + "px";
            // adjust the coordinate
            leftAnimation_1 = menu.offsetLeft + 16;
            menuLine_1.style.left = menu.offsetLeft + 16 + "px";
        });
        menu_List[i].addEventListener("click", function (e) {
            console.log("clicked");
            // then we can modify the line
            menuLine_1.style.width = widthAnimation_1 + "px";
            menuLine_1.style.left = leftAnimation_1 + "px";
            widthDef_1 = widthAnimation_1;
            leftDef_1 = leftAnimation_1;
            isFirstTime_1 = false;
        });
    }
    menu.addEventListener("mouseleave", function (e) {
        if (isFirstTime_1 === true) {
            menuLine_1.style.display = "none";
        }
        menuLine_1.style.width = widthDef_1 + "px";
        menuLine_1.style.left = leftDef_1 + "px";
    });
}
function resizeArray(resizedVal) {
    // if the the user want to increase the array
    if (resizedVal > currSizeVal) {
        // this loop is needed to prevent jumping(when the user immediately adjust the length to the largest or smallest)
        for (var i = currSizeVal; i < resizedVal; i++) {
            currSizeVal = resizedVal;
            var div = document.createElement("div");
            (0, utils_1.setRandHeight)(div);
            appendChildRandom(div, i);
        }
    }
    // else if the user want to decrease the array
    else if (resizedVal < currSizeVal) {
        for (var i = currSizeVal; i > resizedVal; i--) {
            // remove the element randomly.
            barContainer1.removeChild(bar_List[(0, utils_1.getRandNum)(i - 1)]);
            currSizeVal = resizedVal;
        }
    }
}
// resize the length of the array
sizeRange.addEventListener("input", function (e) {
    var target = e.target;
    // get the value
    var resizedVal = parseInt(target.value);
    // console.log(`resized size= ${resizedVal} typeof(${typeof(resizedVal)})`);
    // console.log(`curr size= ${currSizeVal} typeof(${typeof(currSizeVal)})`);
    sizeInput.value = String(resizedVal);
    adjustInputText(sizeInput, 2);
    resizeArray(resizedVal);
    // console.log("curr size 'end'",currSizeVal,'\n\n');
});
// reshuffle button
function shuffle() {
    for (var i = 0; i < barContainer1.childElementCount; i++) {
        // this is fine (random index meaning random shuffle)
        var rand = (0, utils_1.getRandNum)(barContainer1.childElementCount);
        (0, utils_1.setRandHeight)(bar_List[rand]);
        // this is fine too (linear from 0 till n)
        // setRandHeight(barContainer1.children[i]);
        // both have the same purpose
    }
}
newArray.addEventListener("mousedown", function () {
    // console.log(newArray);
    var setInt = setInterval(shuffle, 50);
    newArray.addEventListener("mouseup", function () {
        clearTimeout(setInt);
    });
});
newArray.addEventListener("click", function () {
    shuffle();
});
// let the user custom the length of the array through input
sizeInput.addEventListener("click", function () {
    var maxValue = sizeRange.max;
    // console.log(sizeRange," clicked");
    sizeInput.addEventListener("input", function (e) {
        var target = e.target;
        if (target.value > maxValue) {
            sizeInput.value = maxValue;
            target.value = maxValue;
        }
        console.log(target.value);
        adjustInputText(target, 2);
        resizeArray(Number(target.value));
    }, false);
});
var checkBox_List = document.querySelectorAll("input[type='checkbox']");
// setting button <div class="more-setting">⚙️</div>
moreSetting.addEventListener("click", function () {
    var settingDisplay = document.querySelector(".setting-display");
    var exitBtn = settingDisplay.querySelector(".exit-btn");
    settingDisplay.style.display = "flex";
    moreSetting.classList.add("spin");
    exitBtn.addEventListener("click", function () {
        settingDisplay.style.display = "none";
        moreSetting.classList.remove("spin");
    });
    // settingDisplay.addEventListener("click", () => {
    //   settingDisplay.style.display = "none";
    //   moreSetting.classList.remove("spin");
    // });
    // checkBox_List[3] is the gap checkbox
    for (var i = 0; i < checkBox_List.length; i++) {
        checkBox_List[i].addEventListener("click", function (e) {
            var target = e.target;
            var classNamae = target.className;
            console.log(classNamae);
            if (classNamae === "gap") {
                if (target.checked === false) {
                    console.log("gap false");
                    barContainer1.style.columnGap = "0px";
                }
                else {
                    barContainer1.style.columnGap = "1px";
                }
            }
        });
    }
});
