///<reference path='./defLoader.d.ts'/>

declare class CoreCache {
    private static host_available: boolean;
    private static _extensions: string[];
    private static _sharedConfigFiles: string[];
    private static _sharedLibFiles: string[];
    private static _sharedCoreControllersFiles: string[];
    private static _sharedCoreLibFiles: string[];
    private static _sharedCoreModelsFiles: string[];
    private static _sharedCoreServicesFiles: string[];
    private static _sharedDefFiles: string[];
    private static _sharedGlobalsFiles: string[];
    private static _sharedPublicFiles: string[];

    private static _shouldDoCache(): boolean;
    private static _cacheDone(callback?: any): void;
    private static _cacheFile(fileResponse: any, relativePathFromBase: string, callback?: any): void;
    private static _cacheFiles(files: string[], controller: string, method: string, relativePathFromBase: string, callback?: any);
    public static cacheFilesFromGameServer(callback: any);
}