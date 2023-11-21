import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Sale1700513234615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sale",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "productId",
            type: "int",
            isNullable: false,
          },
          {
            name: "employeeId",
            type: "int",
            isNullable: false,
          },
          {
            name: "clientId",
            type: "int",
            isNullable: false,
          },
          {
            name: "quantityProduct",
            type: "int",
            isNullable: false,
          },
          {
            name: "amount",
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

    await queryRunner.createForeignKey(
      "sale",
      new TableForeignKey({
        columnNames: ["clientId"],
        referencedColumnNames: ["id"],
        referencedTableName: "client",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "sale",
      new TableForeignKey({
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "product",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "sale",
      new TableForeignKey({
        columnNames: ["employeeId"],
        referencedColumnNames: ["id"],
        referencedTableName: "employee",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}
