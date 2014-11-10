///<reference path='./defLoader.d.ts'/>

declare module CoreModels {
    export interface IModel {
        modelName: string;
        schema: mongoose.Schema;
        model: any;
    }

    export class Model {
        public _id: string;

        public static suffix: string;
        public suffix: string;
        public static modelName: string;
        public static schema: any;
        public static indexes: any;
        public static schemaOptions: any;
        public static Schema: mongoose.Schema;
        public static model: any;

        public static applyMiddleware(schema: mongoose.Schema): mongoose.Schema;
        public static getNewSchemaInstance(ChildModel: any): mongoose.Schema;
        public static getNewModelInstance(ChildModel: any): any;
        public static _generateIndexes(schema: mongoose.Schema, ChildModel: any): void;

        /**
         * Methods non-native bound to all models. They are also statics, but the TS compiler cannot find them through the way we use them...
         */
        public static errorHandler(err: any, trace: any, callback: (message: (any) => any) => any);
        public static exists(attr: any, callback: any);

        /**
         * We can't extends mongoose because it's way too much complicated.
         * So we just add the same native methods, but we remove all specific mongoose types.
         */
        public update(doc: any, options: any, callback: (err: any, affectedRows: number, raw: any) => void ): any;
        public save(fn?: (err: any, res: any) => void ): void;
        public remove(callback?: (err) => void ): any;

        public find(conditions: any): any;
        public find(conditions: any, fields: any): any;
        public find(conditions: any, fields: any, options: any): any;
        public find(conditions: any, fields: any, options: any, callback: (err: any, res: any) => void ): any;
        public find(conditions: any, callback: (err: any, res: any[]) => void ): any;
        public find(conditions: any, fields: any, callback: (err: any, res: any[]) => void ): any;

        public findOne(conditions: any): any;
        public findOne(conditions: any, fields: any): any;
        public findOne(conditions: any, fields: any, options: any): any;
        public findOne(conditions: any, fields: any, options: any, callback: (err: any, res: any) => void ): any;
        public findOne(conditions: any, callback: (err: any, res: any) => void ): any;
        public findOne(conditions: any, fields: any, callback: (err: any, res: any) => void ): any;

        public findById(id: string): any;
        public findById(id: string, fields: any): any;
        public findById(id: string, fields: any, options: any): any;
        public findById(id: string, fields: any, options: any, callback: (err: any, res: any) => void ): any;
        public findById(id: string, callback: (err: any, res: any) => void ): any;
        public findById(id: string, fields: any, callback: (err: any, res: any) => void ): any;

        public findByIdAndUpdate(id: string): any;
        public findByIdAndUpdate(id: string, update: any): any;
        public findByIdAndUpdate(id: string, update: any, options: any): any;
        public findByIdAndUpdate(id: string, update: any, options: any, callback: (err: any, res: any[]) => void ): any;
        public findByIdAndUpdate(id: string, callback: (err: any, res: any[]) => void ): any;
        public findByIdAndUpdate(id: string, update: any, callback: (err: any, res: any[]) => void ): any;

        public update(conditions: any,
               update: any,
               options?: any,
               callback?: (err: any, affectedRows: number, raw: any) => void ): any;
        public update(conditions: any,
               update: any,
               callback?: (err: any, affectedRows: number, raw: any) => void ): any;

        public create(doc: any, fn: (err: any, res: any) => void ): void;

        public remove(conditions: any, callback?: (err) => void): any;
    }

    export class MongoError{
        public static parseMongoError(err): any;
        public static parseValidationError(err): any;
    }
}