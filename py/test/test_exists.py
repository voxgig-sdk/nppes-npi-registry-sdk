# ProjectName SDK exists test

import pytest
from nppesnpiregistry_sdk import NppesNpiRegistrySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NppesNpiRegistrySDK.test(None, None)
        assert testsdk is not None
