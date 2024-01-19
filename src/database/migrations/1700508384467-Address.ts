import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Address1700508384467 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "clientId",
            type: "int",
            isNullable: false,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "district",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "zipCode",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "complement",
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
      }),
    );

    await queryRunner.createForeignKey(
      "address",
      new TableForeignKey({
        columnNames: ["clientId"],
        referencedColumnNames: ["id"],
        referencedTableName: "clients",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}
