const chalk = require("chalk");
const detect = require("detect-port");
const yargs = require("yargs");

const args = yargs
  .scriptName("port-precheck")
  .usage("$0 [ports]")
  .command(
    ["check <port> [ports..]", "*"],
    "Port checker",
    (yargs) => {
      yargs.positional("ports", {
        type: "array",
        default: [],
        describe: "List of ports to validate",
      });
    },
    (argv) => {
      argv.ports.unshift(argv.port);
    }
  )
  .help().argv;

if (args.ports.length > 0) {
  const preCheck = async (port) => {
    const result = await detect(port);
    if (result == port) return true;
    throw new Error(`Required port [${port}] is currently in use`);
  };

  (async () => {
    try {
      await Promise.all(
        args.ports.map(async (port) => {
          await preCheck(port);
        })
      );
    } catch (error) {
      console.error(chalk.yellowBright(error));
      process.exit(1);
    }
    process.exit(0);
  })();
}
