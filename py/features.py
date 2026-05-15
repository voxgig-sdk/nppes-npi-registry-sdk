# NppesNpiRegistry SDK feature factory

from feature.base_feature import NppesNpiRegistryBaseFeature
from feature.test_feature import NppesNpiRegistryTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NppesNpiRegistryBaseFeature(),
        "test": lambda: NppesNpiRegistryTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
