'use strict';

AngularJsChallenge.service('FormatService', [
    function () {
      this.formatNumber = (number) => {
        return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      }

      this.formatFloat = (number) => {
          return parseFloat(number).toFixed(2);
      }
    }
]);
