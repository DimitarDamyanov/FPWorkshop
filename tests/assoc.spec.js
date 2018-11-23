import {enableProduction, enableEnvironment, toggleEnvironment} from '../exercises/assoc'

describe('assoc module suite', () => {

    const configuration = {
        environment: {
            development: {
                isEnabled: true
            },
            production: {
                isEnabled: false
            }
        }
    };

    const productionEnabled = {
        environment: {
            development: {
                isEnabled: true
            },
            production: {
                isEnabled: true
            }
        }
    }

    test('1. should return new configuration object with enabled value', () => {
        const config = enableProduction(configuration);
        expect(config).toEqual(productionEnabled);
        expect(config).not.toBe(configuration);
    })

    test('2. should change the production environment flag to true', () => {
        const config = enableEnvironment('production', configuration);
        expect(config).toEqual(productionEnabled);
        expect(config).not.toBe(configuration);
    })


    test('5. should enable the production flag', () => {
        const config = toggleEnvironment(true, 'production', configuration);
        expect(config).toEqual(productionEnabled);
        expect(config).not.toBe(configuration);
    })
});