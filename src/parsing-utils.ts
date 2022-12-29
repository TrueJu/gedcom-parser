export function stringLinesToArray(stringData:string) {
    return stringData.split(/\r?\n/);
}
export function getLevelOrderRepetition(lines:Array<string>) {
    const repeatingLevelsCount:Array<number> = [];
    let previousLevel = '0';
    let tmpLevelCount = 0;

    for(let i=0;i<lines.length;i++) {
        if(previousLevel == lines[i][0]) {
            tmpLevelCount++
        } else {
            repeatingLevelsCount.push(tmpLevelCount);
            tmpLevelCount = 1;
        }

        if(i == lines.length-1) {
            repeatingLevelsCount.push(tmpLevelCount);
        }

        previousLevel = lines[i][0];
    }

    return repeatingLevelsCount;
}
export function getEntryByTopLevelName(rawGedcom:string, topLevelName:string) {
    const headerInformationStartIndex:number = rawGedcom.indexOf(`0 ${topLevelName.toUpperCase()}`);
    const headerInformationEndIndex:number = rawGedcom.indexOf('\r\n0 ');

    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}