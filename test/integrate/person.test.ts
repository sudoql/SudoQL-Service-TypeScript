/**
 * @author WMXPY
 * @namespace SudoQL
 * @description Person
 * @package Integrate Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { SudoQLField } from '../../src/field';
import { QueryController } from '../../src/query/controller';
import { SudoQLResolver } from '../../src/resolver';
import { SudoQLQuery } from '../../src/type';

describe('Given (Person) Integrate Test', (): void => {

    const chance: Chance.Chance = new Chance('integrate-sudoql-person');

    it('should be able to get simple name - resolver', async (): Promise<void> => {

        const targetName: string = chance.name();

        const resolver: SudoQLResolver = SudoQLResolver.create();
        const personField: SudoQLField<{
            readonly name: string;
        }> = resolver.createField('person');

        const nameSubField: SudoQLField<string> = personField.createSubField('name');
        nameSubField.defineResolver((_query: SudoQLQuery, _controller: QueryController) => {

            return targetName;
        });

        const result = await resolver.query({
            field: 'person',
            compound: true,
            properties: [{
                field: 'name',
            }],
        });

        expect(result).to.be.deep.equal({

            succeed: true,
            data: {
                name: targetName,
            },
            warnings: [],
        });
    });
});
