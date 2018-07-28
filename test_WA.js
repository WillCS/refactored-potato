var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule);


var linearMemory= wasmInstance.exports.memory;
var offset = wasmInstance.exports.A2();
var offset2 = wasmInstance.exports.A3();
var buffer = new Uint8Array(linearMemory.buffer, offset,
  wasmInstance.exports.A2size() - 1);
var buffer2 = new Uint8Array(linearMemory.buffer, offset,
  wasmInstance.exports.A3size() - 1);
var a1 =  wasmInstance.exports.A1()
var str = '';
for (var i=0; i<buffer.length; i++) {
  str += String.fromCharCode(buffer[i]);
}

log(str);
log(offset2);
log(a1);