<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility: prepare_body

class NppesNpiRegistryPrepareBody
{
    public static function call(NppesNpiRegistryContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
