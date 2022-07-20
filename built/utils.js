"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRandHeight = exports.getRandNum = void 0;
/**
 * get a random number such that less than the interval
 */
function getRandNum(interval) {
    return Math.floor(Math.random() * interval);
}
exports.getRandNum = getRandNum;
/**
 *
 */
function setRandHeight(element) {
    var rand = getRandNum(500);
    if (rand < 30)
        rand = (30 - rand) + 30;
    element.style.height = rand + "px";
}
exports.setRandHeight = setRandHeight;
