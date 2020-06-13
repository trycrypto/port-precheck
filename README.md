<p align="center">
<img src="https://uploads-ssl.webflow.com/5dea4f8b31edea3328b9a0f6/5dea5bbc58e6cbc7d65a5d75_trycrypto_logo.png" alt="TryCrypto Logo" />
</p>

# port-precheck
Port precheck is a command line interface (CLI) application to check to see if a required port is in use before additional scripts proceed to run

This utility is mostly a wrapper function for [detect-port](https://github.com/node-modules/detect-port) package to give a more basic api when running from the command line.

# Install
```yarn add -D https://github.com/trycrypto/port-precheck```

# Usage
Add to your ```package.json``` under scripts

```
...
{
    "prestart": "port-precheck 3000",
    "start": "react-scripts start"
}
...
```

If port _3000_ is in use the start script will exit and display a warning ```[Error] Required port 3000 is currently in use.```

