# Node classes benchmark

A simple (and non scientific) benchmark that aims to compare the speed and memory usage of `prototype`, `classes`, `plain objects` and `plain functions` to run functions on self-contained data (methods) and static functions.

## Results

> ℹ️ You results may differ

```
$ ./run.sh 
nodejs version: v14.8.0

# INSTANCE METHOD #######################

## proto instantiation and method call --------------------

real    0m11,978s
user    0m11,612s
sys     0m0,577s

Memory usage:
rss: 34.045952MB
heapTotal: 5.824512MB
heapUsed: 2.706792MB
external: 0.962313MB
arrayBuffers: 0.009386MB

## class instantiation and method call --------------------

real    0m10,376s
user    0m10,148s
sys     0m0,431s

Memory usage:
rss: 33.685504MB
heapTotal: 5.824512MB
heapUsed: 2.837496MB
external: 0.962313MB
arrayBuffers: 0.009386MB

## plain object instantiation and method call --------------------

real    0m10,652s
user    0m10,346s
sys     0m0,506s

Memory usage:
rss: 33.452032MB
heapTotal: 5.562368MB
heapUsed: 2.998768MB
external: 0.962313MB
arrayBuffers: 0.009386MB

# STATIC METHOD #######################

## proto static method call --------------------

real    0m10,174s
user    0m9,934s
sys     0m0,439s

Memory usage:
rss: 33.292288MB
heapTotal: 4.775936MB
heapUsed: 2.981264MB
external: 0.962313MB
arrayBuffers: 0.009386MB

## class static method call --------------------

real    0m10,168s
user    0m9,916s
sys     0m0,450s

Memory usage:
rss: 33.9968MB
heapTotal: 5.562368MB
heapUsed: 3.081912MB
external: 0.962313MB
arrayBuffers: 0.009386MB

## plain function call --------------------

real    0m10,152s
user    0m9,899s
sys     0m0,447s

Memory usage:
rss: 33.128448MB
heapTotal: 4.775936MB
heapUsed: 3.005024MB
external: 0.962313MB
arrayBuffers: 0.009386MB
```