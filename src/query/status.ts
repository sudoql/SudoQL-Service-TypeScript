/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Status
 */

import { QueryCacheSource } from "./cache-source";

export class QueryStatus {

    public static create(source: QueryCacheSource): QueryStatus {
        return new QueryStatus(source);
    }

    private readonly _source: QueryCacheSource;

    private constructor(source: QueryCacheSource) {
        this._source = source;
    }

    public migrateCache(key: string, value: Record<string, any>): this {

        this._source.migrateCache(key, value);
        return this;
    }
}
