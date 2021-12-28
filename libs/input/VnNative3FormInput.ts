import VnNative3ConsoleCore from "vnnative3-console/dist/console";
import Vnnative3formSecure from "../secure/VnNative3FormSecure";

export interface VnNative3FormInputInterface {
    input: HTMLInputElement | null | undefined
    subscribe(): HTMLInputElement | null | undefined
    setData(data : string | number) : void 
    stringValue() : string 
    numberValue() : number
}

export default class VnNative3FormInput implements VnNative3FormInputInterface {
    input: HTMLInputElement | null | undefined
    constructor(input_id : string){
        try {
            this.input = document.getElementById(input_id) as HTMLInputElement;
        }catch(e : any) {
            (new VnNative3ConsoleCore).error(e.toString());
        }
    }
    subscribe(): HTMLInputElement | null | undefined { 
        return this.input;
    }
    setData(data : string | number) : void {
        this.input!.value = String(data);
    }
    stringValue() : string {
        try {
            return (new Vnnative3formSecure(this.input!.value)).data;
        }catch(e : any) {
            (new VnNative3ConsoleCore).error(e.toString());
            return "";
        }
    }
    numberValue() : number {
        try {
            return Number(this.input!.value);
        }catch(e : any) {
            (new VnNative3ConsoleCore).error(e.toString());
            return 0;
        }
    }
}