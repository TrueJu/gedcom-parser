"use strict";
exports.__esModule = true;
exports.parseHeader = void 0;
var parsing_utils_1 = require("./parsing-utils");
var commonPatterns = {
    headerStartEnd: ["0 HEAD", "\r\n0 "]
};
function arrayAssocLevel(extractedHeader) {
    var headerLines = (0, parsing_utils_1.stringLinesToArray)(extractedHeader);
    var repeatingLevelsCount = (0, parsing_utils_1.getLevelOrderRepetition)(headerLines);
    var deepestLevel = 0;
    for (var i = 0; i < headerLines.length; i++) {
        var currentLevel = parseInt(headerLines[i][0]);
        deepestLevel = deepestLevel > currentLevel ? deepestLevel : currentLevel;
    }
    var levels = [];
    for (var i = 0; i < deepestLevel + 1; i++) {
        levels.push([]);
    }
    for (var i = 0; i < headerLines.length; i++) {
        console.log(i);
        levels[parseInt(headerLines[i][0])].push(headerLines[i].slice(2, headerLines[i].length));
    }
    console.log(levels);
}
function parseHeader(rawGedcom) {
    var extractedHeaderInformation = (0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, 'head');
    arrayAssocLevel(extractedHeaderInformation);
}
exports.parseHeader = parseHeader;
