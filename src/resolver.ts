/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Resolver
 */

import { createSudoQLFailedResult, createSudoQLSucceedResult, ISudoQLHashable, SudoQLResult } from "./declare";
import { SudoQLField } from "./field";
import { QueryController } from "./query/controller";
import { SudoQLQuery } from "./type";

export class SudoQLResolver implements ISudoQLHashable {

    public static create(): SudoQLResolver {

        return new SudoQLResolver();
    }

    private readonly _fields: Map<string, SudoQLField>;

    private constructor() {

        this._fields = new Map();
    }

    public createField(field: string): SudoQLField {

        const instance: SudoQLField = SudoQLField.fromRelative(this, field);

        this._fields.set(field, instance);
        return instance;
    }

    public async query(query: SudoQLQuery): Promise<SudoQLResult> {

        if (!this._fields.has(query.field)) {

            createSudoQLFailedResult({
                errors: [],
            });
        }

        const field: SudoQLField = this._fields.get(query.field) as SudoQLField;

        const controller: QueryController = QueryController.create();
        const queryResult: any = await field.query(query, controller);

        return createSudoQLSucceedResult(queryResult, {});
    }

    public formatStructure(): any {

        return this._fields;
    }

    public hash(): string {

        return "[Root]";
    }
}
