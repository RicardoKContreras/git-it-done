//*Note how we've added a parameter to the getUserRepos() function and inserted the parameter into the GitHub API URL. We then use the newly formatted URL in the subsequent fetch() request.
var getUserRepos = function(user) {

  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });

    //* first time using fetch
//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//           });
// });

// console.log("outside");
};

getUserRepos("microsoft");