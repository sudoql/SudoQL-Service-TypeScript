/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Declare
 */

import { QueryController } from "./query/controller";
import { SudoQLQuery } from "./type";

export interface ISudoQLHashable {

    hash(): string;
}

export type FieldQuerier = (query: SudoQLQuery, controller: QueryController) => Promise<any>;
export type FieldResolver<T> = (query: SudoQLQuery, controller: QueryController) => T;

export type SudoQLWarning = {

    readonly message: string;
};

export type SudoQLError = {

    readonly message: string;
};

type SudoQLResultSucceed = {

    readonly succeed: true;
    readonly data: any;
};

type SudoQLResultFailed = {

    readonly succeed: false;
    readonly errors: SudoQLError[];
};

export type SudoQLResult = {

    readonly warnings: SudoQLWarning[];
} & (SudoQLResultSucceed | SudoQLResultFailed);
