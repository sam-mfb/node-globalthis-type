# Node globalThis typing

A small app that demonstrates a problem with globalThis typing in node, namely, that it does not expose ReadableStream, even though it is present on the globalThis object

## Usage

```
npm install
npm run build
node dist/index.js
```

It will print "Hello,World" demonstrating that the stream is created, notwithstanding the explicitly ignored TS errors in `src/index.ts`
