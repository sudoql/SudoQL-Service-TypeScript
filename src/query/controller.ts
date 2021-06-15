/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Controller
 */

import { QueryCache } from "./cache";
import { QueryResult } from "./result";

export class QueryController {

    public static create(): QueryController {

        return new QueryController(
            QueryCache.create(),
            QueryResult.create(),
        );
    }

    private readonly _cache: QueryCache;
    private readonly _result: QueryResult;

    private constructor(
        cache: QueryCache,
        result: QueryResult,
    ) {

        this._cache = cache;
        this._result = result;
    }

    public migrateCache(key: string, value: Record<string, any>): this {

        this._cache.migrateCache(key, value);
        return this;
    }

    public clone(): QueryController {

        return new QueryController(
            this._cache,
            this._result,
        );
    }
}
