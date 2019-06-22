export default class Sample {
    fullName: string;
    constructor(public firstName: string) {
        this.fullName = firstName;
    }
    public greet(): string {
        return "Hello, " + this.fullName;
    }
}
