import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  email: string;

  @Column
  company: string;

  @Column
  address: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  zip: number;

  @Column
  country: string;

  @Column
  phone: string;

  @Column
  title: string;

  @Column
  contactname: string;
}
