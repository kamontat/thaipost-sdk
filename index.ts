class HelloWorld {
  constructor(private message: String = "Hello world") {}

  toString() {
    return this.message;
  }
}

console.log(new HelloWorld());
console.log(new HelloWorld("Hello earth"));
