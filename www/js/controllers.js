angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.cidades = [
    { 
      title: 'Franca',
      estado: 'São Paulo', 
      id: 1,
      nota: '4,5',
      img: 'city1.jpg'
    },
    { 
      title: 'Rio de Janeiro', 
      id: 2,
      estado: 'Rio de Janeiro',
      nota: '4,0',
      img: 'rio.jpg'
    },
    { 
      title: 'Florianópolis', 
      id: 3,
      estado: 'Santa Catarina',
      nota: '4,1',
      img: 'floripa.jpg'
    },
    { 
      title: 'Curitiba', 
      id: 4,
      estado: 'Paraná',
      nota: '4,8',
      img: 'curi.jpg'
    },
    { 
      title: 'Belo Horizonte', 
      id: 5,
      estado: 'Minas Gerais',
      nota: '4,7',
      img: 'bh.jpg'
    },
    { 
      title: 'São Paulo', 
      id: 6,
      estado: 'São Paulo',
      nota: '4,2',
      img: 'sp.jpg'
    }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
