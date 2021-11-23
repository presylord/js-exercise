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

function isUserValid(username, password) {
  for (var x = 0; x < userInfo.length; x++)
    if (
      userInfo[x].username === nameLogin &&
      userInfo[x].password === passLogin
    ) {
      return true;
    }
  return false;
}

function entryGranted(username, password) {
  if (isUserValid(username, password)) {
    console.log("Access Granted");
  } else {
    console.log("Wrong User/Password");
  }
}

entryGranted(nameLogin, passLogin);
