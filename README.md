# Miniature Waddle

This project packages a small offline-capable web app that runs the **Devil Crash** PC Engine game using [EmulatorJS](https://github.com/emulatorjs/emulatorjs). A service worker caches the main assets so the game can be played even when offline.

## Contents

- `index.html` – HTML entry point configured for the `pce` core.
- `service-worker.js` – simple service worker that caches `index.html`, the manifest and icon files.
- `manifest.json` – PWA manifest referencing the icons.
- `icon-192x192.png`, `icon-512x512.png` – app icons used by the manifest.
- `Devil Crash - Naxat Pinball (Japan) (En).pce` – the game ROM.
- `syscard3.pce` – the BIOS file required by the emulator.
- `tests/manifest.test.js` – basic test verifying the manifest icon references.

## Usage

Open the project with any static HTTP server (for example `npx http-server .` or `python3 -m http.server`) and navigate to `http://localhost:PORT/`. The service worker will install on first visit and subsequent loads can work offline.

## Running Tests

```
npm test
```

This runs the manifest test script to ensure the PWA configuration references icon files that exist.

## License

This project is released to the public domain under the [Unlicense](LICENSE).
