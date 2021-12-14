var myApp = angular.module('theForest',[]);

myApp.controller('paymentController', ['$scope', function($scope){

  $scope.data = {
    person: {
      name: "",
      surname: "",
      secondSurname: "",
      email: ""
    },
    creditCard: {
      cardNumber: "",
      month: "",
      year: ""
    },
    address: {
      zipCode: "",
      state: "",
      municipio: "",
      street: ""
    }
  }

}]);

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

myApp.controller('productdetailController', ['$scope', function($scope) {

  $scope.cantidad = 1;
  $scope.false = false;
  $scope.notifi = false;
  
  $scope.sumar = () =>{
    $scope.cantidad++;
    $scope.bandera = false;
  }

  $scope.restar = () =>{
    if($scope.cantidad ===1){
      $scope.bandera = true;
    }else{
      $scope.cantidad--;
      $scope.bandera = false;
    }
    
  }

  $scope.noti = () =>{
    $scope.notifi = true;
  }

}]);

myApp.controller('shoppingController', ['$scope', function($scope) {

  $scope.cantidad = 1;
  $scope.cantidad2 = 1;
  $scope.false = false;
  $scope.notifi = false;
  $scope.fav2 = false;
  $scope.fav = false;
  
  $scope.sumar = () =>{
    $scope.cantidad++;
    $scope.bandera = false;
  }

  $scope.restar = () =>{
    if($scope.cantidad ===1){
      $scope.bandera = true;
    }else{
      $scope.cantidad--;
      $scope.bandera = false;
    }
    
  }

  $scope.sumar2 = () =>{
    $scope.cantidad2++;
    $scope.bandera = false;
  }

  $scope.restar2 = () =>{
    if($scope.cantidad2 ===1){
      $scope.bandera2 = true;
    }else{
      $scope.cantidad2--;
      $scope.bandera2 = false;
    }
    
  }

  $scope.noti = () =>{
    $scope.notifi = true;
  }


  $scope.favchng = () =>{
    $scope.fav = !$scope.fav;
  }

  $scope.favchng2 = () =>{
    $scope.fav2 = !$scope.fav2;
  }

}]);