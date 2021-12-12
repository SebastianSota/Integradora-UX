var myApp = angular.module('theForest',[]);

myApp.controller('myController', ['$scope', function($scope) {

  $scope.formControl = {
    user: {
      name: "",
      password: ""
    },
    crossEye: true,
    inputType: "password",
    showWarning: false,
    inputs:{
      userWarning: false,
      passwordWarning: false
    }
  }

  $scope.start = (validation) => {
      $scope.formControl.showWarning = false;

        if(!validation) {
          $scope.formControl.inputs.userWarning = true;
          $scope.formControl.inputs.passwordWarning = true;
          return;
        }


      if($scope.formControl.user.name === "luis" && $scope.formControl.user.password === "contrasena")
        window.location.replace("error 404.html")
      else
        $scope.formControl.showWarning = true;
  }

  $scope.hidePassword = () => {
    $scope.formControl.crossEye = !$scope.formControl.crossEye;
    $scope.formControl.inputType === "text" ? $scope.formControl.inputType = "password" : $scope.formControl.inputType = "text";  
  }

}]);