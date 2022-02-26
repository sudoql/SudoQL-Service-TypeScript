/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Placeholder
 * @package Integrate Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given Placeholder', (): void => {

    const chance: Chance.Chance = new Chance('placeholder');

    it('Placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
