# NppesNpiRegistry SDK utility: make_context

from nppesnpiregistry_sdk.core.context import NppesNpiRegistryContext


def make_context_util(ctxmap, basectx):
    return NppesNpiRegistryContext(ctxmap, basectx)
