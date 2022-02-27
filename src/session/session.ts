/**
 * @author WMXPY
 * @namespace SudoQL_Session
 * @description Session
 */

import { TSudoQLQuery } from "../declare";
import { hashQuery } from "../query/hash";
import { ISudoQLService } from "../service/interface";
import { ISudoQLSession } from "./interface";

export class SudoQLSession<Authentication> implements ISudoQLSession<Authentication> {

    public static create<Authentication>(
        authorization: Authentication,
        service: ISudoQLService<Authentication>,
    ): SudoQLSession<Authentication> {

        return new SudoQLSession<Authentication>(
            authorization,
            service,
        );
    }

    private readonly _authorization: Authentication;
    private readonly _service: ISudoQLService<Authentication>;

    private readonly _cache: Map<string, any>;

    private constructor(
        authorization: Authentication,
        service: ISudoQLService<Authentication>
    ) {

        this._authorization = authorization;
        this._service = service;

        this._cache = new Map<string, any>();
    }

    public get authorization(): Authentication {
        return this._authorization;
    }

    public getCachedQueryResponse(query: TSudoQLQuery): any {

        const cache: string = hashQuery(query);
        return this._cache.get(cache);
    }
}
