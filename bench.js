const process = require('process')

function MyProto() { this.attr = 1; };
MyProto.prototype.inc = function(val) { return val + this.attr; }
MyProto.static_inc = function(val) { return val++; }

class MyClass {
  constructor() {
    this.attr = 1;
  }
  inc(val) {
    return val++;
  }
  static static_inc(val) {
    return val + this.attr;
  }
}

originalPlainObj = {
  attr: 1,
  inc: function (val) { return val + this.attr; },
  static_inc: (val) => val++
}

const plainInc = (state, val) => val + state.attr;
const plainStaticInc = (val) => val++;

// -----

const benchmarks = {
  protoBench: () => {
    var proto = new MyProto();
    proto.inc(10);
    proto.inc(12);
    proto.inc(14);
    proto.inc(16);
    proto.inc(18);
  },

  protoStaticBench: () => {
    MyProto.static_inc(10);
    MyProto.static_inc(12);
    MyProto.static_inc(14);
    MyProto.static_inc(16);
    MyProto.static_inc(18);
  },

  classBench: () => {
    var obj = new MyClass();
    obj.inc(10);
    obj.inc(12);
    obj.inc(14);
    obj.inc(16); 
    obj.inc(18);
  },

  classStaticBench: () => {
    MyClass.static_inc(10);
    MyClass.static_inc(12);
    MyClass.static_inc(14);
    MyClass.static_inc(16);
    MyClass.static_inc(18);
  },

  plainObjBench: () => {
    const plain = {
      attr: 1,
      inc: originalPlainObj.inc, // reuses original function
      static_inc: originalPlainObj.static_inc
    };
    plain.inc(10);
    plain.inc(12);
    plain.inc(14);
    plain.inc(16);
    plain.inc(18);
  },

  plainObjBenchNaive: () => {
    const plain = Object.assign({}, originalPlainObj); // huge performance hit
    plain.inc(10);
    plain.inc(12);
    plain.inc(14);
    plain.inc(16);
    plain.inc(18);
  },

  plainObjStaticBench: () => {
    originalPlainObj.static_inc(10);
    originalPlainObj.static_inc(12);
    originalPlainObj.static_inc(14);
    originalPlainObj.static_inc(16);
    originalPlainObj.static_inc(18);
  },

  plainFnBench: () => {
    const state = { attr: 1 };
    plainInc(state, 10);
    plainInc(state, 12);
    plainInc(state, 14);
    plainInc(state, 16);
    plainInc(state, 18);
  },
  
  plainFnStaticBench: () => {
    plainStaticInc(10);
    plainStaticInc(12);
    plainStaticInc(14);
    plainStaticInc(16);
    plainStaticInc(18);
  }
}

// -----

const benchToRun = benchmarks[process.argv[2]] ??
  console.log(`benchmark name not found. try one of '${Object.keys(benchmarks).join("','")}'. \nfor example: time node bench.js classBench`);

for (let i = 0; i < 99999999; i++) {
  benchToRun();
}

if (process.argv.includes('--show-memory-usage')) {
  console.log('\nMemory usage:')
  Object.entries(process.memoryUsage()).map(([key, val]) => console.log(`${key}: ${val/1000000}MB`))
  console.log('')
}