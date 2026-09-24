
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NppesNpiRegistrySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NppesNpiRegistrySDK.test()
    equal(testsdk instanceof NppesNpiRegistrySDK, true,
      'NppesNpiRegistrySDK.test() must return a client synchronously')
  })

})
