const { v4 } = require("uuid");

// Factory function [Don't Change]
const buildData = (usernames, foods) => {
  const foodRecords = foods.map((name) => ({
    uid: v4(),
    name,
  }));

  const userRecords = usernames.map((name, idx) => ({
    uid: v4(),
    name,
    food: foodRecords[idx].uid,
  }));

  return {
    users: userRecords,
    foods: foodRecords,
  };
};

// Create DB
const data = buildData(
  ["John", "Bob", "Sarah", "Faye"],
  ["Pizza", "Indian", "Thai", "American"]
);

const queryUser = (name, callback) => {
  const result = {
    query: data.users.filter((u) => u.name === name)[0] || {},
  };
  callback(result.query);
};

const queryFood = (uid, callback) => {
  const result = {
    query: data.foods.filter((u) => u.uid === uid)[0] || {},
  };
  callback(result.query);
};

// Fetch data
const findFavouriteFood = (name, callback) => {
  queryUser(name, (result) => {
    queryFood(result.food, (result) => {
      callback(result.name);
    });
  });
};

findFavouriteFood("John", console.log);
findFavouriteFood("Bob", console.log);
findFavouriteFood("Sarah", console.log);
findFavouriteFood("Faye", console.log);
