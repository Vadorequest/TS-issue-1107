///<reference path='./message.d.ts'/>

declare class Lang{
    private _config: any;
    private _languages: any;
    private _userDefaultLang: string;
    private _userLangs: any;
    private _messageKey: string;
    private _argsKey: string;
    private _prefixMessageCode: string;
    private _parse: boolean;

    private _FIELD_CONTENT_LANG: string;
    private _FIELD_KEY_LANG: string;
    private FIELD_NAME_MESSAGE: string;
    private FIELD_NAME_ARGS: string;
    private PATTERN_ARGS: string;

    public static FIELD_NAME_SINGLETON;

    constructor(serverConfig: any, languages: any, defaultLanguage: any, parse?: boolean);
    public addLanguage(lang: string, language: any, callback?: any): any;
    public get(message: string, options?: any, variables?: any): any;
    public getLang(): string;
    public getLangs(): Array<string>;
    public getForeignLangs(): Array<string>;
    public getLanguages(): any;

    private _initialize(configServerPublic: any, languagesConfigFile: any, defaultLanguageFile: any);
    private _languageIsSet(lang: string): boolean;
    private _checkMessageFormat(code: string): boolean;
    private _getSentence(id: string, options: any, args: any): Message;
    private _replaceArgsInText(message: any, args: any, lang: string): string;
    private _replaceSubKeys(self: Lang, sentence, args, regex, array, lang): string;

    static waitForInstance(callback);
    static waitForInstanceSynch();
}