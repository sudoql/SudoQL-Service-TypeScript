/**
 * @author WMXPY
 * @namespace SudoQL_Session
 * @description Session
 */

import { ISudoQLService } from "../service/interface";
import { ISudoQLSession } from "./interface";

export class SudoQLSession<Authentication> implements ISudoQLSession<Authentication> {

    public static create<Authentication>(
        service: ISudoQLService<Authentication>,
    ): SudoQLSession<Authentication> {

        return new SudoQLSession<Authentication>(service);
    }

    private readonly _service: ISudoQLService<Authentication>;

    private constructor(service: ISudoQLService<Authentication>) {

        this._service = service;
    }
}
