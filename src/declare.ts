/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Declare
 */

export interface ITestTestHashable {
    hash(): string;
}

export type TestTestQueryQuantity =
    {
        readonly plural: true;
    }
    | {
        readonly plural?: false | undefined;
    };

export type TestTestQueryType =
    {
        readonly compound: true;
        readonly properties: Record<string, TestTestQuery>;
    }
    | {
        readonly compound?: false | undefined;
    };

export type TestTestQuery =
    {
        readonly field: string;

        readonly conditions?: Record<string, any>;
    }
    & TestTestQueryQuantity
    & TestTestQueryType;

