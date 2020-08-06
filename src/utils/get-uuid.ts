import runCommand from "./run-command";

export default function checkForUuid(
  callback: (b: string | undefined) => void
) {
  runCommand("cat nr1.json", (err: Error, stdout: string, stderr: string) => {
    if (err) {
      callback(undefined);
    }

    let nr1Config;
    try {
      nr1Config = JSON.parse(stdout);
    } catch (err) {
      callback(undefined);
    }

    const uuid =
      nr1Config.id && typeof nr1Config.id === "string" && nr1Config.id;

    callback(uuid);
  });
}
