import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  description: string;
  picturePath: string;
  followers: any;
  followings: any;
}

interface IUserMethods {
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  fullName(): string;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    picturePath: {
      type: String,
      default: '',
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    followings: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.method('fullName', function fullName() {
  return this.firstName + ' ' + this.lastName;
});

const User = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
