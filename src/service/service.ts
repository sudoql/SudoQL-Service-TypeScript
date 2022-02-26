/**
 * @author WMXPY
 * @namespace SudoQL_Service
 * @description Service
 */

import { TSudoQLRequest, TSudoQLResponse } from "../declare";
import { SudoQLField } from "../field/field";
import { ISudoQLService } from "./interface";

export class SudoQLService<Authentication = any> implements ISudoQLService<Authentication> {

    public static create<Authentication = any>(): SudoQLService<Authentication> {

        return new SudoQLService<Authentication>();
    }

    private readonly fields: Map<string, SudoQLField<Authentication>>;

    private constructor() {

        this.fields = new Map<string, SudoQLField<Authentication>>();
    }

    public createAndAttachField(fieldName: string): SudoQLField<Authentication> {

        const field: SudoQLField<Authentication> = SudoQLField.create(fieldName, this);
        this.fields.set(fieldName, field);

        return field;
    }

    public async query<Data = any>(request: TSudoQLRequest<Authentication>): Promise<TSudoQLResponse<Data>> {

        return {

            succeed: true,
            data: null,
        };
    }
}
