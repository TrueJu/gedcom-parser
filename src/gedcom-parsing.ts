import {gedcomToObject, getEntryByTopLevelName} from './parsing-utils';

export function parseGEDCOM(rawGedcom:string) {
    const extractedHeaderInformation = getEntryByTopLevelName(rawGedcom, 'head');
    const parsedGedcomHeader = gedcomToObject(extractedHeaderInformation);
    const numOfIndividuals:number = (rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || []).length;


    for(let i=0;i<numOfIndividuals;i++) {
        let tmp = gedcomToObject(getEntryByTopLevelName(rawGedcom, `@I${i}@ INDI`));
        console.log(`${Object.keys(tmp[`@I${i}@`]['NAME'])[0]} | ${Object.keys(tmp[`@I${i}@`]['SEX'])[0]}`);
    }
}