function greet(name: string) {
  console.log(`Good morning, ${name}`);
}

greet('Azhar qureshi');

const isUserExist = (email: string) => {
  const users = ['a.a', 'b.b'];
  return users.find((user) => user == 'a.a') ? true : false;
};
