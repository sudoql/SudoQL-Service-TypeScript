/**
 * @author WMXPY
 * @namespace SudoQL_Property
 * @description Property
 */

import { ISudoQLField } from "../field/interface";
import { ISudoQLService } from "../service/interface";
import { ISudoQLProperty } from "./interface";

export class SudoQLProperty<Authentication> implements ISudoQLProperty<Authentication> {

    public static create<Authentication>(
        propertyName: string,
        field: ISudoQLField<Authentication>,
        service: ISudoQLService<Authentication>,
        parentProperties: Array<ISudoQLProperty<Authentication>> = [],
    ): SudoQLProperty<any> {

        return new SudoQLProperty<any>(propertyName, field, service, parentProperties);
    }

    private readonly _propertyName: string;
    private readonly _field: ISudoQLField<Authentication>;
    private readonly _service: ISudoQLService<Authentication>;
    private readonly _parentProperties: Array<ISudoQLProperty<Authentication>>;

    private readonly _childProperties: Map<string, ISudoQLProperty<Authentication>>;

    private constructor(
        propertyName: string,
        field: ISudoQLField<Authentication>,
        service: ISudoQLService<Authentication>,
        parentProperties: Array<ISudoQLProperty<Authentication>>,
    ) {

        this._propertyName = propertyName;
        this._field = field;
        this._service = service;
        this._parentProperties = parentProperties;

        this._childProperties = new Map<string, ISudoQLProperty<Authentication>>();
    }

    public get propertyName(): string {
        return this._propertyName;
    }

    public createAndAttachChildProperty(propertyName: string): ISudoQLProperty<Authentication> {

        const property: ISudoQLProperty<Authentication> = SudoQLProperty.create(propertyName, this._field, this._service, [...this._parentProperties, this]);

        this._childProperties.set(propertyName, property);

        return property;
    }
}
