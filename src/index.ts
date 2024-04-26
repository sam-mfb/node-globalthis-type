//@ts-expect-error
const stream = new globalThis.ReadableStream({
  //@ts-expect-error
  start(controller) {
    controller.enqueue("Hello, ");
    controller.enqueue("World!");
    controller.close();
  },
});

async function readStream() {
  const reader = stream.getReader();
  let result;
  while (!(result = await reader.read()).done) {
    process.stdout.write(result.value);
  }
  console.log();
}

readStream();
