const isEntityExist = (email) => {
  const users = ['a.a', 'b.b'];
  return users.find((user) => user == 'a.a') ? true : false;
};
