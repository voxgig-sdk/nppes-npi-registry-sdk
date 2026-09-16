# NppesNpiRegistry SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NppesNpiRegistryFeatures
  def self.make_feature(name)
    case name
    when "base"
      NppesNpiRegistryBaseFeature.new
    when "ratelimit"
      NppesNpiRegistryRatelimitFeature.new
    when "retry"
      NppesNpiRegistryRetryFeature.new
    when "test"
      NppesNpiRegistryTestFeature.new
    when "timeout"
      NppesNpiRegistryTimeoutFeature.new
    else
      NppesNpiRegistryBaseFeature.new
    end
  end
end
