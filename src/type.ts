/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Type
 */

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
        readonly properties: SudoQLQuery[];
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

