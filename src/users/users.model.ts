import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreation {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, IUserCreation> {
  @ApiProperty({ example: '1', description: 'Unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'user@email.kz', description: 'Email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({ example: 'Qwerty123', description: 'Password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({ example: 'true', description: 'isBanned'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({ example: 'stupid', description: 'the cause banned'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}