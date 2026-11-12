// embed: image
//
// Options: source (required), alt, caption, credit, size, link, id
import { imageTag } from '../../lib/images.js';
import { wrap, errorBox, sizesAttr } from '../../lib/html.js';
import { escapeHtml } from '../../lib/util.js';

export default {
  name: 'image',
  aliases: ['photo', 'img'],
  description: 'A responsive photo or graphic from the assets folder',
  async render({ options: o }, ctx) {
    const source = o.source || o.src || o.file;
    if (!source) return errorBox('An image embed needs a "source:" line, for example "source: photo.jpg".');
    if (!o.alt) ctx.warn(`Image "${source}" has no alt: text. Screen readers need a short description of the picture.`);
    const img = await imageTag(ctx, source, { alt: o.alt || '', sizes: sizesAttr(ctx, o.size) });
    const inner = o.link ? `<a href="${escapeHtml(o.link)}">${img}</a>` : img;
    return wrap(ctx, { size: o.size, caption: o.caption, credit: o.credit, id: o.id, embedName: 'image' }, inner);
  },
};
