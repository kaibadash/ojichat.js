import * as _ from "underscore";
import { OnaraMessages } from "./OnaraMessages";
import { Tags } from "./Tags";
import { OjisanEmotion } from "./OjisanEmotion";
import { TagType } from "./TagType";
import { EmojiType } from "./EmojiType";
import { EmojiTags } from "./EmojiTag";

export class OnaraPattern {
    constructor(private pattern: OjisanEmotion[]) {
    }

    public getMessage(target: string, emojiNum: number): string {
        let template = "";
        this.pattern.forEach((emotion) => {
            template += OnaraMessages.selectTemplate(emotion);
        });

        let result = template;
        result = this.convertTags(result);
        result = this.convertEmoji(result, emojiNum);
        result = this.convertTarget(result, target);

        return result;
    }

    private convertTags(result: string): string {
        Object.values(TagType).forEach((tagType) => {
            let count = result.split(`{${tagType}}`).length - 1;
            _.times(count, (i) => {
                result = result.replace(
                    `{${tagType}}`,
                    _.shuffle<string>(Tags.selectTags(tagType as TagType))[0]
                );
            });
        });
        return result;
    }

    private convertEmoji(result: string, emojiNum: number): string {
        Object.values(EmojiType).forEach((emojiType) => {
            let count = result.split(`{${emojiType}}`).length - 1;
            _.times(count, (i) => {
                let emojiList = _.shuffle<string>(EmojiTags.selectTags(emojiType as EmojiType));
                let n = _.random(emojiNum);
                if (n > emojiList.length) n = emojiList.length - 1;
                let content = emojiList.slice(0, n + 1).join("");
                _.shuffle<string>(EmojiTags.selectTags(emojiType as EmojiType))
                result = result.replace(`{${emojiType}}`, content);
            })
        });
        return result;
    }

    private convertTarget(result: string, target: string): string {
        return result.replace(/{TARGET_NAME}/g, target);
    }
}