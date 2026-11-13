// embed: audio
//
// A self-hosted audio clip with the browser's own player.
// Options: source (required), title, caption, credit, size (default: text), id
import { escapeHtml } from '../../lib/util.js';
import { wrap, errorBox } from '../../lib/html.js';

export function audioTag(ctx, source, extra = '') {
  return `<audio controls preload="metadata" ${extra}><source src="${escapeHtml(ctx.assetUrl(source))}">Your browser does not support audio.</audio>`;
}

export default {
  name: 'audio',
  aliases: ['sound', 'mp3'],
  description: 'A self-hosted audio clip with player controls',
  async render({ options: o }, ctx) {
    const source = o.source || o.src || o.file;
    if (!source) return errorBox('An audio embed needs a "source:" line, for example "source: interview.mp3".');
    const title = o.title ? `<p class="audio-player__title">${ctx.renderInline(o.title)}</p>` : '';
    const inner = `<div class="audio-player">${title}${audioTag(ctx, source)}</div>`;
    return wrap(ctx, { size: o.size, defaultSize: 'text', caption: o.caption, credit: o.credit, id: o.id, embedName: 'audio' }, inner);
  },
};
