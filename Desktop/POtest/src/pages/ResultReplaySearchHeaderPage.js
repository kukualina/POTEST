import { ReplaySearchHeaderPage } from "./ReplaySearchHeaderPage";

class ResultReplaySearchPage extends ReplaySearchHeaderPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.replaySearchResult = this.page.getByPlaceholder("Что вы ищете?");
    this.replayAllResultCount = this.page.locator(
      ".__active .search-categories__num"
    );
  }
}

module.exports = { ResultReplaySearchPage };
