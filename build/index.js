"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReder_1 = require("./CsvFileReder");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReder_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
