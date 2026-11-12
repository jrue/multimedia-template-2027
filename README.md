# Multimedia Story Template 2027

This is a website template for publishing a single, long-form multimedia story. It has a full-screen opener, a narrow reading column, and rich media that breaks out of the text column (photos, charts, videos, timelines, before/after sliders, maps, scroll-driven sequences and pop-ups).

Students write their story in **one Markdown file (`content.md`)** and include any embedded multimedia, and tweak the look in **one settings file (`settings.toml`)**. Every time students save a commit, GitHub rebuilds the website and publishes it on GitHub Pages. No coding, no software to install.

A more user-friendly option allows students to upload `content.md` to Google Docs, make the document public, and paste in the document URL in their `settings.toml` file. This site will fetch the live page and build the site directly from the Google Doc version. Each time it will saves a `content.remote.md` and uses that instead, including whenver the Google Doc fetch fails. 

It's recommended beginning students use **Google Docs** to edit the `content.md` file (yes, really), since Google Docs has a special markdown editing mode, and this will prevent mistakes and clearly delineate multimedia embed elements as code blocks. 

Students who want a more seemless editing experience can open this project in Github Codespaces and activate the node server with `npm start` and see a live preview of the site as they make tweaks. (More advanced students can also clone this repo locally and do the same thing on their laptops). 

The live website only updates whenver a commit is made. Students can view the process under the `Actions` menu. 

---

## Contents

1. [How it works](#1-how-it-works)
2. [Getting started on GitHub](#2-getting-started-on-github)
3. [Writing in Google Docs](#3-writing-in-google-docs)
4. [The settings file: settings.toml](#4-the-settings-file-settingstoml)
5. [The story file: content.md](#5-the-story-file-contentmd)
6. [Every embed type](#6-every-embed-type)
7. [Photos and video: sizes and limits](#7-photos-and-video-sizes-and-limits)
8. [Fonts](#8-fonts)
9. [Custom styles](#9-custom-styles)
10. [Previewing on your own computer (Advanced)](#10-previewing-on-your-own-computer-advanced)
11. [Editing in the browser with GitHub Codespaces](#11-editing-in-the-browser-with-github-codespaces)
12. [Troubleshooting](#12-troubleshooting)
13. [For developers: how the template is built](#13-for-developers-how-the-template-is-built)
14. [Free GitHub for students](#14-free-github-for-students)
15. [Credits and licenses](#15-credits-and-licenses)

---

## 1. How it works

You only ever touch three things:

| What | Where | Purpose |
|---|---|---|
| **content.md** | top of the repository | The story: text and embeds, written in Markdown. |
| **settings.toml** | top of the repository | Title, tagline, byline, fonts, colors, sizes, opener image. Students can edit this directly. |
| **assets/** | a folder in this repo | Where to place your photos, videos, timeline and map data files (25MiB max filesize for each individual file) |
| **custom.css** | top of the repository | Optional: your own styling tweaks |

When you save (commit) a change on GitHub, a **GitHub Action** builds the website from those three things and publishes it. It takes about one minute. You can watch it work under the **Actions** tab.

The address of your site will be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`.

---

## 2. Getting started on GitHub

### Step 1. Make your own copy

1. Sign in to your own GitHub account.
2. At the top of this template's page, click the green **Use this template** button, then **Create a new repository**.
3. Give it a short name with no spaces, for example `bart-story` (if you were doing a story on BART). This name becomes part of your web address and is public.
4. Leave it **Public** (GitHub Pages is free for public repositories).
5. Click **Create repository**.

### Step 2. Turn on GitHub Pages

The build tries to switch this on by itself the first time it runs. If your site does not appear after a few minutes, do it by hand:

1. In your new repository click **Settings** (the tab with a gear icon).
2. In the left menu click **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to the **Actions** tab, click the newest run, and if it failed click **Re-run all jobs**.

### Step 3. Find your site

Open the **Actions** tab. When the latest run has a green check mark, click it. The web address of your site is shown in the **deploy** box. It is also listed on **Settings > Pages**.

### Step 4.A Edit the story (on Github.com)

1. On your repository's main page click **content.md**.
2. Click the **pencil icon** (Edit this file) near the top right.
3. Make your changes.
4. Click **Commit changes...**, then **Commit changes** again.
5. Wait about a minute, then reload your site.

Do the same with **settings.toml** to change the title, colors or fonts.

### Step 4.B Edit the story (In Google docs)

1. On your repository's main page click **content.md**.
2. Click the **download icon** (Download raw file) near the top right of the file. The file `content.md` lands in your Downloads folder.
3. Go to [drive.google.com](https://drive.google.com) and click **New > File upload**. Choose `content.md`. **Do not** convert it to a standard Google Doc, keep it in the "MD" (Markdown) format. You can edit it just like any other Google Doc, but there will be fewer formatting options available to you.
4. In Google Docs click **Share**, set **General access** to **Anyone with the link** (Viewer is enough), and click **Copy link**.
5. In GitHub open **settings.toml** and paste the link between the quotes on the `content_url` line:

   ```toml
   content_url = "https://docs.google.com/document/d/1AbC.../edit?usp=sharing"
   ```

6. Commit the change. From now on every build downloads the doc and ignores `content.md`.
7. **After you edit the doc, rebuild.** Google does not tell GitHub when the doc changes, so:

- On GitHub: open the **Actions** tab, click **Build and deploy to GitHub Pages** in the left list, click **Run workflow**, then the green **Run workflow** button. The site updates in a minute or two.
- In Codespaces (or `npm start` on your computer): click the **Re-download Google Doc** button in the corner of the preview, or click in the terminal and press **Enter**. The preview refreshes with the new text.


### Step 5. Add your photos and videos

1. Open the **assets** folder in your repository.
2. Click **Add file > Upload files**.
3. Drag your files into the box, then click **Commit changes**.
4. Refer to a file by its name in content.md or settings.toml, for example `source: my-photo.jpg`. If you put it inside a sub-folder, include the folder: `source: photos/my-photo.jpg`.

File names are **case-sensitive**: `Photo.JPG` and `photo.jpg` are different files. Keep names simple: lowercase letters, numbers and dashes.

Size limits: the GitHub web uploader refuses files over **25 MB**, and GitHub refuses any file over **100 MB**. See [section 7](#7-photos-and-video-sizes-and-limits) for how to keep videos small.

---

### Step 6. Add embeds as code blocks

Every photo, chart, video, timeline or other media element is a **code block**. In Google Docs:

1. Put the cursor on an empty line.
2. Choose **Insert > Building blocks > Code block** (any language is fine; the template ignores it).
3. Type the embed's option lines and paste the embed code, exactly as shown in [section 6](#6-every-embed-type).

Code blocks are the one part of a Google Doc that is never "helpfully" reformatted, which is why the template uses them: curly quotes, auto-capitalization and auto-links do not happen inside them. Even if a quote mark does become curly, the template straightens it.

**Good to know**

- Each successful download from Google Docs is saved in the repository as `content.remote.md` (GitHub commits it for you). If Google is ever unreachable or the doc is deleted, the site keeps building from that last good copy and the build log says so.
- To go back to editing `content.md` on GitHub, empty the `content_url` line (`content_url = ""`).
- Anyone who has the link can read the doc, and the link is in your public repository. Keep anything private out of the doc.
- The doc's hidden note at the top (between `<!--` and `-->`) still shows as text in Google Docs. Deleting it is fine.
- Comments you add in Google Docs are stripped out and never appear on the site.
- A blank line in the doc becomes a blank line on the page, so you can space things out the way you like.
- A picture pasted straight into the doc does appear on the site. The build saves it as a file in `assets/pasted/` and the build log tells you its name, so you can give it a caption and a description by switching to an image embed with that file name. Pasting is fine for a quick look, but an image embed is better for anything you care about.
- Checklists show as bullets with a box. Equations show as typed, with their `$` signs.
- If you type Markdown such as `**bold**` and Google Docs converts it, good. If you undo that conversion, Google marks the text as literal and it shows on the site exactly as typed, asterisks and all. Let Docs do the converting.
- The one exception is a typed image, `![description](https://example.com/photo.jpg)`, which Docs cannot show. The site turns it into an image anyway, with the description as alt text, at the default large size. Add `{.framed}` right after it to give it a class from custom.css. For local photos, use an image embed as usual.
- Tables work, including a picture inside a cell. They get the Bootstrap classes from `table_classes` in settings.toml.

Things that do not survive the trip: pictures pasted into the Google Doc (upload them to **assets/** instead and use an image embed), colored text, and fonts chosen in Google Docs (fonts come from settings.toml).

---

## 4. The settings file: settings.toml

Open `settings.toml` and change the values on the right of each `=`. Keep text inside straight double quotes. Lines starting with `#` are comments. Any setting you delete falls back to a sensible default.

### [site]

| Setting | What it does |
|---|---|
| `title` | The headline of the story. Shown in the opener and in the browser tab. |
| `tagline` | One to three sentences shown under the title. |
| `byline` | For example `"By Jane Doe"`. Shown above the first paragraph. Leave as `""` to hide. |
| `date` | Written however you like, e.g. `"March 3, 2027"`. Leave as `""` to hide. |
| `description` | A one-sentence summary for search engines and social media previews. |
| `language` | Two-letter language code, normally `"en"`. |
| `base_url` | Optional. The full address of the published story, used for social media previews. Example: `"https://jane.github.io/bart-story"`. |
| `share_image` | Optional. Image for social media previews. Defaults to the opener image. |
| `favicon` | Optional. A small square image for the browser tab, e.g. `"favicon.png"`. |
| `footer` | Small text at the bottom of the page. Markdown links work. |
| `content_url` | Optional. A Google Docs share link. When set, the story is downloaded from that doc at build time instead of using content.md. See [Link the Google Doc](#or-skip-the-round-trip-link-the-google-doc). |

### [opener]

| Setting | What it does |
|---|---|
| `background` | File name of the hero image (`.jpg`, `.png`) **or** a short silent video (`.mp4`). The template looks at the file extension to decide which. |
| `poster` | A still image shown while a background video loads, and on phones that block video. Strongly recommended when `background` is a video. |
| `background_position` | Which part of the picture to keep when the screen is narrow: `"center"`, `"top"`, `"bottom"`, `"left"`, `"right"`, or a pair like `"30% 60%"`. |
| `screen_color` | Color of the tinted layer between the image and the text, e.g. `"#000000"`. |
| `screen_opacity` | How strong the tint is: `0` is invisible, `1` hides the image. `0.45` is a good start. |
| `align` | Where the title sits, one of nine spots: `"top-left"`, `"top-center"`, `"top-right"`, `"middle-left"`, `"middle-center"`, `"middle-right"`, `"bottom-left"`, `"bottom-center"`, `"bottom-right"`. |
| `title_font` | Font family name for the title (see [Fonts](#8-fonts)). |
| `title_size` | Size of the title on large screens, e.g. `"5.5rem"`. It shrinks automatically on phones. |
| `title_weight` | `700` for bold, `400` for regular. |
| `title_color` | Color of the title, e.g. `"#ffffff"`. |
| `hide_title` | `true` hides the title visually (useful when the title is already drawn into the image) but keeps it in the page for search engines and screen readers. |
| `tagline_font`, `tagline_size`, `tagline_color` | Same idea, for the tagline. |
| `text_shadow` | `true` adds a soft shadow behind the text to lift it off the image. |
| `max_width` | Widest the title block may grow. `"75vw"` is three quarters of the screen width; `"50rem"` is a fixed width. |
| `height` | `"100vh"` fills the whole screen. `"75vh"` fills three quarters. |
| `scroll_indicator` | `true` shows the gently bouncing arrow at the bottom. |
| `scroll_indicator_color` | Color of that arrow. Leave `""` to match the title color. |

### [text]

| Setting | What it does |
|---|---|
| `font` | Font family for body text. |
| `heading_font` | Font family for sub-headings (and the default for pull quotes). |
| `secondary_font` | Font family for small text: captions, byline, dateline, footer, and the text inside timelines and story maps. Usually a sans-serif such as `"Source Sans 3"`. |
| `font_size` | Body text size, e.g. `"1.3rem"`. |
| `line_height` | Space between lines, e.g. `1.6`. |
| `color` | Body text color. |
| `background` | Page background color. |
| `heading_color` | Sub-heading color. Leave `""` to match the text. |
| `link_color` | Link color. Also the default for the quotation bar and buttons. |
| `max_width` | Width of the reading column, e.g. `"40rem"` (about 8 to 12 words per line). |
| `paragraph_spacing` | Space between paragraphs, e.g. `"1.3em"`. |
| `blockquote_color` | Color of the bar beside indented quotations. |
| `pullquote_font`, `pullquote_size`, `pullquote_color` | Styling for pull quotes. |
| `table_classes` | Bootstrap classes added to every table, default `"table table-bordered"`. Add `table-striped`, `table-hover` or `table-sm`, or use `"table"` alone for plain lines. |

### [embeds]

| Setting | What it does |
|---|---|
| `gutter` | Vertical breathing room above and below every embed, e.g. `"3rem"`. |
| `large_scale` | How much wider than the text column a `large` embed is. `1.6` means 1.6 times the text width. |
| `caption_font`, `caption_size`, `caption_color` | Styling for captions and credits. Leave `caption_font` empty to use `secondary_font`. |
| `button_color` | Color of pop-up buttons. Leave `""` to use `link_color`. |
| `trusted_script_domains` | A list of websites whose embed codes may run JavaScript on your page (Datawrapper, Flourish, and so on). If an embed from a new service does not work and the build warns that a script was removed, add that service's domain here. |

### [fonts]

Font files in the `fonts/` folder are detected automatically. See [Fonts](#8-fonts).

---

## 5. The story file: content.md

### Plain writing

`content.md` is Markdown, the same lightweight formatting Google Docs, Reddit, Slack and many other tools use:

```
## A sub-heading

A paragraph. Leave an empty line between paragraphs. Use *italics* and **bold**.
A [link](https://example.com) looks like this.

> An indented quotation. Good for a sentence or two someone said.

- a bulleted
- list

---

Three dashes on their own line make a short horizontal rule, for a section break.
```

Standard Markdown images (`![description](photo.jpg)`) also work, but the image embed in the next section gives you captions, credits and sizes, so prefer that.

Notes to yourself go between `<!--` and `-->`. They never appear on the website.

### The one rule for media: it goes in a code block

Anything that is not plain text (a photo, a chart, a video, a timeline, a map, a pop-up) goes inside a **code block**: a line with three backticks, then the embed, then another line with three backticks. In Google Docs, use **Insert > Building blocks > Code block** instead of typing the backticks.

````
embed: image
source: my-photo.jpg
alt: A silver train on an elevated track at dusk
caption: The first train of the day leaves the yard.
credit: Photo by Jane Doe
````

### Options: `key: value` lines

The first lines of a code block are **options**: a lowercase word, a colon, a space, then the value. Options always come first, one per line. The first line that is not an option starts the **body** of the block (embed code, or the text of a quote).

```
embed: pullquote          <- which kind of embed this is
cite: Jane Doe            <- an option
                          <- a blank line ends the options
The quote itself goes here, as ordinary text.
```

Rules of thumb:

- If a block starts with `<` (pasted embed code), you can leave out the `embed:` line. It is treated as HTML.
- Keep keys lowercase. `Caption:` is not an option, `caption:` is.
- Values do not need quote marks.
- You can leave out any option you do not need.

### Options that work on every embed

| Option | What it does |
|---|---|
| `size` | How wide the embed is. See below. |
| `caption` | Text shown under the embed. Markdown works (`*italics*`, links). |
| `credit` | Shown after the caption in a lighter color, e.g. `Photo by Jane Doe`. |
| `id` | A name for this embed so you can link to it (`[see the chart](#my-chart)`) or style it in custom.css (`#my-chart img { ... }`). |
| `class` | One or more class names, separated by spaces, for styling in custom.css. See [Custom styles](#9-custom-styles). |
| `style` | CSS written straight onto the embed's wrapper, for a one-off tweak: `style: border-top: 2px solid #c00; padding-top: 1rem`. |

### Sizes

The reading column is narrow. Media can be wider. The `size` option takes one of four forms:

| `size:` | Result |
|---|---|
| `full` | Edge to edge of the browser window, no matter how big the screen. |
| `large` | **The default.** Wider than the text (1.6 times by default; change `large_scale` in settings.toml). |
| `text` | Exactly as wide as the text column. |
| a number, e.g. `130` | A percentage of the text width: `100` equals `text`, `130` is 30 percent wider, `200` is twice as wide. The browser window is the limit. |

On phones every size becomes edge to edge, with the text keeping a small margin.

---

## 6. Every embed type

The sample `content.md` contains a working example of each of these. Copy, paste, and change the file names.

### Embed code from another website (`html`)

For Datawrapper, Flourish, Infogram, Google Maps, Google Charts, YouTube, Vimeo, SoundCloud, social media posts, and anything else that gives you a snippet of HTML. Paste the snippet as the body of the block.

````
caption: Ridership by year.
credit: Chart: Jane Doe, Source: BART
<iframe title="Ridership" aria-label="Interactive line chart" id="datawrapper-chart-abc123" src="https://datawrapper.dwcdn.net/abc123/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="400"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>
````

A YouTube video:

````
size: large
caption: Interview with the station manager.
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
````

| Option | What it does |
|---|---|
| `resize` | By default a pasted iframe is stretched to the embed's width, keeping its proportions. `resize: false` (or `resize: no`) keeps the exact width and height from the pasted code instead. |
| `aspect` | Shape of the box the embed scales inside: `16x9`, `4x3`, `1x1`, `21x9` or any `WxH` like `3x2`. You rarely need it: YouTube and Vimeo get `16x9`, and an iframe with `width="640" height="480"` attributes (Google My Maps, Google Forms) keeps those proportions automatically. Use `aspect: none` to leave the embed code exactly as pasted. |

When pasting from Datawrapper choose **Embed with responsive iframe**. From Flourish, use the embed code that includes a `<script>` tag.

Scripts are only allowed from the websites listed under `trusted_script_domains` in settings.toml. The common services are already listed. If a script gets removed, the build log (Actions tab) says so, and you can add the domain.

### Photo (`image`)

````
embed: image
source: photos/platform.jpg
alt: Commuters waiting on a crowded platform
caption: Rush hour at 19th Street.
credit: Photo by Jane Doe
size: full
````

| Option | What it does |
|---|---|
| `source` | File in `assets/`. Required. |
| `alt` | A short description of what is in the picture, for people who cannot see it. Please always fill this in. |
| `link` | Optional web address the picture links to. |
| `size`, `caption`, `credit`, `id` | As above. |

The template creates several sizes of each picture automatically. Upload the biggest version you have (up to about 2500 pixels wide).

### Video with controls (`video`)

For short clips you host yourself. For anything longer than a minute or two, upload to YouTube or Vimeo and use their embed code instead (see [section 7](#7-photos-and-video-sizes-and-limits)).

````
embed: video
source: clips/doors-closing.mp4
poster: clips/doors-closing.jpg
caption: The doors close on a departing train.
credit: Video by Jane Doe
````

| Option | What it does |
|---|---|
| `source` | An `.mp4` file in `assets/`. Required. |
| `poster` | A still image shown before play. |
| `autoplay` | `true` makes it play silently in a loop, like a GIF. |
| `loop`, `muted`, `controls` | `true` or `false`. Controls are on unless `autoplay` is on. |

### Pull quote (`pullquote`)

A big quotation lifted out of the story.

````
embed: pullquote
cite: Jane Doe, station manager

We never expected the train to leave on its own.
````

| Option | What it does |
|---|---|
| `cite` | Who said it. Optional. |
| `size` | Defaults to `large`. |

### Pop-up window (`modal`)

A button (and/or a link in your text) that opens a window with a video, picture or embed. Video stops when the window closes.

````
embed: modal
id: breakaway
label: Watch the video
title: Inside the runaway car
video: clips/breakaway.mp4
poster: clips/breakaway.jpg
````

Then anywhere in your text you can also write `[watch the video](#modal:breakaway)` to open the same pop-up from a link. The part after `#modal:` must match the `id`.

| Option | What it does |
|---|---|
| `id` | A short name with no spaces. Needed for links. |
| `label` | Text on the button. Leave it out for no button (link only). |
| `title` | Heading inside the pop-up. Optional. |
| `video` | An `.mp4` file to show. |
| `poster` | Still image for the video. |
| `image` + `alt` | Show a picture instead of a video. |
| (body) | Instead of `video` or `image`, paste embed code (e.g. a YouTube iframe) below the options. It is loaded only when the pop-up opens and unloaded when it closes. |
| `width` | `large` (default), `xl`, or `fullscreen`. |
| `autoplay` | `false` to make the viewer press play. |

### Timeline (`timeline`, TimelineJS)

Two ways to supply the data:

- **Google Sheet (easiest).** Make your timeline with the [TimelineJS Google Sheet template](https://timeline.knightlab.com/#make): fill in the sheet, then choose **File > Share > Publish to web** and click **Publish**. Paste the sheet's normal web address (the one in your browser's address bar) as `source`. The timeline is then read live from Google every time someone views the story, so the sheet must stay published.
- **JSON file (fully self-contained).** Write the events in a `.json` file in `assets/`, following the sample `assets/timeline.json` and the [TimelineJS JSON format](https://timeline.knightlab.com/docs/json-format.html). Nothing outside your repository is needed.

````
embed: timeline
source: timeline.json
height: 650
caption: Key moments, 2024 to 2026.
credit: Timeline: Jane Doe
````

| Option | What it does |
|---|---|
| `source` | A `.json` file in `assets/` or a published Google Sheet link. Required. |
| `height` | Height in pixels. Default `650`. |
| any TimelineJS option | For example `start_at_end: true`, `timenav_position: top`, `initial_zoom: 2`. See the [TimelineJS options](https://timeline.knightlab.com/docs/options.html). |

Images referenced inside the JSON file should be written as `assets/filename.jpg`.

### Before / after slider (`juxtapose`, JuxtaposeJS)

Two pictures of the same scene, with a handle to drag between them. Both pictures should have the same proportions.

````
embed: juxtapose
left: station-1990.jpg
right: station-2026.jpg
left_label: 1990
right_label: 2026
start: 50
caption: The station entrance, then and now.
credit: Photos: BART archive, Jane Doe
````

| Option | What it does |
|---|---|
| `left`, `right` | Image files in `assets/`. `before` and `after` also work. Required. |
| `left_label`, `right_label` | Labels in the corners. |
| `start` | Where the handle starts, 0 to 100. Default `50`. |
| `orientation` | `horizontal` (default) or `vertical`. |
| `animate` | `false` to turn off the slide animation. |

### Story map (`storymap`, StoryMapJS)

1. Build your map in the [StoryMapJS authoring tool](https://storymap.knightlab.com/) and click **Publish changes**.
2. Click **Share** and copy the share link. It looks like `https://uploads.knightlab.com/storymapjs/LONG-ID/your-map-name/index.html`.
3. Change `index.html` at the end of that link to `published.json`, open the new link in your browser, and save the page as `storymap.json` (File > Save Page As). Put it in `assets/`.
4. Images inside that file still point to Knight Lab's servers. For a fully self-contained story, upload the pictures to `assets/` and change the `url` values in the JSON to `assets/filename.jpg`. The sample `assets/storymap.json` shows the format.

````
embed: storymap
source: storymap.json
height: 600
caption: Every stop on the runaway car's route.
````

| Option | What it does |
|---|---|
| `source` | A `.json` file in `assets/`. Required. |
| `height` | Height in pixels. Default `650`. |

Map tiles are loaded from OpenStreetMap while the reader views the page; everything else is served from your site. Images referenced inside the JSON should be written as `assets/filename.jpg`.

### Scroll stepper (`scrolly`)

A full-screen picture or video sticks in place while short text cards scroll over it. Each card can swap in a new background. When the last card passes, the whole thing scrolls away.

````
embed: scrolly
position: right

---
background: scrolly/01.jpg
alt: A train on an elevated track at dusk

**The car left the yard at 4:12 a.m.** Nobody was aboard.

---
background: scrolly/02.mp4

Security video shows it rolling through the first station.

---
background: scrolly/03.jpg
position: left

This card sits on the left instead.
````

Steps are separated by a line of three dashes. Each step has its own options followed by the card text (Markdown works inside cards). A step with no text just shows its background.

| Section option | What it does |
|---|---|
| `position` | Where cards sit on wide screens: `left`, `center` or `right` (default). On phones they are always centered. |
| `fit` | `cover` (fill the screen, default) or `contain` (show the whole picture). |
| `card_background`, `card_color`, `card_width` | Card styling, e.g. `rgba(0,0,0,0.7)`, `#ffffff`, `30rem`. |

| Step option | What it does |
|---|---|
| `background` | Image or `.mp4` for this step. Leave it out to keep the previous background. (`image:` and `video:` also work.) |
| `alt` | Description of the image. |
| `position` | Override the card position for this step. |

### Scroll-driven video (`scrollvideo`)

The video sticks to the screen and plays forward as the reader scrolls down (and backward as they scroll up). Text cards can float over it at chosen points.

````
embed: scrollvideo
source: scroll-video.mp4
poster: scroll-video-poster.jpg
length: 5

---
at: 15

**The video only moves when you scroll.**

---
at: 50
position: left

Halfway through.

---
at: 85

Almost there.
````

| Option | What it does |
|---|---|
| `source` | An `.mp4` in `assets/`. Required. Keep it short (10 to 30 seconds). |
| `poster` | Still image shown before the video is ready. |
| `length` | How far the reader scrolls, in screen heights. `5` means five screens of scrolling cover the whole video. Default is the number of cards plus one. |
| `position` | Default card position: `left`, `center` (default) or `right`. |
| `mode` | `video` (default) scrubs the video file itself. `frames` extracts still frames while building and draws them instead, which is smoother on some phones but makes the page heavier. |
| `fps`, `max_frames`, `frame_width` | For `frames` mode only: frames per second to extract (default `8`), the cap on total frames (default `400`), and the width of each frame (default `1280`). Long videos automatically get fewer frames per second to stay under the cap. |
| `card_background`, `card_color`, `card_width` | Card styling. |

Each card may start with `at: 40` (percent of the way through the scroll where the card is centered) and `position:`.

For `video` mode to scrub smoothly, the video needs frequent keyframes. If you prepare it with `ffmpeg`, add `-g 4` (a keyframe every four frames):

```
ffmpeg -i original.mp4 -an -vf scale=1280:-2 -c:v libx264 -crf 23 -g 4 -keyint_min 4 -pix_fmt yuv420p -movflags +faststart scroll-video.mp4
```

`frames` mode needs `ffmpeg` on the computer that builds the site. GitHub's build machines have it. Your own computer may not.

---

## 7. Photos and video: sizes and limits

**Photos**

- JPG for photographs, PNG for graphics with flat colors or transparency.
- Up to about 2500 pixels on the long side is plenty. Larger files just slow the build.
- The template creates WebP versions in several sizes automatically, so you do not need to make small versions yourself.
- Always write an `alt:` description. It is read aloud to blind readers and shown if the image fails.

**Video**

- GitHub's web uploader refuses files over 25 MB, and the repository refuses anything over 100 MB. The whole repository should stay well under 1 GB.
- Self-hosted video is for **short, silent clips**: opener loops, scroll-stepper backgrounds, scroll-driven video, and brief pop-ups. Keep them under 30 seconds and under 25 MB.
- For interviews, documentaries, or anything with sound and length, upload to **YouTube or Vimeo** and paste their embed code in an `html` block (or inside a `modal`).
- Use MP4 with H.264 video, 1080p or 720p. A 15-second 720p clip is typically 2 to 5 MB.
- Give every video a `poster` still. Phones in low-power mode refuse to autoplay video, and the poster is what they show instead.

---

## 8. Fonts

The template ships with three Google Fonts: **Quattrocento** (headings), **Fanwood Text** (body text) and **Source Sans 3** (captions and other small text). They are stored in the `fonts/` folder and served from your own site, so there is no connection to Google when someone reads your story.

To add another Google Font:

1. Go to [google-webfonts-helper](https://gwfh.mranftl.com/fonts) and search for the font.
2. Pick the charsets (usually just `latin`) and the styles you need (for example `regular`, `italic`, `700`).
3. Under "Copy CSS" choose **Modern Browsers**, then click **Download files**.
4. Unzip, and drag only the `.woff2` files into the `fonts/` folder on GitHub (**Add file > Upload files**).
5. In settings.toml, use the font's family name, for example `font = "Lora"`. The name comes from the file name: `lora-v35-latin-700.woff2` is "Lora", `playfair-display-v37-latin-regular.woff2` is "Playfair Display".

If a font file is named some other way, describe it under `[fonts]` in settings.toml:

```toml
[[fonts.custom]]
family = "My Font"
file = "MyFont-Bold.woff2"
weight = 700
style = "normal"
```

The build warns you if settings.toml names a font that has no files in `fonts/`. The site still works; the browser uses a fallback serif.

---

## 9. Custom styles

Two options on any embed, plus one file, cover most styling wishes.

**`style:` for a one-off.** The value is ordinary CSS and is written onto the embed's outer wrapper:

````
embed: pullquote
cite: Jane Doe
style: border-top: 2px solid #0b5fa5; border-bottom: 2px solid #0b5fa5; padding: 1.5rem 0

We never expected the train to leave on its own.
````

**`class:` plus custom.css for anything reusable.** Give the embed a class name, then write rules for it in the `custom.css` file at the top of the repository. That file is loaded after the template's own styles, so your rules win.

````
embed: image
source: platform.jpg
alt: Commuters on a platform
class: framed
````

```css
/* custom.css */
.framed img {
  border: 12px solid #fff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
}
.framed .story-embed__caption { text-align: center; }
@media (max-width: 767px) { .framed img { border-width: 6px; } }
```

Use `id:` instead of `class:` when a rule should apply to exactly one embed (`#platform img { ... }`).

Things you can target inside every embed:

| Selector | What it is |
|---|---|
| `.story-embed` | The whole wrapper |
| `.story-embed__media` | The box holding the photo, chart or video |
| `.story-embed__caption`, `.story-embed__credit` | The caption line and the credit inside it |
| `img`, `video`, `iframe` | The media itself |
| `.story-card` | The floating text cards in scrolly and scrollvideo sections |
| `.opener`, `.opener__title`, `.opener__tagline` | The opener |
| `.story-text` | The reading column |

Styles cannot reach inside an iframe (a Datawrapper chart or YouTube player is a separate web page), but they can style the box around it. custom.css also works for library-drawn elements such as TimelineJS slides (`.tl-slide`) or the Juxtapose handle (`.jx-handle`).

---

## 10. Previewing on your own computer (Advanced)

This is optional. It is handy for instructors and for anyone who wants to see changes instantly instead of waiting for GitHub.

1. Install **Node.js** (version 22 or newer) from [nodejs.org](https://nodejs.org/). Choose the LTS download.
2. Get the repository onto your computer: on GitHub click the green **Code** button and choose **Download ZIP** (then unzip it), or use `git clone` if you know Git.
3. Open a terminal in the unzipped folder and run:

   ```
   npm install
   npm start
   ```

4. Open **http://localhost:8080** in your browser.

Now every time you save `content.md`, `settings.toml`, or drop a file in `assets/`, the page refreshes by itself. Build warnings (a missing file, an unknown option) appear in a yellow panel at the bottom of the preview and in the terminal. Press **Ctrl+C** in the terminal to stop.

`npm run build` builds the site once into the `_site/` folder, which is exactly what GitHub does. You can open `_site/index.html` straight from the folder, though video and some embeds behave better through `npm start`.

Resized images are cached in `.cache/`. Delete that folder if it gets large or if you want a completely fresh build.

---

## 11. Editing in the browser with GitHub Codespaces

A codespace is a free editor that runs in your web browser, with a live preview of your story next to it. You change a word, press save, and the preview updates. Nothing is installed on your computer.

**Open your codespace**

1. Go to your repository on GitHub.
2. Click the green **Code** button, then the **Codespaces** tab, then **Create codespace on main**.

   Shortcut: visit `https://codespaces.new/YOUR-USERNAME/YOUR-REPOSITORY?quickstart=1` with your own user name and repository name filled in. Bookmark that address; it reopens the same codespace next time.

3. Wait a minute or two the first time. An editor appears with your files listed on the left, and a **Story preview** tab opens with your site. If the preview does not appear, click **Ports** at the bottom of the editor and then the globe icon on the row for port 8080.

**Make changes**

- Click **content.md** or **settings.toml** in the file list on the left and edit.
- Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save. The preview refreshes on its own.
- To add a photo or video, drag the file from your computer onto the **assets** folder in the file list.

**Publish**

Saving in the codespace only changes your private copy. To update the public website:

1. Click the **Source Control** icon on the left edge (three connected dots).
2. Type a few words describing what you changed in the message box.
3. Click **Commit**, then **Sync Changes** (or **Publish Branch** if that is what the button says). If it asks whether to stage all changes, say yes.
4. GitHub rebuilds the site within a minute or two.

**When you are done**

Close the browser tab. The codespace pauses by itself after half an hour of inactivity. GitHub gives personal accounts a free monthly allowance (see [Free GitHub for students](#14-free-github-for-students)); to stop a codespace right away or delete one you no longer need, go to [github.com/codespaces](https://github.com/codespaces).

---

## 12. Troubleshooting

**The Actions run has a red X.** Click the run, then the failed step, and read the last lines. Common causes:

- A typo in `settings.toml`: a missing quotation mark or bracket. The message names the line.
- An image or video name that does not match a file in `assets/` (remember, names are case-sensitive).
- A file over 100 MB.

**A yellow box saying "Problem in content.md" appears on the page.** The box explains what is wrong with that embed: a missing `source:` line, an unknown embed type, and so on. Fix the block and save.

**The chart or embed is blank.** Open the Actions run and look for a warning that a script was removed. Add that domain to `trusted_script_domains` in settings.toml. If there is no warning, check the embed in a fresh browser tab; some services block embedding until the chart is published.

**The background video does not play on my phone.** Phones in low-power mode do not autoplay video. Set a `poster` image so readers see something. Also make sure the clip is small and has no audio track.

**My new font is not used.** The family name in settings.toml must match the file name's family part (see section 8). Check the build log for a "has no files in the fonts/ folder" warning.

**The site shows an old version.** Wait a minute after the Actions run finishes, then reload with Shift held down (a hard refresh).

**The site is a 404 page.** GitHub Pages is not switched on, or its source is not "GitHub Actions". See [Step 2](#step-2-turn-on-github-pages).

**Text I wrote shows up with backslashes or odd characters.** Google Docs sometimes escapes characters like `_` and `*` when exporting. The template understands these escapes, but if you see stray backslashes, delete them in the GitHub editor.

**Curly quotes broke my embed.** The template straightens quotes inside code blocks automatically. If something still looks wrong, make sure the whole embed is inside one code block and that nothing was wrapped onto a new line by hand.

---

## 13. For developers: how the template is built

Everything is plain Node.js with three dependencies: `markdown-it` (Markdown), `smol-toml` (settings) and `sharp` (image resizing). There is no framework and no bundler.

```
content.md            The story
content.remote.md     Last downloaded copy of a linked Google Doc (only when content_url is set)
assets/pasted/        Pictures pasted into a linked Google Doc, saved as files (only when content_url is set)
settings.toml         Site settings
custom.css            Student's own CSS, linked after the template's styles
assets/               Student media (copied to the site as-is, images also resized)
fonts/                Self-hosted font files
vendor/               Bootstrap and the Knight Lab libraries, unmodified
src/
  build.js            Entry point: npm run build
  dev.js              Preview server with live reload: npm start
  lib/
    remote.js         Downloads the story from a linked Google Doc, with a cached fallback
    settings.js       Loads settings.toml, applies defaults, warns about typos
    fonts.js          Finds font files, writes @font-face CSS
    blocks.js         Parses "key: value" options and step separators in code blocks
    content.js        markdown-it setup; code blocks become embeds; prose gets wrapped in .story-text
    images.js         sharp pipeline: responsive WebP sets, cached in .cache/img
    frames.js         ffmpeg frame extraction for scrollvideo "frames" mode
    html.js           The <figure> wrapper, captions, error boxes, sizes="" attribute
    scripts.js        Allow-list for <script src> in pasted embed code
    page.js           Opener and the HTML document
    theme.js          settings.toml -> CSS custom properties
  theme/
    base.css          Layout and typography (uses the custom properties)
    base.js           Opener behavior
  embeds/
    index.js          Auto-loads every folder below
    <name>/index.js   One embed type: export default { name, aliases?, vendor?, render(block, ctx) }
    <name>/client.js  Optional browser code, bundled into site.js only when the embed is used
    <name>/style.css  Optional styles, bundled into site.css only when the embed is used
.github/workflows/deploy.yml   Build and publish on every push to main
.devcontainer/                 Codespaces setup
_site/                Build output (ignored by git)
.cache/               Resized images and extracted frames (ignored by git)
```

### The build in one paragraph

`build.js` reads settings and fonts, loads every embed module, then renders `content.md` with markdown-it. Each fenced code block is handed to `renderEmbed`, which parses the `key: value` options, picks the embed module named by `embed:` (or `html` when the body starts with `<`), and calls its `render()`. Because image resizing is asynchronous and markdown-it is not, each embed leaves a placeholder comment that is filled in after rendering. Embed output is wrapped in marker comments so runs of ordinary prose can be wrapped in `<div class="story-text">`. Finally the opener, document shell, CSS bundle (fonts, custom properties, base.css, and the styles of the embeds actually used) and JS bundle are written to `_site/`. Only the vendor libraries of embeds that appear in the story are copied and linked.

### Adding a new embed type

Create `src/embeds/audio/index.js`:

```js
import { wrap, errorBox } from '../../lib/html.js';
import { escapeHtml } from '../../lib/util.js';

export default {
  name: 'audio',
  aliases: ['sound'],
  description: 'A self-hosted audio clip',
  // Optional: libraries to copy from vendor/ and link in the page.
  // vendor: [{ dir: 'wavesurfer', css: ['wavesurfer.css'], js: ['wavesurfer.min.js'] }],
  async render({ options: o, body }, ctx) {
    if (!o.source) return errorBox('An audio embed needs a "source:" line.');
    const inner = `<audio controls preload="metadata" src="${escapeHtml(ctx.assetUrl(o.source))}"></audio>`;
    return wrap(ctx, { size: o.size, defaultSize: 'text', caption: o.caption, credit: o.credit, id: o.id, embedName: 'audio' }, inner);
  },
};
```

That is all: the folder is discovered automatically, and students can now write `embed: audio`. Add `style.css` and `client.js` beside it if the embed needs them; they are only included when the embed is used. Mark elements with `data-embed="audio"` and read a `data-config` JSON attribute in `client.js` if you need to pass settings to the browser (see `timeline/` and `juxtapose/` for the pattern).

What `render()` receives:

- `options`: the `key: value` lines as an object (keys lowercased, dashes turned into underscores, values trimmed with straight quotes).
- `body`: everything after the options.
- `ctx`: build helpers. The useful ones:
  - `ctx.settings`, `ctx.fonts`, `ctx.dev`
  - `ctx.warn(message)` prints a warning in the build log and the preview overlay
  - `ctx.assetUrl('file.jpg')` returns the URL of a file in assets/ and warns if it is missing
  - `ctx.image`-style helpers live in `lib/images.js`: `imageTag(ctx, file, { alt, sizes, widths })` and `imageData(ctx, file, { widths })`
  - `ctx.renderInline(markdown)` and `ctx.renderMarkdown(markdown)` for text inside embeds
  - `ctx.nextId('audio')` gives unique element ids
  - `wrap(ctx, options, innerHtml)` from `lib/html.js` applies the size classes and caption
  - `splitSteps(body)` from `lib/blocks.js` splits a body on `---` lines for multi-step embeds

Run `npm start`, add the block to `content.md`, and watch the preview.

### GitHub Actions

`deploy.yml` has `contents: write` permission only so it can commit `content.remote.md` after downloading a linked Google Doc; a push made with the workflow's own token does not trigger another run. It uses `actions/checkout@v7`, `actions/setup-node@v7`, `actions/configure-pages@v6`, `actions/upload-pages-artifact@v5` and `actions/deploy-pages@v5`, all of which run on Node 24 (as of November 2026), and it enables Pages automatically through `configure-pages` with `enablement: true`. When GitHub announces the next Node deprecation, bump the version numbers in that file; the Actions log names the actions that need it.

---

## 14. Free GitHub for students

Everything this template uses is free on a personal GitHub account: the repository, the automatic builds, the published website, and Codespaces. Here is where the limits are and what happens if you reach them.

**Codespaces on a free account**

- You get **120 core-hours a month**. The smallest machine has 2 cores, so that is **60 hours of active editing**. A stopped codespace uses none of it, and codespaces stop by themselves after 30 minutes of inactivity.
- You also get **15 GB of storage** a month for the codespace itself. One codespace for this template uses well under 1 GB. Unused codespaces are deleted automatically after 30 days.
- If you use up the hours, nothing is charged. Your codespace simply will not start until the first of the next month. You can still edit files on GitHub in the browser, and the site still builds and publishes as usual, because those do not count against Codespaces.
- GitHub never charges a personal account for Codespaces unless you go into your billing settings and set a spending limit above zero yourself. Leave it at zero.
- Keep an eye on usage at [github.com/settings/billing](https://github.com/settings/billing).

**The automatic builds and the website** have their own generous limits for public repositories (the builds are free, and the site is fine up to 1 GB and 100 GB of traffic a month). A class project will not get near them.

**Get more with the GitHub Student Developer Pack**

If you are a student, GitHub gives you **GitHub Pro** for free, which raises Codespaces to **180 core-hours (90 hours on the 2-core machine) and 20 GB** a month, along with a long list of other free tools.

1. Go to [education.github.com/pack](https://education.github.com/pack) and click **Sign up for Student Developer Pack**.
2. Sign in with the GitHub account you use for this story. Adding your school email address to the account first speeds things up.
3. Prove you are a student: a school email, a photo of your student ID, or an enrollment document. Approval usually takes a few days but can take longer at the start of a term.
4. Once approved, Pro turns on automatically. There is nothing to configure in this template.



---

## 15. Credits and licenses

- Template Jeremy Sanchez Rue: MIT License (see `LICENSE`).
- [Bootstrap](https://getbootstrap.com/) 5.3: MIT License.
- [TimelineJS](https://timeline.knightlab.com/), [JuxtaposeJS](https://juxtapose.knightlab.com/) and [StoryMapJS](https://storymap.knightlab.com/) by Northwestern University Knight Lab: Mozilla Public License 2.0.
- [Quattrocento](https://fonts.google.com/specimen/Quattrocento) and [Fanwood Text](https://fonts.google.com/specimen/Fanwood+Text): SIL Open Font License.
- Sample photos and videos are Unsplash and placeholder stock media for demonstration only. Replace them with your own.
