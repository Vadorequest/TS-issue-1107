declare class MessageLang {
    public static FIELD_NAME_MESSAGE: string;
    public static FIELD_NAME_ARGUMENTS: string;

    private _message: any;
    private _args: any;

    constructor(message: string, variables?: any);
    public getMessage(options: any, variables: any): string;
    public setMessage(message: string): void;
    public _getMessage(): any;
    public getVariables(): Array<any>;
    public setVariables(variables: any);
    public isComplexMessage(): boolean;
    public toSimpleObject(): any;
    public static create(message: string, args: any): MessageLang;
}