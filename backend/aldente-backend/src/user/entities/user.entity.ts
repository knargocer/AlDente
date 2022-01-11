import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
export enum Role {
  COOK = 'COOK',
  CLIENT = 'CLIENT',
  BOTH = 'BOTH',
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: Number, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: Role, requied: true },
});

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

mongoose.model('User', UserSchema);

export interface User extends mongoose.Document {
  user_id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  address: string;
  telephone: number;
  password: string;
  role: Role;
}

export default mongoose.model('User', UserSchema);
