// pages/HomePage.js
import { BasePage } from "./BasePage";

class ReplaySearchHeaderPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.ReplaySearchButton = this.page.getByPlaceholder("Что вы ищете?");
    this.ReplaySearchInput = this.page.getByPlaceholder("Что вы ищете?");
    this.ReplaySearchEnter = this.page.getByPlaceholder("Что вы ищете?");
    this.ReplaySearchСlear = this.page.locator("form").getByLabel("Поиск");
  }

  async gotoReplaySearchHeaderPage() {
    await this.page.goto(
      "https://www.tretyakovgallery.ru/search/?query=%D0%BF%D1%83%D1%88%D0%BA%D0%B8%D0%BD"
    );
  }
  replaySearchData = async (replaySearchTerm) => {
    await this.ReplaySearchButton.click();
    await this.ReplaySearchInput.fill(replaySearchTerm);
    await this.ReplaySearchEnter.press("Enter");
    await this.ReplaySearchСlear.click();
  };
}

module.exports = { ReplaySearchHeaderPage };
