'use strict';

AngularJsChallenge.component('counties', {
    templateUrl: 'counties/counties.html',
    controller: ['$routeParams', '$q', 'CountiesService', '$rootScope',
        function ($routeParams, $q, CountiesService, $rootScope) {
            const self = this;
            self.status = 'loading';

            $q.when(CountiesService.getPopulationsByCounty($routeParams.stateID)).then((response) => {
                return response.json();
            }).then((data) => {
                self.counties = data.slice(1).sort((a, b) => {
                    return a[0] > b[0] // sort on county name
                });
                self.status = 'loaded';
            });

            this.getState = () => {
              return $rootScope.activeState ? $rootScope.activeState[0] : 'State';
            }

            this.formatNumber = (number) => {
                return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }

            this.formatFloat = (number) => {
                return parseFloat(number).toFixed(2);
            }
        }
    ],
});
