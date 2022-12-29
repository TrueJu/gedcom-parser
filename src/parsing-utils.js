"use strict";
exports.__esModule = true;
exports.getEntryByTopLevelName = exports.getLevelOrderRepetition = exports.stringLinesToArray = void 0;
function stringLinesToArray(stringData) {
    return stringData.split(/\r?\n/);
}
exports.stringLinesToArray = stringLinesToArray;
function getLevelOrderRepetition(lines) {
    var repeatingLevelsCount = [];
    var previousLevel = '0';
    var tmpLevelCount = 0;
    for (var i = 0; i < lines.length; i++) {
        if (previousLevel == lines[i][0]) {
            tmpLevelCount++;
        }
        else {
            repeatingLevelsCount.push(tmpLevelCount);
            tmpLevelCount = 1;
        }
        if (i == lines.length - 1) {
            repeatingLevelsCount.push(tmpLevelCount);
        }
        previousLevel = lines[i][0];
    }
    return repeatingLevelsCount;
}
exports.getLevelOrderRepetition = getLevelOrderRepetition;
function getEntryByTopLevelName(rawGedcom, topLevelName) {
    var headerInformationStartIndex = rawGedcom.indexOf("0 ".concat(topLevelName.toUpperCase()));
    var headerInformationEndIndex = rawGedcom.indexOf('\r\n0 ');
    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}
exports.getEntryByTopLevelName = getEntryByTopLevelName;
