import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";

@Discord()
export class Commands {
  /**
   * Expected: This command should work with both ! and $ as a prefix.
   * Actual: Only ! works, as the command parser only finds the dollar command when searching
   *         for commands with a $ prefix (i think)
   */
  @SimpleCommand({ aliases: ["hey", "hi"], name: "hello" })
  hello(command: SimpleCommandMessage): void {
    command.message.reply(
      "This command should work both with `!` and `$` as a prefix."
    );
  }

  /**
   * Expected: This command should only work with $ as a prefix.
   * Actual: works fine
   */
  @SimpleCommand({ name: "dollar", prefix: "$" })
  dollar(command: SimpleCommandMessage): void {
    command.message.reply(
      "This command should only work with `$` as a prefix."
    );
  }
}
