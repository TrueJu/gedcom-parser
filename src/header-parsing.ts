import {stringLinesToArray, getLevelOrderRepetition, getEntryByTopLevelName} from './parsing-utils';

const commonPatterns = {
    headerStartEnd: ["0 HEAD", "\r\n0 "]
}

function arrayAssocLevel(extractedHeader:string) {
    const headerLines:Array<string> = stringLinesToArray(extractedHeader);
    const repeatingLevelsCount = getLevelOrderRepetition(headerLines);
    let deepestLevel = 0;

    for(let i=0;i<headerLines.length;i++) {
        let currentLevel = parseInt(headerLines[i][0]);
        deepestLevel = deepestLevel > currentLevel ? deepestLevel : currentLevel;
    }


    const levels:Array<any> = [];

    for(let i=0;i<deepestLevel+1;i++) {
        levels.push([]);
    }

    for(let i=0;i<headerLines.length;i++) {
        console.log(i);
        levels[parseInt(headerLines[i][0])].push(headerLines[i].slice(2, headerLines[i].length));
    }

    console.log(levels);
}

export function parseHeader(rawGedcom:string) {
    const extractedHeaderInformation = getEntryByTopLevelName(rawGedcom, 'head');

    arrayAssocLevel(extractedHeaderInformation);
}