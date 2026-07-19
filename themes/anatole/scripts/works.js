/* global hexo */
'use strict';

const fs = require('fs');
const path = require('path');

// 由目录名哈希出 0-360 的色相，让每个作品都有稳定的"代表色"
function hashHue(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h % 360;
}

// 扫描 source/works/ 下的作品目录（index.md 为橱窗页本身，自动跳过），生成作品列表。
// 目录内必须含 index.html；可选：
//   meta.json -> { "title", "desc", "date", "tags", "hue" }
//   cover.{png,jpg,jpeg,webp,gif} -> 封面图（缺省时用程序化渐变封面）
hexo.extend.helper.register('works_slides', function () {
  const slidesDir = path.join(hexo.source_dir, 'works');
  if (!fs.existsSync(slidesDir)) return [];

  return fs.readdirSync(slidesDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => {
      const dir = path.join(slidesDir, d.name);
      const indexFile = path.join(dir, 'index.html');
      if (!fs.existsSync(indexFile)) return null;

      let meta = {};
      const metaFile = path.join(dir, 'meta.json');
      if (fs.existsSync(metaFile)) {
        try {
          meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
        } catch (e) {
          hexo.log.warn(`[works] ${d.name}/meta.json 解析失败: ${e.message}`);
        }
      }

      let title = meta.title;
      if (!title) {
        const html = fs.readFileSync(indexFile, 'utf8');
        const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        title = m && m[1].trim() ? m[1].trim() : d.name;
      }

      let cover = null;
      for (const ext of ['png', 'jpg', 'jpeg', 'webp', 'gif']) {
        if (fs.existsSync(path.join(dir, `cover.${ext}`))) {
          cover = `/works/${d.name}/cover.${ext}`;
          break;
        }
      }

      return {
        slug: d.name,
        title,
        desc: meta.desc || '',
        date: meta.date ? new Date(meta.date) : fs.statSync(indexFile).mtime,
        tags: Array.isArray(meta.tags) ? meta.tags : [],
        hue: Number.isFinite(meta.hue) ? meta.hue : hashHue(d.name),
        cover
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.date - a.date);
});
