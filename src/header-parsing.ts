import {gedcomToObject, getEntryByTopLevelName} from './parsing-utils';

export function parseHeader(rawGedcom:string) {
    const extractedHeaderInformation = getEntryByTopLevelName(rawGedcom, 'head');
    const parsedGedcomHeader = gedcomToObject(extractedHeaderInformation);
    const numOfIndividuals = (rawGedcom.match(/0 @I[\d*|.*]@ INDI/g) || []).length;
}