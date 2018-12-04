module.exports = {
  apps: [
    {
      name: "app",
      script: "./node_modules/.bin/ts-node",
      args: "-r tsconfig-paths/register ./src/server.ts"
    },
    {
      name: "cron",
      script: "./node_modules/.bin/ts-node",
      args: "-r tsconfig-paths/register ./src/cron.ts"
    }
  ]
};
