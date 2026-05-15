<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility: feature_add

class NppesNpiRegistryFeatureAdd
{
    public static function call(NppesNpiRegistryContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
