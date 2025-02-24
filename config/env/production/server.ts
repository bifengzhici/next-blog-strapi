// 生产环境变量

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
