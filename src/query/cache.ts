/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Cache
 */

export type QueryCacheValue = Record<string, any>;

export class QueryCache {

    public static create(): QueryCache {

        return new QueryCache();
    }

    private readonly _cache: Record<string, QueryCacheValue>;

    private constructor() {

        this._cache = {};
    }

    public get cache(): Record<string, QueryCacheValue> {
        return this._cache;
    }

    public migrateCache(key: string, value: QueryCacheValue): this {

        this._cache[key] = {
            ...this._cache[key],
            ...value,
        };
        return this;
    }

    public getCacheOrNull(key: string): QueryCacheValue | null {

        if (this._cache[key]) {
            return this._cache[key];
        }
        return null;
    }
}
