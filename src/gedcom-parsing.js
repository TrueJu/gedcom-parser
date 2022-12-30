"use strict";
exports.__esModule = true;
exports.parseGEDCOM = void 0;
var parsing_utils_1 = require("./parsing-utils");
function parseGEDCOM(rawGedcom) {
    var extractedHeaderInformation = (0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, 'head');
    var parsedGedcomHeader = (0, parsing_utils_1.gedcomToObject)(extractedHeaderInformation);
    var individualsTopLevels = rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || []; //INDI tag in one array
    var numOfIndividuals = (individualsTopLevels || []).length; //Amount of INDI tags
    var individualsStart = parseInt(individualsTopLevels[0].split('@')[1].slice(1)); //Starting number for INDI tags - commonly 0 or 1
    for (var i = individualsStart; i < numOfIndividuals + individualsStart; i++) {
        var tmp = (0, parsing_utils_1.gedcomToObject)((0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, "@I".concat(i, "@ INDI")));
        console.log("".concat(Object.keys(tmp["@I".concat(i, "@")]['NAME'])[0], " | ").concat(Object.keys(tmp["@I".concat(i, "@")]['SEX'])[0]));
    }
}
exports.parseGEDCOM = parseGEDCOM;
