Simple example of how to do localization of text in a Fuse app.

It's all quite simple really:
- Determine the locale setting of your device
- Choose the corresponding language definition (and make sure it's exported at the root level of your JS and UX markup)

What's what:
- `DeviceLocale.uno` - native code to query locale settings. This is a cut-down version of the "fuse-device" package by Maxim Shaydo aka MaxGraey (https://github.com/MaxGraey/fuse-device)
- `Localization.js` - exposes the selected version of the text through `loc`, together with `setLocale()` in case you want to set it manually.
- `text/*.json` - different language definitions as simple json
- `MainView.ux` - an example of how it all comes together.
