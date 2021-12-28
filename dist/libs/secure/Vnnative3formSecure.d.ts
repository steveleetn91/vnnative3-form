export interface Vnnative3formSecureInterface {
    data: string;
    trimTag(): string;
    out(): string;
}
export default class Vnnative3formSecure {
    data: string;
    constructor(inputData: string);
    trimTag(inputData: string): string;
    out(inputData: string): string;
}
