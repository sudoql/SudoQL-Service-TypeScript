/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Declare
 */

export interface ISudoQLQuery {

    readonly name: string;
};

export interface ISudoQLRequest {

    readonly queries: ISudoQLQuery[];
}
