# NppesNpiRegistry SDK feature factory

from nppesnpiregistry_sdk.feature.base_feature import NppesNpiRegistryBaseFeature
from nppesnpiregistry_sdk.feature.ratelimit_feature import NppesNpiRegistryRatelimitFeature
from nppesnpiregistry_sdk.feature.retry_feature import NppesNpiRegistryRetryFeature
from nppesnpiregistry_sdk.feature.test_feature import NppesNpiRegistryTestFeature
from nppesnpiregistry_sdk.feature.timeout_feature import NppesNpiRegistryTimeoutFeature


_FEATURES = {
    "base": lambda: NppesNpiRegistryBaseFeature(),
    "ratelimit": lambda: NppesNpiRegistryRatelimitFeature(),
    "retry": lambda: NppesNpiRegistryRetryFeature(),
    "test": lambda: NppesNpiRegistryTestFeature(),
    "timeout": lambda: NppesNpiRegistryTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
