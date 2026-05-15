# NppesNpiRegistry SDK utility: make_error

from __future__ import annotations
from core.operation import NppesNpiRegistryOperation
from core.result import NppesNpiRegistryResult
from core.control import NppesNpiRegistryControl
from core.error import NppesNpiRegistryError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import NppesNpiRegistryContext
        ctx = NppesNpiRegistryContext({}, None)

    op = ctx.op
    if op is None:
        op = NppesNpiRegistryOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = NppesNpiRegistryResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, NppesNpiRegistryError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "NppesNpiRegistrySDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = NppesNpiRegistryError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, NppesNpiRegistryError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata, None

    return None, sdk_err
