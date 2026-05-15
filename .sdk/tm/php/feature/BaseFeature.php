<?php
declare(strict_types=1);

// NppesNpiRegistry SDK base feature

class NppesNpiRegistryBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NppesNpiRegistryContext $ctx, array $options): void {}
    public function PostConstruct(NppesNpiRegistryContext $ctx): void {}
    public function PostConstructEntity(NppesNpiRegistryContext $ctx): void {}
    public function SetData(NppesNpiRegistryContext $ctx): void {}
    public function GetData(NppesNpiRegistryContext $ctx): void {}
    public function GetMatch(NppesNpiRegistryContext $ctx): void {}
    public function SetMatch(NppesNpiRegistryContext $ctx): void {}
    public function PrePoint(NppesNpiRegistryContext $ctx): void {}
    public function PreSpec(NppesNpiRegistryContext $ctx): void {}
    public function PreRequest(NppesNpiRegistryContext $ctx): void {}
    public function PreResponse(NppesNpiRegistryContext $ctx): void {}
    public function PreResult(NppesNpiRegistryContext $ctx): void {}
    public function PreDone(NppesNpiRegistryContext $ctx): void {}
    public function PreUnexpected(NppesNpiRegistryContext $ctx): void {}
}
