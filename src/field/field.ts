/**
 * @author WMXPY
 * @namespace SudoQL_Field
 * @description Field
 */

import { ISudoQLProperty } from "../property/interface";
import { SudoQLProperty } from "../property/property";
import { ISudoQLService } from "../service/interface";
import { ISudoQLField } from "./interface";

export class SudoQLField<Authentication> implements ISudoQLField<Authentication> {

    public static create<Authentication>(fieldName: string, service: ISudoQLService<Authentication>): SudoQLField<Authentication> {

        return new SudoQLField<Authentication>(fieldName, service);
    }

    private readonly _fieldName: string;
    private readonly _service: ISudoQLService<Authentication>;

    private readonly _properties: Map<string, ISudoQLProperty<Authentication>>;

    private constructor(fieldName: string, service: ISudoQLService<Authentication>) {

        this._fieldName = fieldName;
        this._service = service;

        this._properties = new Map<string, ISudoQLProperty<Authentication>>();
    }

    public get fieldName(): string {
        return this._fieldName;
    }

    public createAndAttachProperty(propertyName: string): ISudoQLProperty<Authentication> {

        const property: ISudoQLProperty<Authentication> = SudoQLProperty.create(propertyName, this, this._service);

        this._properties.set(propertyName, property);

        return property;
    }
}
