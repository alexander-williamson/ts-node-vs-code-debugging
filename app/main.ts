import { HelloWorldService } from "./services/HelloWorldService";

async function RunAsync(): Promise<void> {
  const greeter = new HelloWorldService();
  await greeter.GreetAsync("Jane Doe");

  console.info("Finished RunAsync()");
}

RunAsync(); // top level await
