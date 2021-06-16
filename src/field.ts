/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Field
 */

import { FieldQuerier, FieldResolver, ISudoQLHashable } from "./declare";
import { QueryController } from "./query/controller";
import { SudoQLQuery } from "./type";

export class SudoQLField<T extends any = any> implements ISudoQLHashable {

    public static fromRelative<T extends any = any>(parent: ISudoQLHashable, field: string): SudoQLField<T> {

        return new SudoQLField<T>(parent, field);
    }

    private readonly _parent: ISudoQLHashable;

    private readonly _field: string;
    private readonly _subFields: Map<string, SudoQLField>;

    private _querier?: FieldQuerier;
    private _resolver?: FieldResolver<T>;

    private constructor(parent: ISudoQLHashable, field: string) {

        this._parent = parent;

        this._field = field;
        this._subFields = new Map();
    }

    public get field(): string {
        return this._field;
    }

    public defineQuerier(querier: FieldQuerier): this {

        this._querier = querier;
        return this;
    }

    public defineResolver(resolver: FieldResolver<T>): this {

        this._resolver = resolver;
        return this;
    }

    public createSubField<SubT extends any = any>(field: string): SudoQLField<SubT> {

        const instance: SudoQLField<SubT> = SudoQLField.fromRelative<SubT>(this, field);

        this._subFields.set(field, instance);
        return instance;
    }

    public async query(query: SudoQLQuery, controller: QueryController): Promise<T> {

        await this._executeQuerier(query, controller);
        return await this._querySubFields(query, controller);
    }

    public hash(): string {

        return `${this._parent.hash()}-${this._field}`;
    }

    private async _executeQuerier(query: SudoQLQuery, controller: QueryController): Promise<void> {

        if (this._querier) {
            await this._querier(query, controller);
        }
        return;
    }

    private _executeResolver(query: SudoQLQuery, controller: QueryController): T {

        if (this._resolver) {
            return this._resolver(query, controller);
        }
        return;
    }

    private async _querySubFields(query: SudoQLQuery, controller: QueryController): Promise<T> {

        if (query.compound) {

            const queryResult: Record<string, any> = {};
            const propertyKeys: string[] = Object.keys(query.properties);

            for (const property of propertyKeys) {

                if (this._subFields.has(property)) {

                    const subField: SudoQLField = this._subFields.get(property) as SudoQLField;
                    queryResult[property] = await subField.query(query.properties[property], controller);
                }
            }

            return queryResult as unknown as T;
        }
        return this._executeResolver(query, controller);
    }
}
