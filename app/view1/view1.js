'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngSanitize', 'ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  // Get the data from the json file
  return $http.get('./item-data.json').
  success(function(data) {
    $scope.contents = data.CatalogEntryView;
    // Convert string to date for reviews
    $scope.newDate = new Date($scope.contents[0].CustomerReview[0].Pro[0].datePosted);

    // Begin functionality for the image carousel in the product quadrant
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    // Add primary image to slides
    slides.push({
      image: $scope.contents[0].Images[0].PrimaryImage[0].image,
      thumb: $scope.contents[0].Images[0].PrimaryImage[0].image,
      id: currIndex++
    });

    // Add an image to slides from json data
    $scope.addSlide = function() {
      var num = currIndex;
      slides.push({
        image: $scope.contents[0].Images[0].PrimaryImage[0].image + '_Alt0' + num,
        thumb: $scope.contents[0].Images[0].PrimaryImage[0].image + '_Alt0' + num,
        id: currIndex++
      });
    };
    // Add all of the alternate images to slides
    for (var i = 0; i < $scope.contents[0].Images[0].AlternateImages.length; i++) {
      $scope.addSlide();
    }

    // Add thumbnails
    $scope.img = $scope.contents[0].Images[0].PrimaryImage[0].image;

    $scope.setActive = function(idx) {
      $scope.active=idx;
    }

    $scope.setImg = function(idx) {
      if(idx == 0){
        $scope.img=$scope.contents[0].Images[0].PrimaryImage[0].image;
      } else {
        $scope.img=$scope.contents[0].Images[0].PrimaryImage[0].image + '_Alt0' + idx;
      }
      $scope.setActive(idx);
    }
    // End carousel functionality

    // Begin magnification functionality
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // End magnification functionality

  }).error(function(data, status, headers, config) {
  });
});
