/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Controller
 */

import { QueryCache } from "./cache";

export class QueryController {

    public static create(source: QueryCache): QueryController {

        return new QueryController(source);
    }

    private readonly _source: QueryCache;

    private constructor(source: QueryCache) {

        this._source = source;
    }

    public migrateCache(key: string, value: Record<string, any>): this {

        this._source.migrateCache(key, value);
        return this;
    }
}
