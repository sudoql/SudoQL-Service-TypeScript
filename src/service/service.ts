/**
 * @author WMXPY
 * @namespace SudoQL_Service
 * @description Service
 */

import { TSudoQLRequest, TSudoQLResponse } from "../declare";
import { SudoQLField } from "../field/field";
import { ISudoQLField } from "../field/interface";
import { ISudoQLService } from "./interface";

export class SudoQLService<Authentication = any> implements ISudoQLService<Authentication> {

    public static create<Authentication = any>(serviceName: string): SudoQLService<Authentication> {

        return new SudoQLService<Authentication>(serviceName);
    }

    private readonly _serviceName: string;

    private readonly _fields: Map<string, SudoQLField<Authentication>>;

    private constructor(serviceName: string) {

        this._serviceName = serviceName;

        this._fields = new Map<string, SudoQLField<Authentication>>();
    }

    public get serviceName(): string {
        return this._serviceName;
    }

    public createAndAttachField(fieldName: string): ISudoQLField<Authentication> {

        const field: SudoQLField<Authentication> = SudoQLField.create(fieldName, this);

        this._fields.set(fieldName, field);

        return field;
    }

    public async query<Data = any>(request: TSudoQLRequest<Authentication>): Promise<TSudoQLResponse<Data>> {

        return {

            succeed: true,
            data: null,
        };
    }
}
