export function stringLinesToArray(stringData:string) {
    return stringData.split(/\r?\n/);
}
export function gedcomToObject(extractedHeader:string) {
    const headerLines:Array<string> = stringLinesToArray(extractedHeader);

    let tmpGedcomObj = {};
    let previousParentKeys:any = [];
    
    for(let i=0;i<headerLines.length;i++) {
        let parts = headerLines[i].trim().split(' ');
        let level = parseInt(parts[0]);
        let key = parts[1];
        let value = parts.slice(2).join(' ');
    
        let currentParent = tmpGedcomObj;
        for(let j=0;j<level-1;j++) {
            currentParent = currentParent[previousParentKeys[j]];
        }
    
        if(value.length > 0) {
            currentParent[key] = {};
            currentParent[key][value] = {};
        } else {
            currentParent[key] = {};
        }
    
        previousParentKeys[level - 1] = key;
    }
    
    //Remove level 0 from inside the object and make it the parent key
    let levelZeroName = Object.keys(tmpGedcomObj)[0];
    let gedcomObject = {};

    delete tmpGedcomObj[`${levelZeroName}`];
    gedcomObject[`${levelZeroName}`] = tmpGedcomObj;

    return gedcomObject;
}
export function getEntryByTopLevelName(rawGedcom:string, topLevelName:string) {
    const headerInformationStartIndex:number = rawGedcom.indexOf(`0 ${topLevelName.toUpperCase()}`);
    const headerInformationEndIndex:number = rawGedcom.indexOf('\r\n0 ');

    return rawGedcom.slice(headerInformationStartIndex, headerInformationEndIndex);
}