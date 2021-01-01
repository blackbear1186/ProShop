/*
  1. Import mongoose
  2. Create const userSchema = mongoose.Schema function
  3. Second argument of options at end of function {timestamps: true}
  4. Declare const User = mongoose.model('User', userSchema)
  5. Export User
*/

import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true, 
    // Make sure every email is unique
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  isAdmin: {
    type: Boolean, 
    required: true,
    default: false
  },
}, {
  timestamps: true
})

const User = mongoose.Schema('User', userSchema)

export default User