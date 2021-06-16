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

export type SudoQLResultCommonCreationOptions = {

    readonly warnings?: SudoQLWarning[];
};

export type SudoQLResultSucceedCreationOptions = {
} & SudoQLResultCommonCreationOptions;

export const createSudoQLSucceedResult = (data: any, options: SudoQLResultSucceedCreationOptions): SudoQLResult => {

    return {

        succeed: true,
        data,
        warnings: options.warnings ?? [],
    };
};

export type SudoQLResultFailedCreationOptions = {

    readonly errors: SudoQLError[];
} & SudoQLResultCommonCreationOptions;

export const createSudoQLFailedResult = (options: SudoQLResultFailedCreationOptions): SudoQLResult => {

    return {

        succeed: false,
        warnings: options.warnings ?? [],
        errors: options.errors,
    };
};
