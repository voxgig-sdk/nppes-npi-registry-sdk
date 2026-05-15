package = "voxgig-sdk-nppes-npi-registry"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/nppes-npi-registry-sdk.git"
}
description = {
  summary = "NppesNpiRegistry SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["nppes-npi-registry_sdk"] = "nppes-npi-registry_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
