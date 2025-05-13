const string =["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const filteredStrings =[];
 for (let i = 0; i < string.length; i++) {
    const word = string[i];
    if (word.length >=5 && word.includes("a")) {
        filteredStrings.push(word);
    }
    console.log(filteredStrings);

 }
