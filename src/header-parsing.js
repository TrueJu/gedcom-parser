"use strict";
exports.__esModule = true;
exports.parseHeader = void 0;
var parsing_utils_1 = require("./parsing-utils");
function parseHeader(rawGedcom) {
    var extractedHeaderInformation = (0, parsing_utils_1.getEntryByTopLevelName)(rawGedcom, 'head');
    var parsedGedcomHeader = (0, parsing_utils_1.gedcomToObject)(extractedHeaderInformation);
    var numOfIndividuals = (rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || []).length;
    console.log(numOfIndividuals);
}
exports.parseHeader = parseHeader;
