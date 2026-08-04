module.exports = {
  apps: [
    {
      name: "mfyz",
      script: "./server.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
