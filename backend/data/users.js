import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdming: true,
  },
  {
    name: 'Marko',
    email: 'Marko@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Roberto',
    email: 'Roberto@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
