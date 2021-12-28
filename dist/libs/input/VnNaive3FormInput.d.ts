export interface VnNaive3FormInputInterface {
    input: HTMLElement | null;
    effect(input_id: string): void;
    subscribe(): HTMLElement | null;
    stringValue(): string | null;
    numberValue(): number | null;
}
export default class VnNaive3FormInput implements VnNaive3FormInputInterface {
    input: HTMLElement | null;
    constructor(input_id: string);
    effect(input_id: string): void;
    subscribe(): HTMLElement | null;
    stringValue(): string | null;
    numberValue(): number | null;
}
