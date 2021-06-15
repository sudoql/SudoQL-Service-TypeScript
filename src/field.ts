/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Field
 */

import { FieldQuerier, FieldResolver, ISudoQLHashable } from "./declare";
import { QueryController } from "./query/controller";
import { SudoQLQuery } from "./type";

export class SudoQLField implements ISudoQLHashable {

    public static fromRelative(parent: ISudoQLHashable, field: string): SudoQLField {

        return new SudoQLField(parent, field);
    }

    private readonly _parent: ISudoQLHashable;

    private readonly _field: string;
    private readonly _subFields: Map<string, SudoQLField>;

    private _querier?: FieldQuerier;
    private _resolver?: FieldResolver;

    private constructor(parent: ISudoQLHashable, field: string) {

        this._parent = parent;

        this._field = field;
        this._subFields = new Map();
    }

    public get field(): string {
        return this._field;
    }

    public async query(query: SudoQLQuery, controller: QueryController): Promise<void> {

        controller.migrateCache(this._hashConditions(query.conditions), {
            a: "test",
            b: "test",
        });
    }

    public defineQuerier(querier: FieldQuerier): this {

        this._querier = querier;
        return this;
    }

    public defineResolver(resolver: FieldResolver): this {

        this._resolver = resolver;
        return this;
    }

    public defineSubField(field: SudoQLField): this {

        this._subFields.set(field.field, field);
        return this;
    }

    public hash(): string {

        return `${this._parent.hash()}-${this._field}`;
    }

    private async _querySubFields(query: SudoQLQuery, controller: QueryController): Promise<any> {

        if (query.compound) {

            const queryResult: Record<string, any> = {};

            const propertyKeys: string[] = Object.keys(query.properties);
            for (const property of propertyKeys) {

                if (this._subFields.has(property)) {

                    const subField: SudoQLField = this._subFields.get(property) as SudoQLField;
                    queryResult[property] = await subField.query(query.properties[property], controller);
                }
            }

            return queryResult;
        }

        if (this._querier) {

            return this._querier(query, controller);
        }

        throw new Error("No Querier");
    }

    private _hashConditions(conditions: Record<string, any>): string {

        return `${this.hash()}:${JSON.stringify(conditions)}`;
    }
}
