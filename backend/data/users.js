/*
  1. Create array of users[{name, email, password, isAdmin}]
  2. Install npm i bcryptjs
  3. Import bcrypt from 'bcryptjs'
  4. Call bcrypt.hashSync as password
*/
import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Berlin Johnson',
    email: 'berlin.johnson@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Atsuko Painia',
    email: 'painiafam@me.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users