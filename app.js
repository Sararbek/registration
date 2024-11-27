let DATA = [{ name: "John", username: "john3526", password: "123456" }];

function logIn(user) {
  try {
    let existUser = DATA.find((Euser) => Euser.username === user.username);
    if (!existUser || existUser.password !== user.password) {
      throw new Error("Username or password is incorrect, please try again");
    }
    return `Welcome ${existUser.name}`;
  } catch (error) {
    return error;
  }
}

function handleLogIn() {
  let username = prompt("Please, enter your username");
  let password = +prompt("Please, enter your password");
  alert(logIn({ username, password }));
}

function signUp(user) {
  try {
    if (user["name"].length < 1) {
      throw new Error(
        "Your name should contain at least one element or letter"
      );
    }
    let existUsername = DATA.find(
      (foundUser) => foundUser.username === user.username
    );
    if (existUsername) {
      throw new Error("This account already exists");
    }
    if (user.username.length < 4) {
      throw new Error("Your username should contain at least 4 elements");
    }
    if (user.password.length < 6) {
      throw new Error("Your password should contain at least 6 elements");
    }
    DATA.push(user);
    return "Sign-up successful!";
  } catch (error) {
    return error;
  }
}

function handleSignUp() {
  let name = prompt("Please enter your name");
  let username = prompt("Please enter your username");
  let password = prompt("Please enter your password");
  alert(signUp({ name, username, password }));
}
