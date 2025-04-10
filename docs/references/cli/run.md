# sqrl run

The `run` command starts the Squirrels API server, making your datasets available through REST API endpoints.

## Usage

```bash
sqrl run [options]
```

## Options

| Option | Description |
|--------|-------------|
| `--build` | Build the virtual data environment (with DuckDB) first before running the API server |
| `--no-cache` | Do not cache any API results |
| `--host` | The host to run on. Default is 127.0.0.1 |
| `--port` | The port to run on. Default is 4465 |

## Description

The run command:
1. Optionally builds the virtual data environment if `--build` is specified
2. Starts a FastAPI server
3. Makes all configured datasets available through REST endpoints
4. Enables parameter-based querying of your data
5. Provides API documentation at `/docs` and `/redoc`

## Examples

Start the server with default settings:
```bash
sqrl run
```

Start the server on a specific host and port:
```bash
sqrl run --host 0.0.0.0 --port 8080
```

Build and then run the server:
```bash
sqrl run --build
```

Run without caching:
```bash
sqrl run --no-cache
```

## Notes

- The server runs on `127.0.0.1:4465` by default
- Use `--host 0.0.0.0` to make the server accessible from other machines
- The `--build` option ensures your data is up to date before starting
- Caching improves performance but may show stale data. Cache size and TTL can be configured with [environment variables]
- The server uses FastAPI, providing automatic API documentation


[environment variables]: ../../tba