export interface VnNative3FormInputInterface {
    input: HTMLInputElement | null | undefined;
    subscribe(): HTMLInputElement | null | undefined;
    stringValue(): string;
    numberValue(): number;
}
export default class VnNative3FormInput implements VnNative3FormInputInterface {
    input: HTMLInputElement | null | undefined;
    constructor(input_id: string);
    subscribe(): HTMLInputElement | null | undefined;
    stringValue(): string;
    numberValue(): number;
}
