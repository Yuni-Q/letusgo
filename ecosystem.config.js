module.exports = {
	apps: [
		{
			name: 'study-watson',
			script: './server.js',
			exec_mode: 'cluster',
			instances: '0',
			instance_var: 'INSTANCE_ID',
			wait_ready: true,
			listen_timeout: 50000,
			kill_timeout: 5000,
			env: {
				NODE_ENV: 'development',
				NODE_CONFIG_DIR: './config/',
			},
			env_staging: {
				NODE_ENV: 'staging',
				NODE_CONFIG_DIR: './config/',
			},
			env_production: {
				NODE_ENV: 'production',
				NODE_CONFIG_DIR: './config/',
			},
		},
	],
};
