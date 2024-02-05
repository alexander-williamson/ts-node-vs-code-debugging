import { Sleeper } from "./Sleeper";

export class HelloWorldService {
  public async GreetAsync(name: string): Promise<void> {
    await Sleeper.Sleep(100);
    console.info(`Hello ${name}`);
  }
}
