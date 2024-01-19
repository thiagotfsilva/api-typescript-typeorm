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
        name: "sales",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "employeeId",
            type: "int",
            isNullable: false,
          },
          {
            name: "clientsId",
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
      }),
    );

    await queryRunner.createForeignKey(
      "sales",
      new TableForeignKey({
        columnNames: ["clientsId"],
        referencedColumnNames: ["id"],
        referencedTableName: "clients",
      }),
    );

    await queryRunner.createForeignKey(
      "sales",
      new TableForeignKey({
        columnNames: ["employeeId"],
        referencedColumnNames: ["id"],
        referencedTableName: "employees",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sales");
  }
}
