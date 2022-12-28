const fs = require('fs');
import {parseHeader} from './src/header-parsing';

async function readGedcomFile(fileName:`${string}${'.GED' | '.ged' | 'Ged'}`, encoding:string='utf-8') {
    try {
        return await fs.promises.readFile(fileName, encoding);
    } catch (error) {
        console.error(error);
    }
}


parseHeader
if(require.main === module) { main(); }
async function main() {
    const rawGedcom = await readGedcomFile("555SAMPLE.GED");
    console.log(parseHeader(rawGedcom));
}