#! /usr/bin/env node
import inquirer from "inquirer";
const user_ans = await inquirer.prompt([{
        type: "input",
        name: "Sentence",
        message: "Please enter your sentence to count word:",
    }]);
let word_count = user_ans.Sentence.trim().split(" ").length;
console.log(`Your sentence has ${word_count} words.`);
