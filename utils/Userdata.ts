export function generateRandomUser() {

  const random = Math.floor(Math.random() * 10000);

  return {
    User_name: `User${random}`,
    User_email: `user${random}@gmail.com`,
    User_phone: 9000000000 + random,
    User_address: `Address ${random}`
  };

}

export function getRandomItem(list: string[]) {

  return list[Math.floor(Math.random() * list.length)];

}