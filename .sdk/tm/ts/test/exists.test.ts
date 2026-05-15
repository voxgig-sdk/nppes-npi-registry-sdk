
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NppesNpiRegistrySDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NppesNpiRegistrySDK.test()
    equal(null !== testsdk, true)
  })

})
