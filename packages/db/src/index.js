const fs = require('fs'),
			path = require('path'),
			{ exporter } = require('@dbml/core');

const dbml = fs.readFileSync(
	path.resolve(__dirname, './schema.dbml'),
	'utf-8'
);

const sql = exporter.export(dbml, 'postgres');
console.log(sql);
