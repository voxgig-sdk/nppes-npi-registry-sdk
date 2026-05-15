# NppesNpiRegistry SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NppesNpiRegistryFeatures
  def self.make_feature(name)
    case name
    when "base"
      NppesNpiRegistryBaseFeature.new
    when "test"
      NppesNpiRegistryTestFeature.new
    else
      NppesNpiRegistryBaseFeature.new
    end
  end
end
