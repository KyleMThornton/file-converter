const { exec } = require('child_process');
const glob = require('glob');

//Directory containing files that need to be converted
const root_folder = 'C:/YOUR INFO HERE';

//Directory of LegacyFileConverter which can be downloaded at the link below
//http://www.columbia.edu/~em36/legacyfileconverter.html
const legacyFileConverter = "C:/YOUR INFO HERE"

const files = glob.sync(root_folder + '/**/**.SAM')

let commandArray = []

for (x in files) {
    commandArray.push(`\"${legacyFileConverter}\" \"${files[x]}\" /silent`)
}

const convert = (arr,i) => {
    setTimeout(() => {
        exec(arr[i]);
        console.log(`Running ${arr[i]}...`);
    }, 10000*i);
}

for (x in commandArray) {
    convert(commandArray,x)
}