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
import { Roles } from "../enums/roles.enum";
import { createTokenFromUser } from "../utils/auth.util";
import { createLoggedInUserDto } from "../utils/mapper.util";



const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  roleField: 'role',
  passReqToCallback : true

},
async (req, email, password, cb)=> {

  const role = req.query.role;
  const type = entityBasedOnRole(role);
  const user = await dataSource.getRepository(type).findOne({ where: { email } })

  if(!user)
    return cb(undefined, false, {
      message: `email ${email} not found.`,
    });

  bcrypt.compare(
    password,
    user.password,
    (err: Error, isMatch:boolean)=>{
      const token = createTokenFromUser(user, role)
      const dto = createLoggedInUserDto(user, token);
      if(isMatch)
        return cb(undefined, dto);
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
      const type = entityBasedOnRole(jwtToken.role);
      dataSource.getRepository(type).findOne({ where: { id: jwtToken.id } }).then((user) => {
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

function entityBasedOnRole(role: Roles): typeof Employee | typeof Enterprise | typeof Ngo {
  switch (role) {
    case Roles.Employee:
      return Employee;
    case Roles.Enterprise:
      return Enterprise;
    case Roles.Ngo:
    return Ngo;
    default:
      break;
  }
}