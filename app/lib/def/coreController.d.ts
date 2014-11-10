///<reference path='./defLoader.d.ts'/>

declare module CoreControllers {
    export class Controller {
        private static _defaultExportedMethods: any;
        private static _config: any;

        public static exportedMethods: any;
        public static theme: string;
        public static layout: string;

        public static super(req, res, callback, options: any);
        public static exports(child?: any): any;
        public static renderView(req, res, options: any, view: any): any;
        public static renderViewBackoffice(req, res, options: any, view: any): any;

        public static index(req, res, callback, options: any);
        public static show(req, res, callback, options: any);
        public static new(req, res, callback, options: any);
        public static create(req, res, callback, options: any);
        public static edit(req, res, callback, options: any);
        public static update(req, res, callback, options: any);
        public static destroy(req, res, callback, options: any);

        public static __beforeEach(req, res, callback, options: any);
        public static __beforeIndex(req, res, callback, options: any);
        public static __beforeShow(req, res, callback, options: any);
        public static __beforeNew(req, res, callback, options: any);
        public static __beforeCreate(req, res, callback, options: any);
        public static __beforeEdit(req, res, callback, options: any);
        public static __beforeUpdate(req, res, callback, options: any);
        public static __beforeDestroy(req, res, callback, options: any);

        public static _getCurrentController(options: any): any;
        public static _cleanMethodName(method: string): string;
        public static _getLayout(layout: string): string;
    }
}