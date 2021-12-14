var myApp = angular.module("theForest", []);

myApp.controller("productListController", ($scope) => {
  $scope.data = {
    products: [
      {
        name: "Sopa de pollo",
        img: "https://www.gourmet.cl/wp-content/uploads/2018/04/Foto-editada-1.jpg",
        starts: 3,
      },
      {
        name: "Ensalada",
        img: "https://www.gourmet.cl/wp-content/uploads/2021/10/ensalada-de-espinaca-y-frutillas-internet-6.jpg",
        starts: 4,
      },
      {
        name: "Tamales",
        img: "https://www.gourmet.cl/wp-content/uploads/2021/08/Tamales_01_Interior_Gourmet.jpg",
        starts: 5,
      },
      {
        name: "Chilaquiles",
        img: "https://www.gourmet.cl/wp-content/uploads/2021/08/Chilaquiles_Interior_Gourmet.jpg",
        starts: 4,
      },
      {
        name: "Salmón",
        img: "https://www.gourmet.cl/wp-content/uploads/2021/08/Salm%C3%B3n-Teriyaki-adaptaba-web.jpg",
        starts: 4,
      },
      {
        name: "Quesadillas",
        img: "https://www.gourmet.cl/wp-content/uploads/2021/08/Quesadillas_Interior_Gourmet.jpg",
        starts: 3,
      },
    ],
  };


  $scope.range = (min, max, step) => {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
};
});
