<?php
declare(strict_types=1);

// NppesNpiRegistry SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NppesNpiRegistryMakeContext
{
    public static function call(array $ctxmap, ?NppesNpiRegistryContext $basectx): NppesNpiRegistryContext
    {
        return new NppesNpiRegistryContext($ctxmap, $basectx);
    }
}
