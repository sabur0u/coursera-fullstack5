(function() {
  'use strict';

  angular.module('LunchCheckApp', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menu = '';
    $scope.message = '';

    $scope.checkLunch = function() {

      // check whether textbox is empty
      if ($scope.menu === '') {
        $scope.message = 'Please enter data first';
        return;
      }

      var numOfMenu = $scope.menu.split(',').length;

      if (numOfMenu <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  }

})();
