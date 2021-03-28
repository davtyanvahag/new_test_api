import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof User) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.email = createUserDto.email;
    user.company = createUserDto.company;
    user.address = createUserDto.address;
    user.city = createUserDto.city;
    user.state = createUserDto.state;
    user.zip = createUserDto.zip;
    user.country = createUserDto.country;
    user.phone = createUserDto.phone;
    user.title = createUserDto.title;
    user.contactname = createUserDto.contactname;
    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async findOne(id: number) {
    return await this.usersRepository.findByPk<User>(id);

  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.usersRepository.findByPk<User>(id);

    if (!user.id) {
      return {error: true, message: 'User not found'}
    }
    user = this._assign(user, updateUserDto);
    return await user.save();
  }

  async remove(id: number) {
    return await this.usersRepository.destroy({
      where: { id },
    });
  }

  private _assign(user: UpdateUserDto, newValue: UpdateUserDto): User {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(user['dataValues'])) {
      if (user[key] !== newValue[key]) {
        //
        user[key] = newValue[key];
      }
    }
    return user as User;
  }
}
