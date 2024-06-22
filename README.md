# squirrels-analytics.github.io

The Official Documentation Website for Squirrels

## Contributing

Use `npm run start` to host the development version of the website on localhost. Changes to files are reflected live on the website in this development version.

Use `npm run build` to create a build (which verifies all internal links are valid). Then use `npm run serve` to host the build on localhost.

See package.json for:
- The version of the project
- The list of commands available using `npm run`

Using github actions, the public website updates for every commit to the `main` branch, but only if `npm run build` succeeds.
