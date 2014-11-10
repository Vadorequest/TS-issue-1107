///<reference path='./messageLang.d.ts'/>
///<reference path='./message.d.ts'/>

declare class ValidatorMessage extends Message implements IMessage{
    public static FIELD_NAME_TYPE_MESSAGE: string;
    public static TYPE_MESSAGE: string;

    public _typeMessage: string;
    public _errors: any;

    constructor(errors?: any, data?: any, status?: boolean);

    // We describe only the methods that are specific to this class, not the ones from the parent.
    public addError(key: string, message?: any, args?: any);
    public getErrors(index?: number, returnMessageInstance?: boolean): any;
    public countErrors(): number;
}

declare class ValidatorErrorMessageLang extends MessageLang{
    public static FIELD_NAME_KEY: string;
    public static FIELD_NAME_SUB_MESSAGE: string;
    public static FIELD_NAME_SUB_ARGUMENTS: string;

    private _key: string;

    constructor(message: string, args: any, key: string);

    public getKey(): string;
}