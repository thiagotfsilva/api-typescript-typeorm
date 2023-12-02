import HttpErro from "./HttpErro";

export class PagNotFoundError extends HttpErro {
  constructor() {
    super("Page not found", 404);
  }
}
