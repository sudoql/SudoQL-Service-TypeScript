/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Cache
 */

export class QueryCache {

    public static create(): QueryCache {

        return new QueryCache();
    }

    private readonly _cache: Record<string, Record<string, any>>;

    private constructor() {

        this._cache = {};
    }

    public get cache(): Record<string, Record<string, any>> {
        return this._cache;
    }

    public migrateCache(key: string, value: Record<string, any>): this {

        this._cache[key] = {
            ...this._cache[key],
            ...value,
        };
        return this;
    }
}
