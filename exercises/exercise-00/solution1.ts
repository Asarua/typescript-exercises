import chalk from 'chalk';
interface User {
  name: string
  age: number
  occupation: string
}
const users: User[] = [
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