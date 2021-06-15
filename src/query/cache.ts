/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Cache
 */

export class QueryCache {

    public cache: Record<string, Record<string, any>> = {};

    public migrateCache(key: string, value: Record<string, any>): this {

        this.cache[key] = {
            ...this.cache[key],
            ...value,
        };
        return this;
    }
}
