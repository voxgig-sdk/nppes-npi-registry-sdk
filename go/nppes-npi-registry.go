package voxgignppesnpiregistrysdk

import (
	"github.com/voxgig-sdk/nppes-npi-registry-sdk/core"
	"github.com/voxgig-sdk/nppes-npi-registry-sdk/entity"
	"github.com/voxgig-sdk/nppes-npi-registry-sdk/feature"
	_ "github.com/voxgig-sdk/nppes-npi-registry-sdk/utility"
)

// Type aliases preserve external API.
type NppesNpiRegistrySDK = core.NppesNpiRegistrySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NppesNpiRegistryEntity = core.NppesNpiRegistryEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NppesNpiRegistryError = core.NppesNpiRegistryError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewSearchNpiEntityFunc = func(client *core.NppesNpiRegistrySDK, entopts map[string]any) core.NppesNpiRegistryEntity {
		return entity.NewSearchNpiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNppesNpiRegistrySDK = core.NewNppesNpiRegistrySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
