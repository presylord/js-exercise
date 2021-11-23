var userInfo = [
  {
    username: "Presy",
    password: "123",
  },
  {
    username: "Lord",
    password: "456",
  },
  {
    username: "Kidlat",
    password: "777",
  },
];

var nameLogin = prompt("Enter name:");
var passLogin = prompt("Enter pass:");

for (var x = 0; x < userInfo.length; x++)
  if (
    userInfo[x].username === nameLogin &&
    userInfo[x].password === passLogin
  ) {
    console.log("Login Successful!");
    break;
  } else {
    console.log("Wrong User and Password!");
  }

//   use forEach for this activity
