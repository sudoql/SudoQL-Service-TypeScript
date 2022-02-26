/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Field
 */

export class SudoQLField<Authentication> {

    public static create<Authentication>(fieldName: string): SudoQLField<Authentication> {

        return new SudoQLField<Authentication>(fieldName);
    }

    private readonly _fieldName: string;

    private constructor(fieldName: string) {

        this._fieldName = fieldName;
    }
}
