"use strict";

AngularJsChallenge.service("CountiesService", [
  "urls",
  function (urls) {
    this.getPopulationsByCounty = (stateID = "*") => {
      return fetch(
        `https://api.census.gov/data/2019/pep/population?get=NAME,POP,DENSITY,STATE&for=county:*&in=state:${stateID}&DATE_CODE=1`
      );
    };
  },
]);
