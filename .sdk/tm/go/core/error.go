package core

type NppesNpiRegistryError struct {
	IsNppesNpiRegistryError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNppesNpiRegistryError(code string, msg string, ctx *Context) *NppesNpiRegistryError {
	return &NppesNpiRegistryError{
		IsNppesNpiRegistryError: true,
		Sdk:              "NppesNpiRegistry",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NppesNpiRegistryError) Error() string {
	return e.Msg
}
