# squirrels-analytics.github.io

The Official Documentation Website for Squirrels

## Contributing

Install NodeJS v20.10.0 or higher. Then run `npm install` on this project.

Use `npm run start` to host the development version of the website on localhost. Changes to files are reflected live on the website in this development version.

Use `npm run build` to create a build (which verifies all internal links are valid). Then use `npm run serve` to host the build on localhost.

See package.json for:
- The version of the project
- The list of commands available using `npm run`

Using github actions, the public website updates for every commit to the `main` branch, but only if `npm run build` succeeds.

Write documentation content as markdown files in either the `docs/docs` folder or the `docs/references` folder. Add the file to `sidebars.ts` for it to appear in the left panel.

To create a new version in the `versioned_docs` folder, run `npm run docusaurus docs:version <version_number>`.

To pretend that the current version is a cut version, add this to the `docusaurus.config.js` file:

```ts
docs: {
    lastVersion: 'current',
    versions: {
        current: {
            label: '<version_number>'
        },
    },
},
```
