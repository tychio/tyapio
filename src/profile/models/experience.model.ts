import {
  Model, Table, Column, DataType,
  CreatedAt, DeletedAt, UpdatedAt,
  PrimaryKey, AutoIncrement, Default
} from 'sequelize-typescript';

@Table
export class Experience extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  profileId: number;

  @Column(DataType.STRING)
  location: string;

  @Column(DataType.STRING)
  position: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.STRING)
  company: string;

  @Column(DataType.DATE)
  start: Date;

  @Column(DataType.DATE)
  end: Date;

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
