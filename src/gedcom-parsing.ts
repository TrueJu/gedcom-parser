import {gedcomToObject, getEntryByTopLevelName} from './parsing-utils';

export function parseGEDCOM(rawGedcom:string) {
    const extractedHeaderInformation = getEntryByTopLevelName(rawGedcom, 'head');
    const parsedGedcomHeader = gedcomToObject(extractedHeaderInformation);
    const individualsTopLevels:Array<string> = rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || [];  //INDI tag in one array
    const numOfIndividuals:number = (individualsTopLevels || []).length;    //Amount of INDI tags
    const individualsStart:number = parseInt(individualsTopLevels[0].split('@')[1].slice(1));   //Starting number for INDI tags - commonly 0 or 1

    for(let i=individualsStart;i<numOfIndividuals + individualsStart;i++) {
        let tmp = gedcomToObject(getEntryByTopLevelName(rawGedcom, `@I${i}@ INDI`));
        console.log(`${Object.keys(tmp[`@I${i}@`]['NAME'])[0]} | ${Object.keys(tmp[`@I${i}@`]['SEX'])[0]}`);
    }
}