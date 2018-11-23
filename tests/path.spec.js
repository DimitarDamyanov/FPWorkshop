import { getFirstName } from '../exercises/path'

describe('path module suite', () => {
    test('1. should return the first name of the user', () => {
        const firstName = 'Gosho';
        const user = {
            profile: {
                name: {
                    first: firstName
                }
            }
        };
        expect(getFirstName(user)).toBe(firstName);
    });

    test('2. should return "Ivan" if the user does not have first name', () => {
        const user = {
            profile: {
                name: {}
            }
        };
        expect(getFirstName(user)).toBe('Ivan')
    });
});
