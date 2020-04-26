"use strict";

AngularJsChallenge.component("states", {
  templateUrl: "states/states.html",
  controller: [
    "$q",
    "StatesService",
    "$rootScope",
    "FormatService",
    "ObjectService",
    function ($q, StatesService, $rootScope, FormatService, ObjectService) {
      const self = this;
      self.status = "loading";

      $q.when(StatesService.getPopulationsByState())
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          self.states = ObjectService.objectifyArray(data).sort((a, b) => {
            return a.name > b.name; // sort on state name
          });
          self.status = "loaded";
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.activeState = self.states.find(
              (state) => state.state === next.params.stateID
            );
          });
        });

      this.formatNumber = (number) => {
        return FormatService.formatNumber(number);
      };

      this.formatFloat = (number) => {
        return FormatService.formatFloat(number);
      };
    },
  ],
});
