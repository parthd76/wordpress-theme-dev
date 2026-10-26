/**
 * Generates a valid WordPress screenshot.png (1200x900).
 * Uses HTML5 Canvas when available in the browser, with a fallback binary PNG for CLI.
 */

export async function generateScreenshot(tokens) {
  if (typeof document !== 'undefined') {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 900;
      const ctx = canvas.getContext('2d');

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 900);
      bgGrad.addColorStop(0, '#0f172a');
      bgGrad.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 900);

      // Decorative glow circles
      const glow1 = ctx.createRadialGradient(250, 250, 50, 250, 250, 450);
      glow1.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
      glow1.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = glow1;
      ctx.beginPath();
      ctx.arc(250, 250, 450, 0, Math.PI * 2);
      ctx.fill();

      const glow2 = ctx.createRadialGradient(950, 650, 50, 950, 650, 450);
      glow2.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
      glow2.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = glow2;
      ctx.beginPath();
      ctx.arc(950, 650, 450, 0, Math.PI * 2);
      ctx.fill();

      // Card mock preview in center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 2;
      roundRect(ctx, 160, 140, 880, 620, 24);
      ctx.fill();
      ctx.stroke();

      // Header bar inside card
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      roundRect(ctx, 160, 140, 880, 80, 24, true);
      ctx.fill();

      // Window dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(205, 180, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath(); ctx.arc(230, 180, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#10b981';
      ctx.beginPath(); ctx.arc(255, 180, 7, 0, Math.PI * 2); ctx.fill();

      // Theme Dev badge
      ctx.font = '600 18px sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('WORDPRESS THEME DEV', 680, 186);

      // Theme Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 56px sans-serif';
      ctx.fillText(tokens.themeName, 220, 340);

      // Theme Slug / Prefix pill
      ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
      roundRect(ctx, 220, 375, ctx.measureText(tokens.slug).width + 36, 40, 8);
      ctx.fill();
      ctx.fillStyle = '#818cf8';
      ctx.font = '500 18px monospace';
      ctx.fillText(tokens.slug, 238, 401);

      // Description
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 24px sans-serif';
      wrapText(ctx, tokens.description, 220, 470, 740, 36);

      // Footer stats inside card
      ctx.fillStyle = '#64748b';
      ctx.font = '500 20px sans-serif';
      ctx.fillText(`By ${tokens.author}`, 220, 700);
      ctx.fillText(`v${tokens.version}`, 880, 700);

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
