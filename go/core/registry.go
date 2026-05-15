package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewSearchNpiEntityFunc func(client *NppesNpiRegistrySDK, entopts map[string]any) NppesNpiRegistryEntity

