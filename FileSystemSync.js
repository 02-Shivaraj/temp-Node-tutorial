const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

// This will override the content in the result-sync.txt file
writeFileSync('./content/result-sync.txt', `This is the result of file1 and file2: ${first},${second}`);

// Inorder to append to the content that already exist in the result-sync file
writeFileSync('./content/result-sync.txt', `This is the result of file1 and file2: ${first},${second}`,{flag:'a'});

console.log(writeFileSync)