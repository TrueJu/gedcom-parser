"use strict";
exports.__esModule = true;
exports.parseHeader = void 0;
var parsing_utils_1 = require("./parsing-utils");
var commonPatterns = {
    headerStartEnd: ["0 HEAD", "\r\n0 @I1@ INDI"]
};
function extractHeader(rawGedcom) {
    var headerInformationStartIndex = rawGedcom.indexOf(commonPatterns.headerStartEnd[0]);
    var headerInformationEndIndex = rawGedcom.indexOf(commonPatterns.headerStartEnd[1]);
    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}
function arrayAssocLevel(extractedHeader) {
    var headerLines = (0, parsing_utils_1.stringLinesToArray)(extractedHeader);
    var headerEntries = {};
    for (var i = 0; i < headerLines.length; i++) {
        if (headerLines[i][0] == '0') {
            headerEntries[headerLines[i].slice(2, headerLines[i].length)] = {};
        }
    }
    console.log(headerEntries);
}
function parseHeader(rawGedcom) {
    var extractedHeaderInformation = extractHeader(rawGedcom);
    arrayAssocLevel(extractedHeaderInformation);
}
exports.parseHeader = parseHeader;
