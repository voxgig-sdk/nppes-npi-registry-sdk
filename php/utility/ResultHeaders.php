<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility: result_headers

class NppesNpiRegistryResultHeaders
{
    public static function call(NppesNpiRegistryContext $ctx): ?NppesNpiRegistryResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
