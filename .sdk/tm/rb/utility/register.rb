# NppesNpiRegistry SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NppesNpiRegistryUtility.registrar = ->(u) {
  u.clean = NppesNpiRegistryUtilities::Clean
  u.done = NppesNpiRegistryUtilities::Done
  u.make_error = NppesNpiRegistryUtilities::MakeError
  u.feature_add = NppesNpiRegistryUtilities::FeatureAdd
  u.feature_hook = NppesNpiRegistryUtilities::FeatureHook
  u.feature_init = NppesNpiRegistryUtilities::FeatureInit
  u.fetcher = NppesNpiRegistryUtilities::Fetcher
  u.make_fetch_def = NppesNpiRegistryUtilities::MakeFetchDef
  u.make_context = NppesNpiRegistryUtilities::MakeContext
  u.make_options = NppesNpiRegistryUtilities::MakeOptions
  u.make_request = NppesNpiRegistryUtilities::MakeRequest
  u.make_response = NppesNpiRegistryUtilities::MakeResponse
  u.make_result = NppesNpiRegistryUtilities::MakeResult
  u.make_point = NppesNpiRegistryUtilities::MakePoint
  u.make_spec = NppesNpiRegistryUtilities::MakeSpec
  u.make_url = NppesNpiRegistryUtilities::MakeUrl
  u.param = NppesNpiRegistryUtilities::Param
  u.prepare_auth = NppesNpiRegistryUtilities::PrepareAuth
  u.prepare_body = NppesNpiRegistryUtilities::PrepareBody
  u.prepare_headers = NppesNpiRegistryUtilities::PrepareHeaders
  u.prepare_method = NppesNpiRegistryUtilities::PrepareMethod
  u.prepare_params = NppesNpiRegistryUtilities::PrepareParams
  u.prepare_path = NppesNpiRegistryUtilities::PreparePath
  u.prepare_query = NppesNpiRegistryUtilities::PrepareQuery
  u.result_basic = NppesNpiRegistryUtilities::ResultBasic
  u.result_body = NppesNpiRegistryUtilities::ResultBody
  u.result_headers = NppesNpiRegistryUtilities::ResultHeaders
  u.transform_request = NppesNpiRegistryUtilities::TransformRequest
  u.transform_response = NppesNpiRegistryUtilities::TransformResponse
}
