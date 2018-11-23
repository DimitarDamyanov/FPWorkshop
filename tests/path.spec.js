import { getUserFirstName } from '../exercises/path'

describe('path module suite', () => {
    test('should return the first name of the user', () => {
        const firstName = 'Gosho';
        const user = {
            profile: {
                name: {
                    first: firstName
                }
            }
        };
        expect(getUserFirstName(user)).toBe(firstName);
    });

    test('should return "Ivan" if the user does not have first name', () => {
        const user = {
            profile: {
                name: {}
            }
        };
        expect(getUserFirstName(user)).toBe('Ivan')
    });
});
