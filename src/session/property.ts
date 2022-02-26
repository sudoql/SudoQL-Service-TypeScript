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
        authorization: Authentication,
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
        parentProperties: Array<ISudoQLPropertySession<Authentication>> = [],
    ): SudoQLPropertySession<Authentication> {

        return new SudoQLPropertySession<Authentication>(
            authorization,
            service,
            field,
            parentProperties,
        );
    }

    private readonly _authorization: Authentication;
    private readonly _service: ISudoQLService<Authentication>;
    private readonly _field: ISudoQLField<Authentication>;
    private readonly _parentProperties: Array<ISudoQLPropertySession<Authentication>>;

    private constructor(
        authorization: Authentication,
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
        parentProperties: Array<ISudoQLPropertySession<Authentication>>,
    ) {

        this._authorization = authorization;
        this._service = service;
        this._field = field;
        this._parentProperties = parentProperties;
    }

    public get authorization(): Authentication {
        return this._authorization;
    }
}
