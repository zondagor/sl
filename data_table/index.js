// todo think about what if some params didn't come

async function DataTable(config, data) {
	let dataArr = data
	if (!dataArr) {
		let res = await fetch(config.apiUrl)
		res = await res.json()
		console.log(res)
	}

	const divContainer = document.querySelector(config.parent);
	const { columns } = config;
	if (!divContainer || !columns) {
		return;
	}

	const columnNames = [];

	const table = document.createElement('table');
	divContainer.appendChild(table);

	// table head
	const tableHead = document.createElement('thead');
	table.appendChild(tableHead);
	const tableRowInHeader = document.createElement('tr');
	tableHead.appendChild(tableRowInHeader);
	for (let i = 0; i < columns.length; i++) {
		// todo later check for a title
		const th = document.createElement('th');
		th.innerHTML = columns[i].title;
		columnNames.push(columns[i].value);
		tableRowInHeader.appendChild(th);
	}

	// table body
	const tableBody = document.createElement('tbody');
	table.appendChild(tableBody);
	for (let i = 0; i < dataArr.length; i++) {
		const tableRow = document.createElement('tr');
		tableBody.appendChild(tableRow);

		for (columnName of columnNames) {
			const tableData = document.createElement('td');
			tableData.innerHTML = dataArr[i][columnName] ? dataArr[i][columnName] : '';
			tableRow.appendChild(tableData);
		}
		
	}

    return table;
}

const config1 = {
	parent: '#usersTable',
	columns: [
		{ title: 'Имя', value: 'name' },
		{ title: 'Фамилия', value: 'surname' },
		{ title: 'Возраст', value: 'age' },
	],
	apiUrl: "http://mock-api.shpp.me/asadov/users"
};

const users = [
	{ id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
	{ id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
	{ id: 30051, dd: 'Вася', surname: 'Васечкин', age: 17, ff: "fff" },
];


// DataTable(config1, users);
DataTable(config1);



// const table = new DataTable(config1, users);



// const table = new Tabulator("#usersTable", config1);
// document.body.appendChild(table);
