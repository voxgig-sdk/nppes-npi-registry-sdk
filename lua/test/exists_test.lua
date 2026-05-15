-- ProjectName SDK exists test

local sdk = require("nppes-npi-registry_sdk")

describe("NppesNpiRegistrySDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
