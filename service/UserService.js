"use strict";

/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * returns User
 **/

exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var errorFlag = false;
    var errorsDetailsArray = [];
    const types = {
      STRING: "string",
      NUMBER: "number",
      BOOLEAN: "boolean",
      OBJECT: "object"
    };

    for (var i = 0; i < Object.keys(body).length; i++) {
      var key = Object.keys(body)[i];
      var value = Object.values(body)[i];

      switch (key) {
        case "firstName":
        case "lastName":
        case "email":
        case "gender":
        case "signUp":
          errorsDetailsArray = handleComparison(
            key,
            value,
            types.STRING,
            errorsDetailsArray
          );
          break;
        case "age":
          errorsDetailsArray = handleComparison(
            key,
            value,
            types.NUMBER,
            errorsDetailsArray
          );
          break;
        case "terms":
          errorsDetailsArray = handleComparison(
            key,
            value,
            types.BOOLEAN,
            errorsDetailsArray
          );
          break;
        case "hobbies":
          errorsDetailsArray = handleComparison(
            key,
            value,
            types.OBJECT,
            errorsDetailsArray
          );
          break;
        default:
          errorsDetailsArray += `${key} is not part of the schema for a user. Ensure the data you pass meets the new user schema exactly.`;
          break;
      }
    }

    if (errorsDetailsArray.length !== 0) {
      errorFlag = true;
    }

    if (!errorFlag) {
      resolve(
        "successfullly created new object: " + JSON.stringify(body, null, 2)
      );
    } else {
      reject(errorsDetailsArray);
    }
  });
};

function handleComparison(key, value, type, errorsDetailsArray) {
  if (!isTypeOf(value, type)) {
    errorsDetailsArray += `ERROR: ${key} has the value '${value}' but it should be of type ${type}. Ensure data meets the new user schema exactly.\n`;
  }
  return errorsDetailsArray;
}

function isTypeOf(value, type) {
  if (typeof value === type) {
    return true;
  } else {
    return false;
  }
}

/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Get user by user name
 *
 *
 * username String The name that needs to be fetched. Use user1 for testing.
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      firstName: "firstName",
      lastName: "lastName",
      gender: "gender",
      terms: true,
      hobbies: "{}",
      signUp: "signUp",
      email: "email",
      age: 0.80082819046101150206595775671303272247314453125
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Logs user into the system
 *
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username, password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Logs out current logged in user session
 *
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function(username, body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};
