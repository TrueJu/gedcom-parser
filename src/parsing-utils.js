"use strict";
exports.__esModule = true;
exports.getEntryByTopLevelName = exports.gedcomToObject = exports.stringLinesToArray = void 0;
function stringLinesToArray(stringData) {
    return stringData.split(/\r?\n/);
}
exports.stringLinesToArray = stringLinesToArray;
function gedcomToObject(extractedHeader) {
    var headerLines = stringLinesToArray(extractedHeader);
    var tmpGedcomObj = {};
    var previousParentKeys = [];
    for (var i = 0; i < headerLines.length; i++) {
        var parts = headerLines[i].trim().split(' ');
        var level = parseInt(parts[0]);
        var key = parts[1];
        var value = parts.slice(2).join(' ');
        var currentParent = tmpGedcomObj;
        for (var j = 0; j < level - 1; j++) {
            currentParent = currentParent[previousParentKeys[j]];
        }
        if (value.length > 0) {
            currentParent[key] = {};
            currentParent[key][value] = {};
        }
        else {
            currentParent[key] = {};
        }
        previousParentKeys[level - 1] = key;
    }
    //Remove level 0 from inside the object and make it the parent key
    var levelZeroName = Object.keys(tmpGedcomObj)[0];
    var gedcomObject = {};
    delete tmpGedcomObj["".concat(levelZeroName)];
    gedcomObject["".concat(levelZeroName)] = tmpGedcomObj;
    return gedcomObject;
}
exports.gedcomToObject = gedcomToObject;
function getEntryByTopLevelName(rawGedcom, topLevelName) {
    var headerInformationStartIndex = rawGedcom.indexOf("0 ".concat(topLevelName.toUpperCase()));
    var headerInformationEndIndex = rawGedcom.indexOf('\r\n0 ');
    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}
exports.getEntryByTopLevelName = getEntryByTopLevelName;
