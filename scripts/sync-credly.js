import fs from 'fs';
import path from 'path';
import https from 'https';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CREDLY_USERNAME = 'tharsan1305';
const CREDLY_URL = `https://www.credly.com/users/${CREDLY_USERNAME}/badges.json`;
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'credlyBadges.json');

console.log(`[Credly Sync] Fetching badges for user: ${CREDLY_USERNAME}...`);

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json'
  }
};

https.get(CREDLY_URL, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`[Credly Sync] Failed with HTTP status ${res.statusCode}`);
    process.exit(0); // Exit smoothly so build doesn't break if Credly is temporarily unavailable
  }

  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {
    try {
      const json = JSON.parse(rawData);
      const badges = (json.data || []).map((b) => {
        const issuerName =
          b.badge_template?.issuer?.entities?.[0]?.entity?.name ||
          b.badge_template?.issuer?.name ||
          'Verified Issuer';

        // Optimize image URL to 680x680 resolution if available
        let imageUrl = b.badge_template?.image?.url || '';
        if (imageUrl.includes('/images/')) {
          imageUrl = imageUrl.replace('/images/images/', '/images/');
          if (!imageUrl.includes('/size/')) {
            imageUrl = imageUrl.replace('https://images.credly.com/images/', 'https://images.credly.com/size/680x680/images/');
          }
        }

        return {
          id: b.id,
          title: b.badge_template?.name || 'Verified Badge',
          issuer: issuerName,
          image: imageUrl,
          credentialUrl: `https://www.credly.com/badges/${b.id}/public_url`,
          issuedAt: b.issued_at_date || null,
          expiresAt: b.expires_at_date || null,
          alt: `${b.badge_template?.name || 'Credential'} Badge`
        };
      });

      // Also ensure accredited badges like ISC2 Candidate are included if not yet indexed in Credly's public profile JSON
      const existingBadgeUrls = new Set(badges.map((b) => b.credentialUrl));
      if (!existingBadgeUrls.has('https://www.credly.com/badges/3c8c1446-a14e-41ab-aea5-d899194d9afa/public_url')) {
        badges.push({
          id: '3c8c1446-a14e-41ab-aea5-d899194d9afa',
          title: 'ISC2 Candidate',
          issuer: 'ISC2',
          image: 'https://images.credly.com/size/680x680/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png',
          credentialUrl: 'https://www.credly.com/badges/3c8c1446-a14e-41ab-aea5-d899194d9afa/public_url',
          issuedAt: '2026-06-01',
          expiresAt: null,
          alt: 'ISC2 Candidate Badge'
        });
      }

      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(badges, null, 2), 'utf8');
      console.log(`[Credly Sync] Successfully synced ${badges.length} badges to ${OUTPUT_FILE}`);
    } catch (err) {
      console.error('[Credly Sync] Error parsing JSON:', err.message);
    }
  });
}).on('error', (err) => {
  console.warn('[Credly Sync] Network request warning:', err.message);
  // Continue gracefully
});
