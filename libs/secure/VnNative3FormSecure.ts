export interface Vnnative3formSecureInterface {
    data : string;
    trimTag() : string;
    out(): string;
}
export default class Vnnative3formSecure {
    data : string;
    constructor(inputData: string) { 
        this.data = this.trimTag(inputData);
    }
    trimTag(inputData : string) : string {
        inputData = inputData.replace(/<script>/g,'');
        inputData = inputData.replace(/<\/script>/g,'');
        return this.out(inputData);
    }
    out(inputData : string): string {
        return inputData;
    }
}