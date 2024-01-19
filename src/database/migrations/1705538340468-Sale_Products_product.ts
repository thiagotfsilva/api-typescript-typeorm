import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SaleProductsProduct1705538340468 implements MigrationInterface {
  name = "SaleProductsProduct1705538340468";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sale_products_product",
        columns: [
          {
            name: "productsId",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "salesId",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
        ],

        foreignKeys: [
          {
            columnNames: ["productsId"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
          },
          {
            columnNames: ["salesId"],
            referencedColumnNames: ["id"],
            referencedTableName: "sales",
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sale_products_product");
  }
}
