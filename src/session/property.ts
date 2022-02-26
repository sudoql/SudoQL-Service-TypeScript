/**
 * @author WMXPY
 * @namespace SudoQL_Session
 * @description Property
 */

import { ISudoQLField } from "../field/interface";
import { ISudoQLService } from "../service/interface";
import { ISudoQLPropertySession } from "./interface";

export class SudoQLPropertySession<Authentication> implements ISudoQLPropertySession<Authentication> {

    public static create<Authentication>(
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
        parentProperties: Array<ISudoQLPropertySession<Authentication>> = [],
    ): SudoQLPropertySession<Authentication> {

        return new SudoQLPropertySession<Authentication>(service, field, parentProperties);
    }

    private readonly _service: ISudoQLService<Authentication>;
    private readonly _field: ISudoQLField<Authentication>;
    private readonly _parentProperties: Array<ISudoQLPropertySession<Authentication>>;

    private constructor(
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
        parentProperties: Array<ISudoQLPropertySession<Authentication>>,
    ) {

        this._service = service;
        this._field = field;
        this._parentProperties = parentProperties;
    }
}
