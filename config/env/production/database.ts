export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'next_blog_mysql'),
			user: env('DATABASE_USERNAME', 'next_blog_db_user'),
			password: env('DATABASE_PASSWORD', 'G24yhEfAfD4zZKiyDZ'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
