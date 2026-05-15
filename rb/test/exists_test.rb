# NppesNpiRegistry SDK exists test

require "minitest/autorun"
require_relative "../NppesNpiRegistry_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NppesNpiRegistrySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
