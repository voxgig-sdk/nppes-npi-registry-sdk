<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility: result_body

class NppesNpiRegistryResultBody
{
    public static function call(NppesNpiRegistryContext $ctx): ?NppesNpiRegistryResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
