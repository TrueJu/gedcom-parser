import {stringLinesToArray} from './parsing-utils';

const commonPatterns = {
    headerStartEnd: ["0 HEAD", "\r\n0 @I1@ INDI"]
}

function extractHeader(rawGedcom:string) {
    const headerInformationStartIndex:number = rawGedcom.indexOf(commonPatterns.headerStartEnd[0]);
    const headerInformationEndIndex:number = rawGedcom.indexOf(commonPatterns.headerStartEnd[1]);

    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}
function arrayAssocLevel(extractedHeader:string) {
    const headerLines:Array<string> = stringLinesToArray(extractedHeader);
    const headerEntries:Object = {};

    for(let i=0;i<headerLines.length;i++) {
        if(headerLines[i][0] == '0') {
            headerEntries[headerLines[i].slice(2, headerLines[i].length)] = {};
        } else if(headerLines[i][0] == '1') {
            headerEntries[headerLines[i].slice(2, headerLines[i].length)] = {};
        }
    }

    console.log(headerEntries)
}

export function parseHeader(rawGedcom:string) {
    const extractedHeaderInformation = extractHeader(rawGedcom);

    arrayAssocLevel(extractedHeaderInformation);
}