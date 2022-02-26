/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Service
 */

export class SudoQLService {

    public static create(): SudoQLService {

        return new SudoQLService();
    }

    private readonly namespaces: any;

    private constructor() {

        this.namespaces = null;
    }

    public createField() {

        return;
    }
}
