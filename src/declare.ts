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
export type FieldResolver = (query: SudoQLQuery, controller: QueryController) => any;
