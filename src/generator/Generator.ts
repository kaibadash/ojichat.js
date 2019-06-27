import { Onara } from "../pattern/Onara";
import * as _ from "underscore";
import { FemaleGimei } from './FemaleGimei';

export class Generator {
    constructor(private target = "", private emojiNum = 3) {
        if (this.target == null || this.target == "") {
            this.target = this.getRandomFirstName() + this.getRandomNameSuffix();
        } else {
            this.target += this.getRandomNameSuffix();
        }
    }

    public getMessage() {
        return new Onara().getMessage(this.target, this.emojiNum);
    }

    // gimei から女性の名前を無作為に選定
    private getRandomFirstName(): string {
        switch (_.random(2)) {
            case 0:
                return FemaleGimei.kanji();
            case 1:
                return FemaleGimei.katakana();
        }
        return FemaleGimei.hiragana();
    }

    // 「ちゃん」「チャン」などをランダムに返す
    private getRandomNameSuffix(): string {
        let n = _.random(100);
        if (n < 5) {
            // たまに呼び捨てにするおじさん
            return ""
        }
        if (n < 20) {
            // 時に「◯◯チャン」とカタカナにしてくるのも、おじさんの常套手段だ。
            return "チャン"
        }
        if (n < 40) {
            // "「〇〇チャン」をさらに半角で表現する、そんなおじさんもいる"
            return "ﾁｬﾝ";
        }
        return "ちゃん";
    }
}
