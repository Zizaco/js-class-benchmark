echo -e "nodejs version: $(node -v)\n"
echo -e "# INSTANCE METHOD #######################\n"
echo "## proto instantiation and method call --------------------"
time for i in {1..99}; do node bench.js protoBench; done;
node bench.js protoBench --show-memory-usage

echo "## class instantiation and method call --------------------"
time for i in {1..99}; do node bench.js classBench; done;
node bench.js classBench --show-memory-usage

echo "## plain object instantiation and method call --------------------"
time for i in {1..99}; do node bench.js plainObjBench; done;
node bench.js plainObjBench --show-memory-usage

echo "## plain object instantiation and method call (naive impl) ------------"
## This takes way too long (minutes)
# time for i in {1..99}; do node bench.js plainObjBenchNaive; done;
echo -e "\n[takes too long]"
node bench.js plainObjBenchNaive --show-memory-usage

echo "## plain functions call w/ 2 args --------------------"
time for i in {1..99}; do node bench.js plainFnBench; done;
node bench.js plainFnBench --show-memory-usage

echo -e "# STATIC METHOD #######################\n"
echo "## proto static method call --------------------"
time for i in {1..99}; do node bench.js protoStaticBench; done;
node bench.js protoStaticBench --show-memory-usage

echo "## class static method call --------------------"
time for i in {1..99}; do node bench.js classStaticBench; done;
node bench.js classStaticBench --show-memory-usage

echo "## plain object function call --------------------"
time for i in {1..99}; do node bench.js plainObjStaticBench; done;
node bench.js plainObjStaticBench --show-memory-usage

echo "## plain function call --------------------"
time for i in {1..99}; do node bench.js plainFnStaticBench; done;
node bench.js plainFnStaticBench --show-memory-usage