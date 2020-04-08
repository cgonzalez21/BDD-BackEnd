module.exports = function () {
	// return {
	// 	poolConfig: {
	// 		min: 0,
	// 		max: 20,
	// 		log: false,
	// 		idleTimeout: 100000,
	// 		multipleStatements: true
	// 	},
	// 	connectionConfig: {
	// 		userName: 'sa',
	// 		password: 'sa123',
	// 		server: 'localhost',
	// 		options: {
	// 			database: 'REPOS',
	// 			instanceName: 'SQLEXPRESS',
	// 			useColumnNames: true,
	// 			enableArithAbort: false
	// 		}
	// 	}
	// };
	return {
		server: 'localhost',
		user: 'sa',
		password: 'sa123',
		database: 'REPOS',
		instanceName: 'SQLEXPRESS'
	}
}