'use strict';

AngularJsChallenge.service('ObjectService', [
    function () {
        this.objectifyArray = (array) => {
            const keys = array.shift();
            return array.reduce((accumulator, currentValue) => {
                return [
                    ...accumulator,
                    Object.fromEntries(keys.map((_, i) => [keys[i].toLowerCase(), currentValue[i]]))
                ]
            }, []);
        }
    }
]);
