import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const userTest = {
  id: 1,
  name: 'Fulano'
};
@Injectable()
export class UsersService {

  create(createUserDto: CreateUserDto) {
    return userTest;
  }

  findAll() {
    return [{userTest}];
  }

  findOne(id: number) {
    return userTest;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return userTest;
  }

  remove(id: number) {
    return true;
  }
}
