'use strict';

AngularJsChallenge.service('StatesService', [
    'urls',
    function (urls) {
        this.getPopulationsByState = () => {
            return fetch(urls.populationByState);
        }
    }
]);
