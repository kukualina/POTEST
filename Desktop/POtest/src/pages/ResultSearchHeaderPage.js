import { SearchHeaderPage } from "./SearchHeaderPage";

class ResultSearchPage extends SearchHeaderPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.searchResult = this.page.getByPlaceholder("Что вы ищете?");
    this.allResultCount = this.page.locator(
      ".__active .search-categories__num"
    );
  }
}

module.exports = { ResultSearchPage };
