// pages/HomePage.js
import { BasePage } from "./BasePage";

class SearchHeaderPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.searchIconButton = page.locator('button[aria-label="Поиск"]');
    this.searchInput = page.getByPlaceholder("Что вы ищете?");
    this.searchEnter = page.locator(".popup-search__input.input");
  }

  async gotoSearchHeaderPage() {
    await this.page.goto("https://www.tretyakovgallery.ru/");
  }
  searchData = async (searchTerm) => {
    await this.searchIconButton.click();
    await this.searchInput.fill(searchTerm);
    await this.searchEnter.press("Enter");
  };
}

module.exports = { SearchHeaderPage };
