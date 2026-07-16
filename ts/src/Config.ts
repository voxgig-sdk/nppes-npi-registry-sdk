
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://npiregistry.cms.hhs.gov/api',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      search_npi: {
      },

    }
  }


  entity = {
    "search_npi": {
      "fields": [
        {
          "active": true,
          "name": "address",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "basic",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 1
        },
        {
          "active": true,
          "name": "endpoint",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "enumeration_type",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "identifier",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "number",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "other_name",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "practice_location",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "taxonomy",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 8
        }
      ],
      "name": "search_npi",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "address_purpose",
                    "orig": "address_purpose",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "city",
                    "orig": "city",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "country_code",
                    "orig": "country_code",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "enumeration_type",
                    "orig": "enumeration_type",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "first_name",
                    "orig": "first_name",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "last_name",
                    "orig": "last_name",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "number",
                    "orig": "number",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "organization_name",
                    "orig": "organization_name",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "postal_code",
                    "orig": "postal_code",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": 0,
                    "kind": "query",
                    "name": "skip",
                    "orig": "skip",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "state",
                    "orig": "state",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "taxonomy_description",
                    "orig": "taxonomy_description",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "2.1",
                    "kind": "query",
                    "name": "version",
                    "orig": "version",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/",
              "parts": [],
              "select": {
                "exist": [
                  "address_purpose",
                  "city",
                  "country_code",
                  "enumeration_type",
                  "first_name",
                  "last_name",
                  "limit",
                  "number",
                  "organization_name",
                  "postal_code",
                  "pretty",
                  "skip",
                  "state",
                  "taxonomy_description",
                  "version"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

