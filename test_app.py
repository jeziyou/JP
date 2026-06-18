from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/homepage.png', full_page=True)
    print("Homepage screenshot saved")

    # Click on reading page
    page.click('text=読解練習')
    page.wait_for_load_state('networkidle')
    page.screenshot(path='/tmp/reading_page.png', full_page=True)
    print("Reading page screenshot saved")

    # Count articles
    articles = page.locator('button:has-text("MATCHA")').all()
    print(f"Found {len(articles)} MATCHA related elements")

    # Get page title
    title = page.title()
    print(f"Page title: {title}")

    browser.close()
