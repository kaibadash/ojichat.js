import { Onara } from "../pattern/Onara";

export class Generator {
    constructor(private target = "", private emojiNum = 4, private punctuationLevel = 0) {
        if (target == "") {
            target = "kaiba";
        }
    }

    public getMessage() {
        return new Onara().getMessage(this.target, this.emojiNum, this.punctuationLevel);
    }
}