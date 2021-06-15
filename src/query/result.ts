/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Result
 */

export class QueryResult {

    public static create(): QueryResult {

        return new QueryResult();
    }

    private readonly _warnings: any[];
    private readonly _errors: any[];

    private constructor() {

        this._warnings = [];
        this._errors = [];
    }

    public get warnings(): any[] {
        return this._warnings;
    }

    public get errors(): any[] {
        return this._errors;
    }
}
