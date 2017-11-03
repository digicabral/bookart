angular.module('myApp',[]).controller('HeaderCtrl', function($scope)
{
  $scope.appDetails={
    title: "Bookart",
    tagline: "We have more than 1 million books for you!"
  };
});

/*angular.module('myApp',[]).controller('BookListCtrl', function($scope)
{
  $scope.books = [
    {
    name: "Adultery",
    price: 205,
    rating: 4,
    binding: "Paperback",
    publisher: "Random House India",
    releaseDate: "12-08-2014",
    details: "lorem ipsum dolor sit amet blablabla"
  }]
});*/
