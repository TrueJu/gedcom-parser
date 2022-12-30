export function stringLinesToArray(stringData:string) {
    return stringData.split(/\r?\n/);
}
export function gedcomToObject(rawGEDCOM:string) {
    const dataLines:Array<string> = stringLinesToArray(rawGEDCOM);

    let tmpGedcomObj = {};
    let previousParentKeys:any = [];
    
    for(let i=0;i<dataLines.length;i++) {
        let parts = dataLines[i].trim().split(' ');
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
    const dataInformationStartIndex:number = rawGedcom.indexOf(`0 ${topLevelName.toUpperCase()}`);
    rawGedcom = rawGedcom.slice(dataInformationStartIndex)
    const dataInformationEndIndex:number = rawGedcom.indexOf('\r\n0 ');

    return rawGedcom.slice(0, dataInformationEndIndex);
}