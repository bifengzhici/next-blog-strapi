// 开发环境变量

export default ({ env }) => ({
  host: "127.0.0.1",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
