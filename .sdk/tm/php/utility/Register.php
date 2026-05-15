<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NppesNpiRegistryUtility::setRegistrar(function (NppesNpiRegistryUtility $u): void {
    $u->clean = [NppesNpiRegistryClean::class, 'call'];
    $u->done = [NppesNpiRegistryDone::class, 'call'];
    $u->make_error = [NppesNpiRegistryMakeError::class, 'call'];
    $u->feature_add = [NppesNpiRegistryFeatureAdd::class, 'call'];
    $u->feature_hook = [NppesNpiRegistryFeatureHook::class, 'call'];
    $u->feature_init = [NppesNpiRegistryFeatureInit::class, 'call'];
    $u->fetcher = [NppesNpiRegistryFetcher::class, 'call'];
    $u->make_fetch_def = [NppesNpiRegistryMakeFetchDef::class, 'call'];
    $u->make_context = [NppesNpiRegistryMakeContext::class, 'call'];
    $u->make_options = [NppesNpiRegistryMakeOptions::class, 'call'];
    $u->make_request = [NppesNpiRegistryMakeRequest::class, 'call'];
    $u->make_response = [NppesNpiRegistryMakeResponse::class, 'call'];
    $u->make_result = [NppesNpiRegistryMakeResult::class, 'call'];
    $u->make_point = [NppesNpiRegistryMakePoint::class, 'call'];
    $u->make_spec = [NppesNpiRegistryMakeSpec::class, 'call'];
    $u->make_url = [NppesNpiRegistryMakeUrl::class, 'call'];
    $u->param = [NppesNpiRegistryParam::class, 'call'];
    $u->prepare_auth = [NppesNpiRegistryPrepareAuth::class, 'call'];
    $u->prepare_body = [NppesNpiRegistryPrepareBody::class, 'call'];
    $u->prepare_headers = [NppesNpiRegistryPrepareHeaders::class, 'call'];
    $u->prepare_method = [NppesNpiRegistryPrepareMethod::class, 'call'];
    $u->prepare_params = [NppesNpiRegistryPrepareParams::class, 'call'];
    $u->prepare_path = [NppesNpiRegistryPreparePath::class, 'call'];
    $u->prepare_query = [NppesNpiRegistryPrepareQuery::class, 'call'];
    $u->result_basic = [NppesNpiRegistryResultBasic::class, 'call'];
    $u->result_body = [NppesNpiRegistryResultBody::class, 'call'];
    $u->result_headers = [NppesNpiRegistryResultHeaders::class, 'call'];
    $u->transform_request = [NppesNpiRegistryTransformRequest::class, 'call'];
    $u->transform_response = [NppesNpiRegistryTransformResponse::class, 'call'];
});
