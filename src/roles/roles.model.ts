import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IRoleCreation {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, IRoleCreation> {
  @ApiProperty({ example: '1', description: 'Unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'value is role'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'description is role'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

}