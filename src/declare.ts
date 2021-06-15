/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Declare
 */

export interface ISudoQLHashable {
    hash(): string;
}

export type SudoQLQueryQuantity =
    {
        readonly plural: true;
    }
    | {
        readonly plural?: false | undefined;
    };

export type SudoQLQueryType =
    {
        readonly compound: true;
        readonly properties: Record<string, SudoQLQuery>;
    }
    | {
        readonly compound?: false | undefined;
    };

export type SudoQLQuery =
    {
        readonly field: string;

        readonly conditions?: Record<string, any>;
    }
    & SudoQLQueryQuantity
    & SudoQLQueryType;

