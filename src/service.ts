/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Service
 */

import { TSudoQLRequest, TSudoQLResponse } from "./declare";
import { SudoQLField } from "./field";

export class SudoQLService<Authentication = any> {

    public static create<Authentication = any>(): SudoQLService<Authentication> {

        return new SudoQLService<Authentication>();
    }

    private readonly fields: Map<string, SudoQLField<Authentication>>;

    private constructor() {

        this.fields = new Map<string, SudoQLField<Authentication>>();
    }

    public createAndAttachField(fieldName: string): SudoQLField<Authentication> {

        const field: SudoQLField<Authentication> = SudoQLField.create(fieldName);
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
