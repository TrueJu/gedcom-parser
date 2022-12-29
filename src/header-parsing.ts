import {gedcomToObject, getEntryByTopLevelName} from './parsing-utils';

export function parseHeader(rawGedcom:string) {
    const extractedHeaderInformation = getEntryByTopLevelName(rawGedcom, 'head');
    const parsedGedcomHeader = gedcomToObject(extractedHeaderInformation);

    console.log(parsedGedcomHeader);
}