/**
 * Generates a clean, modern WordPress screenshot.png (1200x900).
 * Uses HTML5 Canvas when available in the browser, with a fallback binary PNG for CLI.
 */

export async function generateScreenshot(tokens) {
  if (typeof document !== 'undefined') {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 900;
      const ctx = canvas.getContext('2d');

      // Clean off-white background
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, 1200, 900);

      // Card container in center
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      roundRect(ctx, 140, 120, 920, 660, 24);
      ctx.fill();
      ctx.stroke();

      // Top bar inside card
      ctx.fillStyle = '#f1f5f9';
      roundRect(ctx, 140, 120, 920, 70, 24, true);
      ctx.fill();

      // Window dots
      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath(); ctx.arc(180, 155, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(200, 155, 6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(220, 155, 6, 0, Math.PI * 2); ctx.fill();

      // Badge in header
      ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText('WORDPRESS THEME DEV', 780, 160);

      // WP Emblem circle
      ctx.fillStyle = '#2563eb';
      roundRect(ctx, 200, 240, 70, 70, 16);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('WP', 211, 288);

      // Theme Name
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 52px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(tokens.themeName, 200, 380);

      // Slug / Prefix pill
      ctx.fillStyle = '#eff6ff';
      ctx.strokeStyle = '#bfdbfe';
      ctx.lineWidth = 1;
      const slugText = `slug: ${tokens.slug}  •  prefix: ${tokens.functionPrefix}`;
      ctx.font = '500 18px monospace';
      const textWidth = ctx.measureText(slugText).width;
      roundRect(ctx, 200, 410, textWidth + 30, 40, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#1d4ed8';
      ctx.fillText(slugText, 215, 436);

      // Description
      ctx.fillStyle = '#475569';
      ctx.font = '400 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      wrapText(ctx, tokens.description, 200, 500, 780, 36);

      // Footer stats inside card
      ctx.fillStyle = '#64748b';
      ctx.font = '500 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(`By ${tokens.author}`, 200, 710);
      ctx.fillText(`v${tokens.version}`, 940, 710);

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      return blob;
    } catch (e) {
      console.warn('Canvas screenshot generation fallback:', e);
    }
  }

  // Base64 1x1 transparent PNG fallback if running in Node or canvas fails
  const fallbackBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  return fallbackBase64;
}

function roundRect(ctx, x, y, width, height, radius, topOnly = false) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  if (topOnly) {
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
  } else {
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  }
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = (text || '').split(' ');
  let line = '';
  let currentY = y;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
      if (currentY > y + lineHeight * 2) {
        ctx.fillText(line.trim() + '...', x, currentY);
        return;
      }
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
}
