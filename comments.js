function comments() {
    return {
        restrict: 'E',
        scope: {
            comment: '='
        },
        templateUrl: 'comments.html',
        controller: function($scope) {
            $scope.comment = $scope.comment || {};
            $scope.comment.date = $scope.comment.date || new Date();
        }
    };
}
