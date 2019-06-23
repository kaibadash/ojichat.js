import * as _ from "underscore";
import { EmojiType } from "./EmojiType";

export class EmojiTags {
    public static selectTags(tag: EmojiType): string[] {
        switch (tag) {
            case EmojiType.EmojiPos:
                return [
                    "😃♥ ",
                    "😃☀ ",
                    "😃",
                    "😃✋",
                    "❗",
                    "😄",
                    "😆",
                    "😚",
                    "😘",
                    "💕",
                    "💗",
                    "😍",
                    "🎵",
                    "(^_^)",
                    "(^o^)",
                    "(^з<)",
                    "（笑）",
                ];
            case EmojiType.EmojiNeg:
                return [
                    "💦",
                    "💔",
                    "😱",
                    "😰",
                    "(◎ ＿◎;)",
                    "(T_T)",
                    "^^;",
                    "(^_^;",
                    "(・_・;",
                    "(￣Д￣；；",
                    "(^▽^;)",
                    "(-_-;)",
                ];
            case EmojiType.EmojiNeut:
                return [
                    "💤",
                    "😴",
                    "🙂",
                    "🤑",
                    "✋",
                    "😪",
                    "🛌",
                    "😎",
                    "😤",
                    "（￣▽￣）",
                    "(＃￣З￣)",
                    "(^^;;",
                ];
            case EmojiType.EmojiAsk:
                return [
                    "⁉",
                    "❓",
                    "❗❓",
                    "🤔",
                    "😜⁉️",
                    "✋❓",
                    "（￣ー￣?）",
                ];
        }
        return [];
    }
}