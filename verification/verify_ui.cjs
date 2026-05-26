const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/screenshots/desktop_hero.png' });

  // Scroll to archive
  await page.evaluate(() => {
    const el = document.querySelector('.scene-container-exhibit');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/desktop_archive.png' });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'verification/screenshots/mobile_hero.png' });

  await page.evaluate(() => {
    const el = document.querySelector('.scene-container-exhibit');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/mobile_archive.png' });

  // Check for horizontal overflow on mobile
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Mobile horizontal overflow:', overflow);

  await browser.close();
})();
