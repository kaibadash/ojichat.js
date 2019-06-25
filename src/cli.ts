#!/usr/bin/env node
import { Generator } from "./generator/Generator";
import * as commander from "commander"

commander
    .version("0.0.3", "-v, --version")
    .option("-e, --emojinum <emojinum>", "EmojiNum")
    .parse(process.argv);

const emojiNum: number = parseInt(commander.emojinum);
const target: string = commander.args.pop();

let ojichat = new Generator(target, isNaN(emojiNum) ? 4 : emojiNum);
console.log(ojichat.getMessage());
