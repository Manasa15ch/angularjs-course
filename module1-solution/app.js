
(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = '';
      $scope.message = '';
  
      $scope.checkLunchItems = function () {
        var items = $scope.lunchItems.trim();
        if (!items) {
          $scope.message = 'Please enter data first';
          return;
        }
  
        var itemArray = items.split(',');
  
        itemArray = itemArray.filter(function (item) {
          return item.trim() !== '';
        });
  
        if (itemArray.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };
    }
  })();