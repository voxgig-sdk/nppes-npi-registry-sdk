-- NppesNpiRegistry SDK error

local NppesNpiRegistryError = {}
NppesNpiRegistryError.__index = NppesNpiRegistryError


function NppesNpiRegistryError.new(code, msg, ctx)
  local self = setmetatable({}, NppesNpiRegistryError)
  self.is_sdk_error = true
  self.sdk = "NppesNpiRegistry"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NppesNpiRegistryError:error()
  return self.msg
end


function NppesNpiRegistryError:__tostring()
  return self.msg
end


return NppesNpiRegistryError
