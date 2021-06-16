/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Resolver
 */

import { ISudoQLHashable } from "./declare";
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

    public async query(query: SudoQLQuery): Promise<any> {

        if (!this._fields.has(query.field)) {

            throw new Error("QueryNotFound");
        }

        const field: SudoQLField = this._fields.get(query.field) as SudoQLField;

        const controller: QueryController = QueryController.create();
        return field.query(query, controller);
    }

    public async queryAll(queries: SudoQLQuery[]): Promise<any> {

        const result: any[] = [];
        for (const query of queries) {

            const queryResult: any = await this.query(query);
            result.push(queryResult);
        }
        return result;
    }

    public formatStructure(): any {

        return this._fields;
    }

    public hash(): string {

        return "[Root]";
    }
}
