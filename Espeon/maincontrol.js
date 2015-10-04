angular.module('app.motivated', ['ngWebSocket'])
  .controller('MainController', function ($scope, $websocket) {
         
    var client = new WindowsAzure.MobileServiceClient('https://motivated.azure-mobile.net/', 'aJuZhTvnRjFnGpdfykMioMGOrTFwHA50');
    
    $scope.title = "MotivaTED";
    $scope.user = {};
    $scope.friend = {};
    
    //Find if any friends are online
    $scope.findFriend = function() {
    
      var friend = $('#twitterfriend').val();
      
      client.invokeApi("findfriend", {
        body: { screenName:  friend },
        method: "post"
      }).then(function (results) {
        if (results.responseText != null) {
          var obj = JSON.parse(results.responseText);
          $scope.user = {
            profileImage : obj.data[0].profile_image_url_https,
            name : obj.data[0].screen_name,
            twitter_id: obj.data[0].twitter_id
          }
          
          $(".user-panel").show();
          
          //$scope.getHeartRate();
          
          $scope.$apply()
          
        } else {
          alert('todo...not online');
        }
        console.log(results);  			
      }, function(error) {
        $scope.resultMessage = error.message;
        console.log(error.message);
      });
      
    };
    
    //Get the heartrate
    $scope.getHeartRate = function() {
      
      client.invokeApi("getfriendsheartrate", {
        body: { screenName: $scope.user.twitter_id },
        method: "post"
      }).then(function (results) {
        if (results.responseText != null) {
         // alert('complete');
          console.log(results.responseText);
        }
        else {
          alert('todo...no heart rate');
        }
      });
      
    };
    
    //send a message to the user using push notifications
    $scope.sendMessage = function() {
      client.invokeApi("sendmessage", {
        body: {   
          friend:  $('#tid').val(),
          toast: $('#motivationalmessage').val(),
          id: $scope.user.twitter_id
         },
        method: "post"
      }).then(function (results) {
        if (results.responseText != null) {
         // alert('complete');
          //console.log(results.responseText);
        }
        else {
          alert('todo. error');
        }
      });
    };
    
    
    //Display if the user should loginor not
    $scope.displayAuth = function() {
      var isLoggedIn = client.currentUser != null;
      $("#login-panel").toggle(!isLoggedIn);
      $("#search-panel").toggle(isLoggedIn);		
    };
    
    //Login with the azure twitter auth
    $scope.login = function() {	
      client.login("microsoft")
      .then(function (results) {
           $scope.getUserInfo(results.userId);          
      });
    };	
    
    
    $scope.getUserInfo = function(id) {
      client.invokeApi('getuserinfo', {
         method: 'get'
      }).done(function(results){
          var obj = JSON.parse(results.responseText);
          $('#tid').val(obj.screen_name);
         // $scope.friend = {
         //   twitter_name: obj.screen_name
         // }
          $scope.displayAuth();
      });
    };
    
    
    $scope.displayAuth();
    
    $(".user-panel").hide();
      
  });
   

