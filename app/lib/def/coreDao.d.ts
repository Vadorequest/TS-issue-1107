///<reference path='./defLoader.d.ts'/>

declare class CoreDao {
    private static DEBUG: boolean;
    private static DEBUG_TAG: string;

    private static _suffixModelName: string;
    private static _defaultExtensionModelFile: string;
    private static _modelsDirectory: string;
    private static _moduleModels: any;
    private static _cacheModels: any;

    public static getModel(modelName: string, extension: string): any;
    public static getSchema(modelName: string, extension: string): any;
    public static setModelDirectory(modelDirectory: string);

    private static _cleanModelName(modelName: string): string;
    private static _getModelFilename(modelName: string, extension: string): string;
    private static _getModelFullName(modelName: string): string;
    private static _getModelIfExists(modelName: string, extension: string): CoreModels.IModel;
    private static _isModelInCache(modelName: string): boolean;
    private static _getModelFromCache(modelName: string): CoreModels.IModel;
    private static _addModelInCache(modelName: string, Model: CoreModels.IModel): void;
    private static _log(message: any): void;
}