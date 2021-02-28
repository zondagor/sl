// todo think about what if some params didn't come
async function DataTable(config, data) {
	let dataArr = data;
	if (!dataArr) {
		let res = await fetch(config.apiUrl);
		res = await res.json();
		const arrOfObjects = [];

		for (user in res.data) {
			arrOfObjects.push(res.data[user]);
		}

		dataArr = arrOfObjects;
	}

	const divContainer = document.querySelector(config.parent);
	const { columns } = config;
	if (!divContainer || !columns) {
		return;
	}

	const columnNames = [];

	const addEntityBtn = document.createElement('button');
	addEntityBtn.innerHTML = 'add new'

	divContainer.appendChild(addEntityBtn);

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
	const actionColumn = document.createElement('th'); // last column in head
	actionColumn.innerHTML = 'Action';
	tableRowInHeader.appendChild(actionColumn);

	// table body
	const tableBody = document.createElement('tbody');
	table.appendChild(tableBody);
	
	const rowWithInputs = document.createElement('tr');
	const arrWithInputs = [];
	// rowWithInputs.style.display = 'none';
	tableBody.appendChild(rowWithInputs);
	for (columnName of columnNames) {
		const tableData = document.createElement('td');
		const input = document.createElement('input');
		// input.addEventListener("focus", () => {input.style.border = "2px solid red"})
		input.addEventListener("keydown", (e) => {
			if (e.key === "Enter"){
				let allFieldsAreFilled = true;
				for (let i = 0; i < arrWithInputs.length; i++) {
					const inputEl = arrWithInputs[i];
					if (inputEl.value === '') {
						allFieldsAreFilled = false;
						inputEl.style.border = "2px solid red"
					}
				}
				
			}
		})
		arrWithInputs.push(input);
		tableData.appendChild(input);
		rowWithInputs.appendChild(tableData);
	}

	for (let i = 0; i < dataArr.length; i++) {
		// each iteration is a new table row
		const tableRow = document.createElement('tr');
		tableBody.appendChild(tableRow);

		for (columnName of columnNames) {
			const tableData = document.createElement('td');
			tableData.innerHTML = dataArr[i][columnName] ? dataArr[i][columnName] : '';
			tableRow.appendChild(tableData);
		}
		const cellForActions = document.createElement('td'); // last cell in the row
		const deleteButton = document.createElement('button');
		deleteButton.innerHTML = 'Delete';
		deleteButton.onclick = () => deleteTableEntity(dataArr, i);
		cellForActions.appendChild(deleteButton);
		tableRow.appendChild(cellForActions);
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
};

const users = [
	{ id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
	{ id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
	{ id: 30051, dd: 'Вася', surname: 'Васечкин', age: 17, ff: 'fff' },
];

// DataTable(config1, users);

const config2 = {
	parent: '#usersTable',
	columns: [
		{ title: 'Имя', value: 'name' },
		{ title: 'Фамилия', value: 'surname' },
		{ title: 'ДР=))', value: 'birthday' },
	],
	apiUrl: 'http://mock-api.shpp.me/sdebryniuk/users',
};

function deleteTableEntity(dataArr, i) {
	const urlForDeletion = `${config2.apiUrl}/${dataArr[i].id}`;

	fetch(urlForDeletion, { method: 'DELETE' })
		.then((response) => response.json())
		.then((res) => {
			document.querySelector('table').remove();
			DataTable(config2);
		});
}

DataTable(config2);

// const table = new DataTable(config1, users);

// const table = new Tabulator("#usersTable", config1);
// document.body.appendChild(table);
