/**
 * IndexNow Notification Script
 *
 * Run after deployment to notify Bing/Yandex/other IndexNow-compatible
 * search engines about updated URLs.
 *
 * Usage:
 *   node scripts/notify-indexnow.mjs
 *
 * You can also add this to your Vercel deploy hook or CI/CD pipeline.
 */

const INDEXNOW_KEY = 'ladestack-indexnow-key';
const HOST = 'ladestack.in';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

const urls = [
  `https://${HOST}`,
  `https://${HOST}/about`,
  `https://${HOST}/projects`,
  `https://${HOST}/blog`,
  `https://${HOST}/apps`,
  `https://${HOST}/docs`,
  `https://${HOST}/contact`,
  `https://${HOST}/support`,
  `https://${HOST}/file-sharing-platform`,
  `https://${HOST}/ai-code-viewer-ai`,
  `https://${HOST}/api-testing-platform`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

async function notifyIndexNow() {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log(`Notifying IndexNow about ${urls.length} URLs...`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    if (response.ok || response.status === 202) {
      console.log(`IndexNow notification successful (${response.status})`);
    } else {
      const text = await response.text();
      console.error(`IndexNow notification failed (${response.status}): ${text}`);
    }
  } catch (error) {
    console.error('IndexNow notification error:', error.message);
  }
}

notifyIndexNow();
