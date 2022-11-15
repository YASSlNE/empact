import passport from "passport";


import passportLocal from 'passport-local'


import passportJwt, {ExtractJwt} from 'passport-jwt';
import  User  from "../entities/user";

import { Enterprise } from "../entities/enterprise";


import { Employee } from "../entities/employee";


import { Ngo } from "../entities/ngo";

import { dataSource } from "../app-data-source"

import bcrypt from "bcrypt-nodejs";
import { JWT_SECRET } from "../utils/secrets";



const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true

},
async (req, username, password, cb)=> {








  const user = await dataSource.getRepository(Ngo).findOne({ where: { email: username } })





  if(!user)
    return cb(undefined, false, {
      message: `email ${username} not found.`,
    });

  bcrypt.compare(
    password,
    user.password,
    (err: Error, isMatch:boolean)=>{
      if(isMatch)
        return cb(undefined, {email:user.email});
      else
        return cb(undefined, false, {
          message: "Invalid password.",
        });
    }
  );

}
));





passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwtToken, cb) => {





      dataSource.getRepository(Ngo).findOne({ where: { email: jwtToken.email } }).then((user) => {
        if (!user) {
          return cb(false);
        }
        if (user) {
          return cb(undefined, user, jwtToken);
        } else {
          return cb(undefined, false);
        }
      });


    }
  )
);