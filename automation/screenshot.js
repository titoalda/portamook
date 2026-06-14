const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  // Set viewport to a good desktop size
  await page.setViewport({ width: 1440, height: 1080 });

  // Wait for the web server to be up
  let retries = 5;
  while (retries > 0) {
    try {
      await page.goto('http://localhost:8080/porta_cuadernos_de_identidad_baionesa.html', { waitUntil: 'networkidle2' });
      break;
    } catch (e) {
      console.log(`Waiting for server... ${retries} retries left`);
      await new Promise(r => setTimeout(r, 2000));
      retries--;
    }
  }
  // Auto-scroll to trigger IntersectionObserver animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          // Scroll back to top to ensure fixed elements reset if needed
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  // Wait a moment for any final CSS transitions to complete
  await new Promise(r => setTimeout(r, 1500));

  // Take the screenshot
  await page.screenshot({ path: '../screenshot.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved as screenshot.png');
})();
