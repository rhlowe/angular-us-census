"use strict";

AngularJsChallenge.component("counties", {
  templateUrl: "counties/counties.html",
  controller: [
    "$routeParams",
    "$q",
    "CountiesService",
    "$rootScope",
    "FormatService",
    "ObjectService",
    function ($routeParams, $q, CountiesService, $rootScope, FormatService, ObjectService) {
      const self = this;
      self.status = "loading";

      $q.when(CountiesService.getPopulationsByCounty($routeParams.stateID))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          self.counties = ObjectService.objectifyArray(data).sort((a, b) => {
            return a.name > b.name; // sort on county name
          });
          self.status = "loaded";
        });

      this.getState = () => {
        return $rootScope.activeState ? $rootScope.activeState.name : "State";
      };

      this.formatNumber = (number) => {
        return FormatService.formatNumber(number);
      };

      this.formatFloat = (number) => {
        return FormatService.formatFloat(number);
      };
    },
  ],
});
