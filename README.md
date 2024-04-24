# formdata-node-readablestream-type-error

An example app showing an issue with formdata-nodes readable stream type

- ESM package
- formdata-node v6.0.3
- node v18
- TS v5.4.4

## problem

1. run `npm install`
2. run `npm run build`

expected

the build should succeed.

actual

the following error occurs

```text
$ npx tsc
node_modules/formdata-node/lib/File-cfd9c54a.d.ts:63:15 - error TS2304: Cannot find name 'ReadableStream'.

63     stream(): ReadableStream<Uint8Array>;
                 ~~~~~~~~~~~~~~


Found 1 error in node_modules/formdata-node/lib/File-cfd9c54a.d.ts:63
```

I am not sure why type is `ReadableStream<Uint8Array>` and not `AsyncIterable<Uint8Array>`, [like it is in source](https://github.com/octet-stream/form-data/blob/87a37564e8d3532cbdac44fed5896c7cb91391f3/src/File.ts#L30C13-L30C26).
