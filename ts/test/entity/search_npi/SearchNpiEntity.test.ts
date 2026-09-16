

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"addresses","req":false,"short":"Provider addresses","type":"`$ARRAY`","index$":0},{"active":true,"name":"basic","req":false,"short":"Basic provider information","type":"`$OBJECT`","index$":1},{"active":true,"name":"endpoints","req":false,"short":"Provider endpoints for health information exchange","type":"`$ARRAY`","index$":2},{"active":true,"name":"enumeration_type","req":false,"short":"Type of enumeration","type":"`$STRING`","index$":3},{"active":true,"name":"identifiers","req":false,"short":"Other identifiers","type":"`$ARRAY`","index$":4},{"active":true,"name":"number","req":false,"short":"NPI number","type":"`$STRING`","index$":5},{"active":true,"name":"other_names","req":false,"short":"Other names associated with the provider","type":"`$ARRAY`","index$":6},{"active":true,"name":"practiceLocations","req":false,"short":"Practice locations","type":"`$ARRAY`","index$":7},{"active":true,"name":"taxonomies","req":false,"short":"Provider taxonomy codes and descriptions","type":"`$ARRAY`","index$":8}],"name":"search_npi","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"address_purpose","orig":"address_purpose","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"city","orig":"city","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"country_code","orig":"country_code","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"enumeration_type","orig":"enumeration_type","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"first_name","orig":"first_name","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"last_name","orig":"last_name","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"kind":"query","name":"number","orig":"number","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"organization_name","orig":"organization_name","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"kind":"query","name":"postal_code","orig":"postal_code","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"example":false,"kind":"query","name":"pretty","orig":"pretty","reqd":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"example":0,"kind":"query","name":"skip","orig":"skip","reqd":false,"type":"`$INTEGER`","index$":11},{"active":true,"kind":"query","name":"state","orig":"state","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"taxonomy_description","orig":"taxonomy_description","reqd":false,"type":"`$STRING`","index$":13},{"active":true,"example":"2.1","kind":"query","name":"version","orig":"version","reqd":false,"type":"`$STRING`","index$":14}]},"contract":{"id":"GET /","json":"{\"operationId\":\"searchNPI\",\"parameters\":[{\"description\":\"API version (currently 2.1)\",\"in\":\"query\",\"name\":\"version\",\"required\":false,\"schema\":{\"default\":\"2.1\",\"type\":\"string\"}},{\"description\":\"National Provider Identifier (NPI) number - 10-digit unique identifier\",\"in\":\"query\",\"name\":\"number\",\"required\":false,\"schema\":{\"pattern\":\"^[0-9]{10}$\",\"type\":\"string\"}},{\"description\":\"Type of NPI enumeration (NPI-1 for individuals, NPI-2 for organizations)\",\"in\":\"query\",\"name\":\"enumeration_type\",\"required\":false,\"schema\":{\"enum\":[\"NPI-1\",\"NPI-2\"],\"type\":\"string\"}},{\"description\":\"Healthcare provider taxonomy description\",\"in\":\"query\",\"name\":\"taxonomy_description\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Provider's first name (for individual providers)\",\"in\":\"query\",\"name\":\"first_name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Provider's last name (for individual providers)\",\"in\":\"query\",\"name\":\"last_name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Organization name (for organizational providers)\",\"in\":\"query\",\"name\":\"organization_name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Address type (LOCATION, MAILING, PRIMARY, SECONDARY)\",\"in\":\"query\",\"name\":\"address_purpose\",\"required\":false,\"schema\":{\"enum\":[\"LOCATION\",\"MAILING\",\"PRIMARY\",\"SECONDARY\"],\"type\":\"string\"}},{\"description\":\"Provider's city\",\"in\":\"query\",\"name\":\"city\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Provider's state (two-letter state code)\",\"in\":\"query\",\"name\":\"state\",\"required\":false,\"schema\":{\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"}},{\"description\":\"Provider's postal code\",\"in\":\"query\",\"name\":\"postal_code\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Provider's country code\",\"in\":\"query\",\"name\":\"country_code\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of results to return (default 10, max 200)\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"skip\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Format the JSON output for better readability\",\"in\":\"query\",\"name\":\"pretty\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"result_count\":{\"description\":\"Number of results returned in this response\",\"type\":\"integer\"},\"results\":{\"description\":\"Array of provider records\",\"items\":{\"properties\":{\"addresses\":{\"description\":\"Provider addresses\",\"items\":{\"properties\":{\"address_1\":{\"type\":\"string\"},\"address_2\":{\"type\":\"string\"},\"address_purpose\":{\"type\":\"string\"},\"address_type\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"fax_number\":{\"type\":\"string\"},\"postal_code\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"telephone_number\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"basic\":{\"description\":\"Basic provider information\",\"properties\":{\"credential\":{\"type\":\"string\"},\"enumeration_date\":{\"format\":\"date\",\"type\":\"string\"},\"first_name\":{\"type\":\"string\"},\"gender\":{\"type\":\"string\"},\"last_name\":{\"type\":\"string\"},\"last_updated\":{\"format\":\"date\",\"type\":\"string\"},\"middle_name\":{\"type\":\"string\"},\"name\":{\"description\":\"Organization name for NPI-2\",\"type\":\"string\"},\"organization_name\":{\"type\":\"string\"},\"sole_proprietor\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"}},\"type\":\"object\"},\"endpoints\":{\"description\":\"Provider endpoints for health information exchange\",\"type\":\"array\"},\"enumeration_type\":{\"description\":\"Type of enumeration\",\"type\":\"string\"},\"identifiers\":{\"description\":\"Other identifiers\",\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"desc\":{\"type\":\"string\"},\"identifier\":{\"type\":\"string\"},\"issuer\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"number\":{\"description\":\"NPI number\",\"type\":\"string\"},\"other_names\":{\"description\":\"Other names associated with the provider\",\"type\":\"array\"},\"practiceLocations\":{\"description\":\"Practice locations\",\"type\":\"array\"},\"taxonomies\":{\"description\":\"Provider taxonomy codes and descriptions\",\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"desc\":{\"type\":\"string\"},\"license\":{\"type\":\"string\"},\"primary\":{\"type\":\"boolean\"},\"state\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with provider data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"Errors\":{\"items\":{\"properties\":{\"description\":{\"type\":\"string\"},\"field\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["address_purpose","city","country_code","enumeration_type","first_name","last_name","limit","number","organization_name","postal_code","pretty","skip","state","taxonomy_description","version"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search_npi","name__orig":"search_npi","Name":"SearchNpi","name_":"search_npi","name-":"search-npi","NAME":"SEARCH_NPI","index$":0}, {"active":true,"entity":"search_npi","key$":"BasicSearchNpiFlow","kind":"basic","name":"BasicSearchNpiFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_npi_ref01"}}],"index$":0}]}, 'SearchNpi')
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
  
