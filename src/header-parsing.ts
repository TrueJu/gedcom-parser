const commonPatterns = {
    headerStartEnd: ["0 HEAD", "\n0 @I1@ INDI"]
}

function extractHeader(rawGedcom:string) {
    return rawGedcom.slice(rawGedcom.indexOf(commonPatterns.headerStartEnd[0]),rawGedcom.indexOf(commonPatterns.headerStartEnd[1]));
}

export function parseHeader(rawGedcom:string) {
    return extractHeader(rawGedcom);
}