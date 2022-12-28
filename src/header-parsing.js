"use strict";
exports.__esModule = true;
exports.parseHeader = void 0;
var commonPatterns = {
    headerStartEnd: ["0 HEAD", "\n0 @I1@ INDI"]
};
function extractHeader(rawGedcom) {
    return rawGedcom.slice(rawGedcom.indexOf(commonPatterns.headerStartEnd[0]), rawGedcom.indexOf(commonPatterns.headerStartEnd[1]));
}
function parseHeader(rawGedcom) {
    return extractHeader(rawGedcom);
}
exports.parseHeader = parseHeader;
