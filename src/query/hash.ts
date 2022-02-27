/**
 * @author WMXPY
 * @namespace SudoQL_Query
 * @description Hash
 */

import { TSudoQLQuery } from "../declare";

export const hashQuery = (query: TSudoQLQuery): string => {

    return `${query.key}::${query.fieldName}`;
};
