<?php
declare(strict_types=1);

// NppesNpiRegistry SDK exists test

require_once __DIR__ . '/../nppesnpiregistry_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = NppesNpiRegistrySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
