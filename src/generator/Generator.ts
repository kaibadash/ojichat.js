import { Onara } from "../pattern/Onara";
import { female } from "node-gimei";
import * as _ from 'underscore';

export class Generator {
    constructor(private target = "", private emojiNum = 4, private punctuationLevel = 0) {
        if (this.target == null || this.target == "") {
            this.target = this.getRandomFirstName();
        }
    }

    public getMessage() {
        return new Onara().getMessage(this.target, this.emojiNum, this.punctuationLevel);
    }

    // gimei から女性の名前を無作為に選定
    private getRandomFirstName(): string {
        let name = female();
        switch (_.random(2)) {
            case 0:
                return name.first().kanji();
            case 1:
                return name.first().katakana();
        }
        return name.first().hiragana();
    }
}