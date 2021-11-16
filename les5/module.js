import * as fs from 'fs/promises';

// get the data from the file 
let result = await fs.readFile("boardgames.json");
let data = JSON.parse(result);

// loop over the boardgames
for(let i in data){
    //create filename
   let filename = `${i}.json`
   //stringify the value
   let boardgame = JSON.stringify(data[i]);
   //save to file 
   await fs.writeFile(filename, boardgame);
// Be happy 
}




