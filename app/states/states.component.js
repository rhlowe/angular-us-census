'use strict';

AngularJsChallenge.component('states', {
    templateUrl: 'states/states.html',
    controller: ['$q', 'StatesService', '$rootScope',
        function ($q, StatesService, $rootScope) {
            const self = this;
            self.status = 'loading';

            $q.when(StatesService.getPopulationsByState()).then((response) => {
                return response.json();
            }).then((data) => {
                self.states = data.slice(1).sort((a, b) => {
                    return a[0] > b[0] // sort on state name
                });
                self.status = 'loaded';
                $rootScope.$on('$routeChangeStart', function(event, next, current) {
                    $rootScope.activeState = self.states.find(state => state[4] === next.params.stateID);
                });
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
