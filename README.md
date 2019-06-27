A JavaScript porting of [ojichat](https://github.com/greymd/ojichat).

## How to use

### CLI

```sh
$ yarn add ojichatjs

$ node_modules/.bin/ojichatjs -h
Usage: ojichatjs [options]

Options:
  -v, --version              output the version number
  -e, --emojinum <emojinum>  EmojiNum
  -h, --help                 output usage information

$ node_modules/.bin/ojichatjs
ｵｼﾞｻﾝはシュリちゃん一筋だよ😴(＃￣З￣)ゆっくり、身体休めてね😄😃✋💕(^з<)😚オヤスミナサイ💤🛌

$ node_modules/.bin/ojichatjs -e 1
すみえちゃん、オハヨー❗すみえちゃんにとって素敵な1日になりますように(^з<)😘

$ node_modules/.bin/ojichatjs -e 1 kaiba
風邪ひかないようにね（笑）ボクはkaibaチャンの味方だからね💕(^з<)
```

### JavaScript

```JavaScript
import * as ojichat from "ojichat.js";

// simple
console.log(new ojichat.Generator().getMessage());
// with target name
console.log(new ojichat.Generator("kaiba").getMessage());
// with target name and emoji number
console.log(new ojichat.Generator("kaiba", 1).getMessage());
```

## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## License
MIT

