import { SelectQueryBuilder } from "typeorm";

interface PaginationInfo {
  pageSize: number;
  totalItems: number;
  pages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export class Paginator {
  static async paginate(queryBuilder: SelectQueryBuilder<any>, req: any) {
    // página atual
    const page = Number(req.query.page) || 1;

    // tamanho da páginas - numero de itens
    const pageSize = Number(req.query.pageSize) || 10;

    //deslocamento
    const offset = (page - 1) * page;

    // registros
    const records = await queryBuilder.skip(offset).take(pageSize).getMany();

    const totalItems = await queryBuilder.getCount();

    const pages = Math.ceil(totalItems / pageSize);

    const currentPage = offset / pageSize + 1;

    const hasNext = currentPage < pages;

    const hasPrev = currentPage > 1;

    const paginationInfo: PaginationInfo = {
      currentPage: page,
      pageSize: pageSize,
      totalItems,
      pages,
      hasNext,
      hasPrev,
    };

    return { records, paginationInfo };
  }
}
