/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Declare
 */

export type TSudoQLQuery = {

    readonly name: string;
};

export type TSudoQLRequest<Authentication> = {

    readonly authentication: Authentication;
    readonly queries: TSudoQLQuery[];
};

type TSucceedResponse<Data> = {

    readonly succeed: true;
    readonly data: Data;
};

type TFailedResponse = {

    readonly succeed: false;
};

export type TSudoQLResponse<Data> = {
} & (TSucceedResponse<Data> | TFailedResponse);
