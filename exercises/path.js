const R = require('ramda');
/**
    1. Implement a function getUserFirstName which is receiving user object and it is returning the first name of the user.
    2. Modify the function to return 'Ivan' if the user object does not contain name.

    Hint: check the path and pathOr functions in Ramda.js

    User object structure example:
    const user = {
        profile: {
            name: {
                first: 'Alex"
            }
        }
    }
 */

const getUserFirstName =  R.path(['profile', 'name', 'first']);


exports.getUserFirstName = getUserFirstName;
 q