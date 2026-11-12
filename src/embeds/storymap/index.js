// embed: storymap  (StoryMapJS by Knight Lab, self-hosted)
//
// Options: source (a .json file exported from the StoryMapJS authoring tool),
//          height (default 650), caption, credit, size, id
//          Other StoryMapJS options pass straight through (map_type, language...).
//
// Note: map tiles are streamed from OpenStreetMap at view time; everything
// else is served from this site.
import { isUrl, cssSize, jsonAttr, passthroughOptions } from '../../lib/util.js';
import { wrap, errorBox } from '../../lib/html.js';

const RESERVED = ['embed', 'type', 'source', 'src', 'file', 'height', 'size', 'caption', 'credit', 'id', 'width'];

export default {
  name: 'storymap',
  aliases: ['storymapjs'],
  description: 'StoryMapJS slide-driven map',
  vendor: [{ dir: 'storymapjs', css: ['css/storymap.css'], js: ['js/storymap-min.js'] }],
  async render({ options: o }, ctx) {
    const source = o.source || o.src || o.file;
    if (!source) return errorBox('A storymap needs a "source:" line pointing to a .json file in assets/.');
    const url = isUrl(source) ? source : ctx.assetUrl(source);
    const id = ctx.nextId('storymap');
    const config = { source: url, options: { ...passthroughOptions(o, RESERVED) } };
    const inner = `<div id="${id}" class="storymap-embed" data-embed="storymap" data-config='${jsonAttr(config)}' style="height:${cssSize(o.height, '650px')}"></div>`;
    return wrap(ctx, { size: o.size, caption: o.caption, credit: o.credit, id: o.id, embedName: 'storymap' }, inner);
  },
};
