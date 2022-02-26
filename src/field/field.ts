/**
 * @author WMXPY
 * @namespace SudoQL_Field
 * @description Field
 */

import { ISudoQLService } from "../service/interface";
import { ISudoQLField } from "./interface";

export class SudoQLField<Authentication> implements ISudoQLField<Authentication> {

    public static create<Authentication>(fieldName: string, service: ISudoQLService<Authentication>): SudoQLField<Authentication> {

        return new SudoQLField<Authentication>(fieldName, service);
    }

    private readonly _fieldName: string;
    private readonly _service: ISudoQLService<Authentication>;

    private constructor(fieldName: string, service: ISudoQLService<Authentication>) {

        this._fieldName = fieldName;
        this._service = service;
    }
}
