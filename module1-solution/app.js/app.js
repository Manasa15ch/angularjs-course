(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = '';
      $scope.message = '';
  
      $scope.checkLunchItems = function () {
        // Trim the input and check if it's empty
        var items = $scope.lunchItems.trim();
        if (!items) {
          $scope.message = 'Please enter data first';
          return;
        }
  
        // Split the input into an array of items
        var itemArray = items.split(',');
  
        // Remove empty items (bonus feature)
        itemArray = itemArray.filter(function (item) {
          return item.trim() !== '';
        });
  
        // Check the number of items and set the message
        if (itemArray.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };
    }
  })();