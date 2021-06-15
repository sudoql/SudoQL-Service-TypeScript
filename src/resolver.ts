/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Resolver
 */

import { ITestTestHashable, TestTestQuery } from "./declare";
import { TestTestField } from "./field";

export class TestTestResolver implements ITestTestHashable {

    public static create(): TestTestResolver {
        return new TestTestResolver();
    }

    private readonly _fields: Map<string, TestTestField>;

    private constructor() {
        this._fields = new Map();
    }

    public createField(field: string): TestTestField {
        const instance: TestTestField = TestTestField.fromRelative(this, field);

        this._fields.set(field, instance);
        return instance;
    }

    public async query(query: TestTestQuery): Promise<any> {
        if (this._fields.has(query.field)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const field: TestTestField = this._fields.get(query.field) as TestTestField;
        }
    }

    public formatStructure(): any {

        return this._fields;
    }

    public hash(): string {

        return "[Root]";
    }
}
