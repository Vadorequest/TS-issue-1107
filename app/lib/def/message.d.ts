///<reference path='./messageLang.d.ts'/>

interface IMessage{
    isCustomMessage: boolean;
    getMessage(options?: any, variables?: any): string;
    getAllMessages(options?: any, variables?: any, separator?: string): string;
    getData(): any;
    getStatus(): boolean;
    getType(): string;
    toJSON(): string;
    toObject(): any;
    _toSimpleObject(): any;
}

declare class Message implements IMessage{
    public static FIELD_NAME_MESSAGE: string;
    public static FIELD_NAME_DATA: string;
    public static FIELD_NAME_STATUS: string
    public static FIELD_NAME_TYPE_MESSAGE: string;
    public static TYPE_MESSAGE: string;
    public static EXCEPTION_BAD_JSON_TYPE: string;

    public _message: MessageLang;
    public _data: any;
    public _status: boolean;
    public _typeMessage: string;
    public isCustomMessage: boolean;

    constructor(message?: any, data?: any, status?: boolean, typeMessage?);

    public getMessage(options?: any, variables?: any): string;
    public getAllMessages(options?: any, variables?: any, separator?: string): string;
    public hasMessage(): boolean;
    public getMessageLang(): MessageLang;
    public setMessageLang(message: any, variables?: any): Message;
    public getData(): any;
    public getDataByKey(key: string, defaultValue?: any): any;
    public keyExists(key: string): boolean;
    public addData(key: string, value: any): void;
    public getStatus(): boolean;
    public getType(): string;
    public setType(typeMessage: string): Message;
    public getErrors(index?: number, returnMessageInstance?: boolean): any;
    public countErrors(): number;
    public toJSON(): string;
    public toObject(): any;
    public _toSimpleObject(): any;

    public static fromJSON(json): Message;
    public static create(json): any;
}