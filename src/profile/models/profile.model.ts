import {
  Model, Table, Column, DataType,
  CreatedAt, DeletedAt, UpdatedAt,
  PrimaryKey, AutoIncrement, Default
} from 'sequelize-typescript';

@Table
export class Profile extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Default('cn')
  @Column(DataType.STRING)
  locale: string;

  @Column(DataType.STRING)
  cnName: string;

  @Column(DataType.STRING)
  enName: string;

  @Column(DataType.TEXT)
  avatar: string;

  @Column(DataType.STRING)
  position: string;

  @Column(DataType.TEXT)
  bio: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.DATE)
  birthday: Date;

  @Column(DataType.STRING)
  country: string;
  
  @Default(true)
  @Column(DataType.BOOLEAN)
  isActive: boolean;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;
  
  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date;
  
  @DeletedAt
  @Column(DataType.DATE)
  deletedAt: Date;
}
