const fs = require('fs');
import {parseGEDCOM} from './src/gedcom-parsing';

async function readGedcomFile(fileName:`${string}${'.GED' | '.ged' | 'Ged'}`, encoding:string='utf-8') {
    try {
        return await fs.promises.readFile(fileName, encoding);
    } catch (error) {
        console.error(error);
    }
}

if(require.main === module) { main(); }
async function main() {
    const rawGedcom = await readGedcomFile("engBRITandQUEN.ged");
    
    parseGEDCOM(rawGedcom);
}