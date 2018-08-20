const mysql = require('mysql2');

module.exports = {
	'connect': () => mysql.createConnection({
		'host': 'localhost',
		'user': 'root',
		'password': '',
		'database': 'butik_opg_aug'
	})
};
