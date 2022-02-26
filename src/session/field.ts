/**
 * @author WMXPY
 * @namespace SudoQL_Session
 * @description Field
 */

import { ISudoQLField } from "../field/interface";
import { ISudoQLService } from "../service/interface";
import { ISudoQLFieldSession } from "./interface";

export class SudoQLFieldSession<Authentication> implements ISudoQLFieldSession<Authentication> {

    public static create<Authentication>(
        authorization: Authentication,
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
    ): SudoQLFieldSession<Authentication> {

        return new SudoQLFieldSession<Authentication>(
            authorization,
            service,
            field,
        );
    }

    private readonly _authorization: Authentication;
    private readonly _service: ISudoQLService<Authentication>;
    private readonly _field: ISudoQLField<Authentication>;

    private constructor(
        authorization: Authentication,
        service: ISudoQLService<Authentication>,
        field: ISudoQLField<Authentication>,
    ) {

        this._authorization = authorization;
        this._service = service;
        this._field = field;
    }

    public get authorization(): Authentication {
        return this._authorization;
    }
}
