var myApp = angular.module("theForest", []);

myApp.controller("registerController", ($scope) => {
  $scope.data = {
    user: {
      name: "",
      lastname: "",
      phone: "",
      username: "",
      gender: "",
      password: "",
      email: "",
    },
    address: {
      zip: "",
      state: "",
      city: "",
      colony: "",
      street: ""
    },
    stateView: true,
    inputPassword: true,
  };

  $scope.changeView = () => ($scope.data.stateView = !$scope.data.stateView);

  $scope.changeTypePassword = () =>
    ($scope.data.inputPassword = !$scope.data.inputPassword);

  $scope.passwordTypeInput = () =>
    $scope.data.inputPassword ? "password" : "text";
});
