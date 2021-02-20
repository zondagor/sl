function DataTable(config, data) {
	const divContainer = document.getElementById(config.parent);
	const { columns } = config;
	if (!divContainer || !columns) {
		return; 
	}

	const table = document.createElement('table');
	const tableRowInHeader = document.createElement('tr');

	divContainer.appendChild(table);

	const tableHead = document.createElement('thead');
	tableHead.appendChild(tableRowInHeader);

	for (let i = 0; i < columns.length; i++) {
		// todo later check for a title
		const th = document.createElement('th');
		th.innerHTML = columns[i].title;

		tableRowInHeader.appendChild(th);
	}

	table.appendChild(tableHead);

    return table;
}

const config1 = {
	parent: '#usersTable',
	columns: [
		{ title: 'Имя', value: 'name' },
		{ title: 'Фамилия', value: 'surname' },
		{ title: 'Возраст', value: 'age' },
	],
};

const users = [
	{ id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
	{ id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
];

// const table = new DataTable(config1, users);
const table = DataTable(config1, users);


// const table = new Tabulator("#usersTable", config1);
// document.body.appendChild(table);
