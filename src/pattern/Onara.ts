import * as _ from "underscore";
import { OnaraPattern } from "./OnaraPattern";
import { OjisanEmotion } from "./OjisanEmotion";

// Onara ... Ojisan NArikiri Randomized Algorithm: おじさんなりきり乱択アルゴリズム
// おじさんの感情表現の順番を表す。
// 近年の研究によりおじさんなりきるための効果的なアルゴリズムが提唱されている。
export class Onara {
    public getMessage(target: string, emojiNum = 4): string {
        let pattern: OnaraPattern = this.selectPattern();
        return pattern.getMessage(target, emojiNum);
    }

    private selectPattern(): OnaraPattern {
        let patterns: OnaraPattern[] = [
            // GQS パターン
            new OnaraPattern([OjisanEmotion.Greeting, OjisanEmotion.Question, OjisanEmotion.Sympathy]),
            // GR パターン
            new OnaraPattern([OjisanEmotion.Greeting, OjisanEmotion.Reporting]),
            // GC パターン
            new OnaraPattern([OjisanEmotion.Greeting, OjisanEmotion.Cheering]),
            // GQI パターン
            new OnaraPattern([OjisanEmotion.Greeting, OjisanEmotion.Question, OjisanEmotion.Invitation]),
            // PA パターン
            new OnaraPattern([OjisanEmotion.Praising, OjisanEmotion.Admiration]),
            // S パターン (短いので SS にする)
            new OnaraPattern([OjisanEmotion.Sympathy, OjisanEmotion.Sympathy])
        ];
        return _.shuffle<OnaraPattern>(patterns)[0];
    }
}