import { test, expect, defineConfig } from "@playwright/test";
import {
  SearchHeaderPage,
  MainPage,
  ResultSearchPage,
} from "../src/pages/index";
//import * as allure from "allure-js-commons";

const searchTerm = "Пушкин";

test("Осуществить поиск с главной страницы", async ({ page }, testInfo) => {
  const searchHeaderPage = new SearchHeaderPage(page);
  await searchHeaderPage.gotoSearchHeaderPage();
  const resultSearchPage = new ResultSearchPage(page);
  await searchHeaderPage.searchData(searchTerm, { timeout: 90000 });
  await expect(resultSearchPage.searchResult).toHaveValue(searchTerm, {
    timeout: 180000,
  });

  const allResultCountValue = await resultSearchPage.allResultCount.evaluate(
    (el) => parseInt(el.textContent, 10)
  );
  console.log(allResultCountValue);
  await expect(allResultCountValue).toBeGreaterThan(0);
  await allure.step(
    "Поисковый запрос 'Пушкин' включен в строку url",
    {
      timeout: 180000,
    },
    async () => {
      const currentUrl = await page.url();
      console.log("Текущий URL:", currentUrl);
      await expect(currentUrl).toContain(
        "query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD"
      );
    }
  );
});
