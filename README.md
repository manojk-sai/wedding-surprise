# Manoj & Likhitha Wedding Surprise Message

A mobile-friendly GitHub Pages wedding surprise page for guests scanning a QR code at their seats. Each visit randomly displays one of five short greeting videos.

## Files in this project

- `index.html` — webpage content and SEO metadata.
- `style.css` — elegant Indian wedding, ranch, and carnival-inspired styling.
- `script.js` — random video selection and loading behavior.
- `README.md` — setup and update instructions.

## Replace the 5 video URLs

Open `script.js` and find this section:

```js
const videos = [
  "VIDEO_URL_1",
  "VIDEO_URL_2",
  "VIDEO_URL_3",
  "VIDEO_URL_4",
  "VIDEO_URL_5"
];
```

Replace each placeholder with a direct URL to a hosted video file, keeping the quotation marks and commas.

Example:

```js
const videos = [
  "https://example.com/video-1.mp4",
  "https://example.com/video-2.mp4",
  "https://example.com/video-3.mp4",
  "https://example.com/video-4.mp4",
  "https://example.com/video-5.mp4"
];
```

For the best compatibility, use `.mp4` videos with H.264 video and AAC audio.

## Upload to GitHub

1. Create a new GitHub repository, for example `wedding-surprise`.
2. Upload these files to the repository root:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Commit the files to the `main` branch.

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Click **Save**.
6. Wait a minute or two for GitHub to publish the site.
7. Your site URL will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/wedding-surprise/`

## Test the webpage

1. Open the GitHub Pages URL on your phone.
2. Refresh the page several times to confirm a random video is selected on each visit.
3. Make sure the video controls are visible and the video can be played by tapping if autoplay is blocked.

## Test the QR code

1. Create a QR code using the final GitHub Pages URL.
2. Print a small test version before printing all guest-seat cards.
3. Scan it with both iPhone and Android cameras if possible.
4. Confirm it opens directly to the wedding surprise page.
5. Refresh the page to verify different greeting videos can appear.

## Notes

- This project uses only HTML, CSS, and JavaScript.
- No build step is required.
- It is ready for GitHub Pages hosting.
