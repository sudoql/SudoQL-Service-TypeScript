/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Result
 */

import { SudoQLError, SudoQLWarning } from "../declare";

export class QueryResult {

    public static create(): QueryResult {

        return new QueryResult();
    }

    private readonly _warnings: SudoQLWarning[];
    private readonly _errors: SudoQLError[];

    private constructor() {

        this._warnings = [];
        this._errors = [];
    }

    public get warnings(): SudoQLWarning[] {
        return this._warnings;
    }

    public get errors(): SudoQLError[] {
        return this._errors;
    }

    public appendWarning(warning: SudoQLWarning): this {

        this._warnings.push(warning);
        return this;
    }

    public appendErrors(error: SudoQLError): this {

        this._errors.push(error);
        return this;
    }
}
