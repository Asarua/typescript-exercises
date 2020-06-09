import chalk from 'chalk';
type User = typeof users[number]
const users = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  }
];

function logPerson(user: User) {
  console.log(` - ${chalk.green(user.name)}, ${user.age}`);
}

console.log(chalk.yellow('Users:'));
users.forEach(logPerson);