

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NppesNpiRegistrySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchNpiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NPPES_NPI_REGISTRY_TEST_LIVE=TRUE.
  afterEach(liveDelay('NPPES_NPI_REGISTRY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NppesNpiRegistrySDK.test()
    const ent = testsdk.SearchNpi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NPPES_NPI_REGISTRY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search_npi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"addresses":{"a":true,"h":"Addresses","n":"addresses","r":false,"sh":"Provider addresses","t":"`$ARRAY`","key$":"addresses","index$":0},"basic":{"a":true,"h":"Basic","n":"basic","r":false,"sh":"Basic provider information","t":"`$OBJECT`","key$":"basic","index$":1},"endpoints":{"a":true,"h":"Endpoints","n":"endpoints","r":false,"sh":"Provider endpoints for health information exchange","t":"`$ARRAY`","key$":"endpoints","index$":2},"enumeration_type":{"a":true,"h":"Enumeration Type","n":"enumeration_type","r":false,"sh":"Type of enumeration","t":"`$STRING`","key$":"enumeration_type","index$":3},"identifiers":{"a":true,"h":"Identifiers","n":"identifiers","r":false,"sh":"Other identifiers","t":"`$ARRAY`","key$":"identifiers","index$":4},"number":{"a":true,"h":"Number","n":"number","r":false,"sh":"NPI number","t":"`$STRING`","key$":"number","index$":5},"other_names":{"a":true,"h":"Other Names","n":"other_names","r":false,"sh":"Other names associated with the provider","t":"`$ARRAY`","key$":"other_names","index$":6},"practiceLocations":{"a":true,"h":"Practice Locations","n":"practiceLocations","r":false,"sh":"Practice locations","t":"`$ARRAY`","key$":"practiceLocations","index$":7},"taxonomies":{"a":true,"h":"Taxonomies","n":"taxonomies","r":false,"sh":"Provider taxonomy codes and descriptions","t":"`$ARRAY`","key$":"taxonomies","index$":8}},"name":"search_npi","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"address_purpose","or":"address_purpose","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"city","or":"city","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"country_code","or":"country_code","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"enumeration_type","or":"enumeration_type","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"first_name","or":"first_name","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"last_name","or":"last_name","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"number","or":"number","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"organization_name","or":"organization_name","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"postal_code","or":"postal_code","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":false,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$BOOLEAN`","index$":10},{"a":true,"ex":0,"k":"query","n":"skip","or":"skip","r":false,"t":"`$INTEGER`","index$":11},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"taxonomy_description","or":"taxonomy_description","r":false,"t":"`$STRING`","index$":13},{"a":true,"ex":"2.1","k":"query","n":"version","or":"version","r":false,"t":"`$STRING`","index$":14}]},"k":"http","m":"GET","o":"/","q":{"exist":["address_purpose","city","country_code","enumeration_type","first_name","last_name","limit","number","organization_name","postal_code","pretty","skip","state","taxonomy_description","version"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search_npi","name__orig":"search_npi","Name":"SearchNpi","name_":"search_npi","name-":"search-npi","NAME":"SEARCH_NPI","index$":0}, {"active":true,"entity":"search_npi","key$":"BasicSearchNpiFlow","kind":"basic","name":"BasicSearchNpiFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_npi_ref01"}}],"index$":0}]}, 'SearchNpi', {"GET /":{"protocol":"http","operationId":"searchNPI","responses":{"200":{"description":"Successful response with provider data","content":{"application/json":{"schema":{"type":"object","properties":{"result_count":{"description":"Number of results returned in this response","key$":"result_count","type":"integer"},"results":{"description":"Array of provider records","items":{"properties":{"addresses":{"description":"Provider addresses","items":{"properties":{"address_1":{"type":"string"},"address_2":{"type":"string"},"address_purpose":{"type":"string"},"address_type":{"type":"string"},"city":{"type":"string"},"country_code":{"type":"string"},"country_name":{"type":"string"},"fax_number":{"type":"string"},"postal_code":{"type":"string"},"state":{"type":"string"},"telephone_number":{"type":"string"}},"type":"object"},"type":"array","key$":"addresses"},"basic":{"description":"Basic provider information","properties":{"credential":{"type":"string"},"enumeration_date":{"format":"date","type":"string"},"first_name":{"type":"string"},"gender":{"type":"string"},"last_name":{"type":"string"},"last_updated":{"format":"date","type":"string"},"middle_name":{"type":"string"},"name":{"description":"Organization name for NPI-2","type":"string"},"organization_name":{"type":"string"},"sole_proprietor":{"type":"string"},"status":{"type":"string"}},"type":"object","key$":"basic"},"endpoints":{"description":"Provider endpoints for health information exchange","type":"array","key$":"endpoints"},"enumeration_type":{"description":"Type of enumeration","type":"string","key$":"enumeration_type"},"identifiers":{"description":"Other identifiers","items":{"properties":{"code":{"type":"string"},"desc":{"type":"string"},"identifier":{"type":"string"},"issuer":{"type":"string"},"state":{"type":"string"}},"type":"object"},"type":"array","key$":"identifiers"},"number":{"description":"NPI number","type":"string","key$":"number"},"other_names":{"description":"Other names associated with the provider","type":"array","key$":"other_names"},"practiceLocations":{"description":"Practice locations","type":"array","key$":"practiceLocations"},"taxonomies":{"description":"Provider taxonomy codes and descriptions","items":{"properties":{"code":{"type":"string"},"desc":{"type":"string"},"license":{"type":"string"},"primary":{"type":"boolean"},"state":{"type":"string"}},"type":"object"},"type":"array","key$":"taxonomies"}},"type":"object","index$":0},"key$":"results","type":"array"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"Errors":{"type":"array","items":{"type":"object","properties":{"field":{"type":"string"},"description":{"type":"string"}}}}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string"}}}}}}},"parameters":[{"name":"version","in":"query","description":"API version (currently 2.1)","required":false,"schema":{"type":"string","default":"2.1"},"index$":0},{"name":"number","in":"query","description":"National Provider Identifier (NPI) number - 10-digit unique identifier","required":false,"schema":{"type":"string","pattern":"^[0-9]{10}$"},"index$":1},{"name":"enumeration_type","in":"query","description":"Type of NPI enumeration (NPI-1 for individuals, NPI-2 for organizations)","required":false,"schema":{"type":"string","enum":["NPI-1","NPI-2"]},"index$":2},{"name":"taxonomy_description","in":"query","description":"Healthcare provider taxonomy description","required":false,"schema":{"type":"string"},"index$":3},{"name":"first_name","in":"query","description":"Provider's first name (for individual providers)","required":false,"schema":{"type":"string"},"index$":4},{"name":"last_name","in":"query","description":"Provider's last name (for individual providers)","required":false,"schema":{"type":"string"},"index$":5},{"name":"organization_name","in":"query","description":"Organization name (for organizational providers)","required":false,"schema":{"type":"string"},"index$":6},{"name":"address_purpose","in":"query","description":"Address type (LOCATION, MAILING, PRIMARY, SECONDARY)","required":false,"schema":{"type":"string","enum":["LOCATION","MAILING","PRIMARY","SECONDARY"]},"index$":7},{"name":"city","in":"query","description":"Provider's city","required":false,"schema":{"type":"string"},"index$":8},{"name":"state","in":"query","description":"Provider's state (two-letter state code)","required":false,"schema":{"type":"string","pattern":"^[A-Z]{2}$"},"index$":9},{"name":"postal_code","in":"query","description":"Provider's postal code","required":false,"schema":{"type":"string"},"index$":10},{"name":"country_code","in":"query","description":"Provider's country code","required":false,"schema":{"type":"string"},"index$":11},{"name":"limit","in":"query","description":"Maximum number of results to return (default 10, max 200)","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":200},"index$":12},{"name":"skip","in":"query","description":"Number of results to skip for pagination","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":13},{"name":"pretty","in":"query","description":"Format the JSON output for better readability","required":false,"schema":{"type":"boolean","default":false},"index$":14}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_npi_ref01_data = Object.values(setup.data.existing.search_npi)[0] as any

    // LIST
    const search_npi_ref01_ent = client.SearchNpi()
    const search_npi_ref01_match: any = {}

    const search_npi_ref01_list = (await search_npi_ref01_ent.list(search_npi_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search_npi/SearchNpiTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NppesNpiRegistrySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search_npi01','search_npi02','search_npi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NPPES_NPI_REGISTRY_TEST_SEARCH_NPI_ENTID': idmap,
    'NPPES_NPI_REGISTRY_TEST_LIVE': 'FALSE',
    'NPPES_NPI_REGISTRY_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NPPES_NPI_REGISTRY_TEST_SEARCH_NPI_ENTID']

  const live = 'TRUE' === env.NPPES_NPI_REGISTRY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NPPES_NPI_REGISTRY_TEST_SEARCH_NPI_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NppesNpiRegistrySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.NPPES_NPI_REGISTRY_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
