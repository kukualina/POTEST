// mainPage.js
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchIconHeader = page.getByLabel("Поиск");
  }
  async serchButton() {
    await this.searchIconHeader.click();
  }
}

module.exports = { MainPage };
