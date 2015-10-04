function refreshAuthDisplay() {
    var isLoggedIn = client.currentUser !== null;
    $("#logged-in").toggle(isLoggedIn);
    $("#logged-out").toggle(!isLoggedIn);

    if (isLoggedIn) {
        $("#login-name").text(client.currentUser.userId);
        refreshTodoItems();
    }
}

function logIn() {
    client.login("facebook").then(refreshAuthDisplay, function(error){
        alert(error);
    });
}

function logOut() {
    client.logout();
    refreshAuthDisplay();
    $('#summary').html('<strong>You must login to access data.</strong>');
}