# NppesNpiRegistry SDK utility: feature_add
module NppesNpiRegistryUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
