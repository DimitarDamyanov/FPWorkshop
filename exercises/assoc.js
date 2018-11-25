const R = require('ramda');
/**
    1. Function enableProduction should enable the production environment. The function should not mutate the configuration object.
        Example: enableProduction(configuration)

    2. Function enableEnvironment should enable environment by name. The function should receive the environment name as parameter.
        Example: enableEnvironment('production', configuration)

    3. Transform the enableEnvironment function to curry function (R.curry)  - All tests should be green!

    4. Modify enableProduction to work with the enableEnvironment. Note: Partial Application -  All tests should be green!

    5. Function toggleEnvironment should be able to enable/disable specific environment.
        Example: toggleEnvironment(isEnabled, environment, configuration)

    6. Transform toggleEnvironment to curry function

    7. Modify enableEnvironment to work with the toggleEnvironment function. -  All tests should be green!

    All functions should be pure.

    Configuration object structure:
    const configuration  = {
        environment: {
            development: {
                isEnabled: true
            },
            production: {
                isEnabled: false
            }
        }
    }
 */

const toggleEnvironment = () => {};
const enableEnvironment = () => {};
const enableProduction  = () => {};

export { toggleEnvironment, enableEnvironment, enableProduction};