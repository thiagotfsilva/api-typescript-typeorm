import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Employee1700506080760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employee",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "passowrd",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "office",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "numero_vendas",
            type: "int",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employee")
  }
}
