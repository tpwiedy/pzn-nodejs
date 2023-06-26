function samplePromise() {
  return Promise.resolve("Wiedy");
}

const name = await samplePromise();
console.info(name);
