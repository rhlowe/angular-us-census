# angularjs-challenge

A take-home challenge for b.well front-end engineer candidates

## Instructions

We have put together a brand new application to pull population data by state from the US Census's public API.  Your assignment is to provide a state details page that shows the population and population density for each county in that state.  In addition, you will address some security vulnerabilities in upstream dependencies.

## Requirements

- Use NodeJS 13 and yarn
- Create a new page for state details that displays population and density by county
  - US Census API: https://api.census.gov/data/2019/pep/population
  - API documentation: https://www.census.gov/data/developers/data-sets/popest-popproj/popest.Vintage_2019.html
  - Hint: use `for=county:*&in=state:{{::state[4]}}`
- Transform API responses (both new and existing) into objects via a new service
- Upgrade vulnerable dependencies

## Stretch Goals

- Provide a navigation list of states/counties
- Write tests