import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 390, 'height': 844})
        page = await context.new_page()

        # Start the dev server
        process = await asyncio.create_subprocess_exec(
            'npm', 'run', 'dev', '--', '--port', '3000',
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        await asyncio.sleep(5)  # Wait for server

        try:
            await page.goto('http://localhost:3000')
            await asyncio.sleep(2) # Wait for animations

            os.makedirs('verification/final_pass', exist_ok=True)

            # Capture core sections
            await page.screenshot(path='verification/final_pass/hero_revised.png')

            await page.evaluate("window.scrollTo(0, 1500)")
            await asyncio.sleep(1)
            await page.screenshot(path='verification/final_pass/pathways_revised.png')

            await page.evaluate("window.scrollTo(0, 4500)")
            await asyncio.sleep(1)
            await page.screenshot(path='verification/final_pass/cta_revised.png')

            print("Screenshots captured in verification/final_pass/")

        finally:
            process.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
