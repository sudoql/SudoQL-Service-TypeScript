/**
 * @author WMXPY
 * @namespace SudoQL_Session
 * @description Interface
 */

export interface ISudoQLSession<Authentication> {
}

export interface ISudoQLFieldSession<Authentication> extends ISudoQLSession<Authentication> {
}

export interface ISudoQLPropertySession<Authentication> extends ISudoQLFieldSession<Authentication> {
}
