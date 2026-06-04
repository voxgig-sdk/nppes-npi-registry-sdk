# NppesNpiRegistry SDK

Look up US healthcare providers by NPI, name, location, or taxonomy from the official CMS NPPES registry

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About NPPES NPI Registry

The [NPPES NPI Registry API](https://npiregistry.cms.hhs.gov/api-page) is a free, real-time lookup service over the US National Plan and Provider Enumeration System, operated by the [Centers for Medicare & Medicaid Services (CMS)](https://www.cms.gov/). It exposes the same provider data that powers the public [NPI Registry search](https://npiregistry.cms.hhs.gov/) and is offered as an alternative to downloading the monthly NPPES full-file dump.

The API serves the current version 2.1 of the NPPES dataset and accepts standard HTTP `GET` requests against `https://npiregistry.cms.hhs.gov/api/`. Queries can be filtered by criteria such as NPI number, provider name, organization name, city, state, postal code, country, and taxonomy, and responses include identifying details, practice and mailing addresses, taxonomies, and other identifiers for each matched provider.

No authentication or API key is required. Callers must supply a `version` parameter (currently `2.1`); requests for unsupported versions are rejected. The service is intended for interactive and lightweight programmatic lookups rather than bulk extraction — for bulk needs CMS publishes the downloadable NPPES data dissemination files.

## Try it

**TypeScript**
```bash
npm install nppes-npi-registry
```

**Python**
```bash
pip install nppes-npi-registry-sdk
```

**PHP**
```bash
composer require voxgig/nppes-npi-registry-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/nppes-npi-registry-sdk/go
```

**Ruby**
```bash
gem install nppes-npi-registry-sdk
```

**Lua**
```bash
luarocks install nppes-npi-registry-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NppesNpiRegistrySDK } from 'nppes-npi-registry'

const client = new NppesNpiRegistrySDK({})

// List all searchnpis
const searchnpis = await client.SearchNpi().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o nppes-npi-registry-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "nppes-npi-registry": {
      "command": "/abs/path/to/nppes-npi-registry-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **SearchNpi** | Search the NPPES registry for healthcare providers, returning matching individual and organizational NPI records; queried via `GET /api/` with parameters such as `version`, `number`, `first_name`, `last_name`, `organization_name`, `city`, `state`, `postal_code`, `country_code`, and `taxonomy_description`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from nppesnpiregistry_sdk import NppesNpiRegistrySDK

client = NppesNpiRegistrySDK({})

# List all searchnpis
searchnpis, err = client.SearchNpi(None).list(None, None)
```

### PHP

```php
<?php
require_once 'nppesnpiregistry_sdk.php';

$client = new NppesNpiRegistrySDK([]);

// List all searchnpis
[$searchnpis, $err] = $client->SearchNpi(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/nppes-npi-registry-sdk/go"

client := sdk.NewNppesNpiRegistrySDK(map[string]any{})

// List all searchnpis
searchnpis, err := client.SearchNpi(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "NppesNpiRegistry_sdk"

client = NppesNpiRegistrySDK.new({})

# List all searchnpis
searchnpis, err = client.SearchNpi(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("nppes-npi-registry_sdk")

local client = sdk.new({})

-- List all searchnpis
local searchnpis, err = client:SearchNpi(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NppesNpiRegistrySDK.test()
const result = await client.SearchNpi().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NppesNpiRegistrySDK.test(None, None)
result, err = client.SearchNpi(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NppesNpiRegistrySDK::test(null, null);
[$result, $err] = $client->SearchNpi(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.SearchNpi(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NppesNpiRegistrySDK.test(nil, nil)
result, err = client.SearchNpi(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:SearchNpi(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the NPPES NPI Registry

- Upstream: [https://npiregistry.cms.hhs.gov/](https://npiregistry.cms.hhs.gov/)
- API docs: [https://npiregistry.cms.hhs.gov/api-page](https://npiregistry.cms.hhs.gov/api-page)

- Data is published by the US Centers for Medicare & Medicaid Services (CMS) as part of the National Plan and Provider Enumeration System (NPPES).
- As a US federal government dataset it is generally considered public information, free to access and reuse.
- No API key or registration is required; attribution to CMS / NPPES is good practice.
- Consult the CMS NPPES site for any disclaimers about data accuracy and currency.

---

Generated from the NPPES NPI Registry OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
