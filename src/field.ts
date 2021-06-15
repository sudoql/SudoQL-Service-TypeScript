/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Field
 */

import { ITestTestHashable, TestTestQuery } from "./declare";
import { QueryResult } from "./query/result";
import { QueryStatus } from "./query/status";

export class TestTestField implements ITestTestHashable {

    public static fromRelative(parent: ITestTestHashable, field: string): TestTestField {
        return new TestTestField(parent, field);
    }

    private readonly _parent: ITestTestHashable;

    private readonly _field: string;
    private readonly _subFields: Map<string, TestTestField>;

    private _querier: any;

    private constructor(parent: ITestTestHashable, field: string) {

        this._parent = parent;

        this._field = field;
        this._subFields = new Map();
    }

    public get field(): string {
        return this._field;
    }

    public async query(
        query: TestTestQuery,
        result: QueryResult,
        status: QueryStatus,
    ): Promise<void> {

        status.migrateCache(this._hashConditions(query.conditions), {
            a: "test",
            b: "test",
        });
    }

    public defineQuerier(querier: (request: any) => Promise<any[]>): this {

        this._querier = querier;
        return this;
    }

    public defineSubField(field: TestTestField): this {

        this._subFields.set(field.field, field);
        return this;
    }

    public hash(): string {
        return `${this._parent.hash()}-${this._field}`;
    }

    private async _querySubFields(
        query: TestTestQuery,
        result: QueryResult,
        status: QueryStatus,
    ) {

        if (query.compound) {

            const queryResult: Record<string, any> = {};

            const propertyKeys: string[] = Object.keys(query.properties);
            for (const property of propertyKeys) {

                if (this._subFields.has(property)) {

                    const subField: TestTestField = this._subFields.get(property) as TestTestField;
                    queryResult[property] = await subField.query(query.properties[property], result, status);
                }
            }

            return queryResult;
        }

        if (this._querier) {
            return this._querier();
        }

        throw new Error("No Querier");
    }

    private _hashConditions(conditions: Record<string, any>): string {
        return `${this.hash()}:${JSON.stringify(conditions)}`;
    }
}
