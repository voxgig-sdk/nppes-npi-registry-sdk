<?php
declare(strict_types=1);

// NppesNpiRegistry SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NppesNpiRegistryFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NppesNpiRegistryBaseFeature();
            case "test":
                return new NppesNpiRegistryTestFeature();
            default:
                return new NppesNpiRegistryBaseFeature();
        }
    }
}
