'use strict';

AngularJsChallenge.component('states', {
    templateUrl: 'states/states.html',
    controller: ['$q', 'StatesService',
        function ($q, StatesService) {
            const self = this;
            self.status = 'loading';

            $q.when(StatesService.getPopulationsByState()).then((response) => {
                return response.json();
            }).then((data) => {
                self.states = data.slice(1).sort((a, b) => {
                    return a[0] > b[0] // sort on state name
                });
                self.status = 'loaded';
            });

            this.formatNumber = (number) => {
                return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }

            this.formatFloat = (number) => {
                return parseFloat(number).toFixed(2);
            }
        }
    ],
});
