import { test, expect, defineConfig } from "@playwright/test";
import {
  ReplaySearchHeaderPage,
  ResultReplaySearchPage,
} from "../src/pages/index";
//import * as allure from "allure-js-commons";

const replaySearchTerm = "Италия";

test("Осуществить повторный поиск, с Popup", async ({ page }, testInfo) => {
  const replaySearchHeaderPage = new ReplaySearchHeaderPage(page);
  await replaySearchHeaderPage.gotoReplaySearchHeaderPage();
  const resultReplaySearchPage = new ResultReplaySearchPage(page);
  await replaySearchHeaderPage.replaySearchData(replaySearchTerm, {
    timeout: 90000,
  });
  await expect(resultReplaySearchPage.replaySearchResult).toHaveValue(
    replaySearchTerm,
    {
      timeout: 180000,
    }
  );

  const allResultCountValue =
    await resultReplaySearchPage.replayAllResultCount.evaluate((el) =>
      parseInt(el.textContent, 10)
    );
  console.log(allResultCountValue);
  await expect(allResultCountValue).toBeGreaterThan(0);

  await allure.step(
    "Поисковый запрос 'Италия' включен в строку url",
    {
      timeout: 180000,
    },
    async () => {
      const currentUrl = await page.url();
      console.log("Текущий URL:", currentUrl);
      await expect(currentUrl).toContain(
        "query=%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D1%8F"
      );
    }
  );
});
