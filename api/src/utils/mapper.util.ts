import { LoggedInUserDto } from "../Dtos/loggedInUSer.dto";
import User from "../entities/user";

export const createLoggedInUserDto = (user: User, token: string): LoggedInUserDto => {
  return {
    name: user.name,
    profilePictureUrl: user.profilePictureUrl,
    token,
  }
}
