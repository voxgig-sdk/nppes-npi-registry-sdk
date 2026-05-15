# NppesNpiRegistry SDK utility: make_context
require_relative '../core/context'
module NppesNpiRegistryUtilities
  MakeContext = ->(ctxmap, basectx) {
    NppesNpiRegistryContext.new(ctxmap, basectx)
  }
end
