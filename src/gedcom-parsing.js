"use strict";
exports.__esModule = true;
exports.parseGEDCOM = void 0;
var parsing_utils_1 = require("./parsing-utils");
function parseGEDCOM(rawGedcom) {
    var extractedHeaderInformation = (0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, 'head');
    var parsedGedcomHeader = (0, parsing_utils_1.gedcomToObject)(extractedHeaderInformation);
    var numOfIndividuals = (rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || []).length;
    for (var i = 0; i < numOfIndividuals; i++) {
        var tmp = (0, parsing_utils_1.gedcomToObject)((0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, "@I".concat(i, "@ INDI")));
        console.log("".concat(Object.keys(tmp["@I".concat(i, "@")]['NAME'])[0], " | ").concat(Object.keys(tmp["@I".concat(i, "@")]['SEX'])[0]));
    }
}
exports.parseGEDCOM = parseGEDCOM;
