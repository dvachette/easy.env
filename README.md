# easy.env
**By [donatien vachette](https://dvachette.fr)**

Easy.env is a tiny, type-safe way to read required or optional values from `process.env`.

It does NOT load `.env` files. Use it after your environment variables are already set (e.g. via `dotenv`, Docker, or your shell).

## Install

```bash
npm install easy.env
```

## Usage

```ts
import { required, optional } from "easy.env";

// Throws if the key is missing or empty
const apiKey = required("API_KEY");

// Returns a fallback string if the key is missing
const port = optional("PORT", "3000");

// Returns null if the key is missing and no fallback is given
const debugFlag = optional("DEBUG");
```

## API

### `required(key: string): string`

Returns the value of `process.env[key]`. Throws an `Error` if the key is missing or empty.

### `optional(key: string, fallback: string): string`
### `optional(key: string): string | null`

Returns the value of `process.env[key]`. If the key is missing or empty:
- returns `fallback` if provided,
- returns `null` otherwise.

## License

MIT