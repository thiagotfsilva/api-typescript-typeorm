import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Product1700507071174 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name_product",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "quantity",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "price",
            type: "decimal",
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
    await queryRunner.dropTable("product")
  }
}
