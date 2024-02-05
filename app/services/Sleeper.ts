export class Sleeper {
  public static async Sleep(ms: number): Promise<void> {
    console.debug("Sleeping");
    await new Promise((resolve) => setTimeout(resolve, ms));
    console.debug("Awake");
  }
}
