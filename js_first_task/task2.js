const mainFunc = (csvText) => {
	let rating = 1;
	const topCitiesNames = [];

	const topCitiesInfo = csvText
		.split('\n')
		.filter((cityStr) => {
			// todo add regex later
			if (cityStr.charAt(0) === '#' || cityStr.length === 0) {
				return false;
			}

			return true;
		})
		.map((cityStr) => {
			cityStrValues = cityStr.split(',');

			return {
				x: Number(cityStrValues[0]),
				y: Number(cityStrValues[1]),
				name: cityStrValues[2],
				population: Number(cityStrValues[3]),
			};
		})
		.sort((cityObj1, cityObj2) => cityObj2.population - cityObj1.population)
		.slice(0, 10)
		.reduce((comprisedCitiesInfo, cityObj) => {
			const { name: cityName, population } = cityObj;
			topCitiesNames.push(cityName);
			comprisedCitiesInfo[cityName] = { population, rating };
			rating++;
			return comprisedCitiesInfo;
		}, {});

	return (textWithCityName) => {
		topCitiesNames.forEach((cityName) => {
			if (textWithCityName.includes(cityName)) {
				const { population, rating } = topCitiesInfo[cityName];
				textWithCityName = textWithCityName.replace(
					cityName,
					`${cityName} (население: ${population}, популярность: ${rating})`
				);
			}
		});

		return textWithCityName;
	};
};

// todo later check for 30,40,Львов,#300000
const citiesCsv = `10,20,Кропивницкий,200000
30,40,Львов,300000

#fdsfsdfsdf
50,60,Харьков,500000
70,80,Одесса,600000
70,80,Тернополь,100000
70,80,Франковск,700000
70,80,Чернвоцы,100000
70,80,Ужгород,100000
70,80,Луцк,800000
70,80,Хмельницк,100000
70,80,Винница,9900000
70,80,Суммы,50000`;

console.log(mainFunc(citiesCsv)('вчера мы приехали в Луцк, завтра едем в Ужгород'));
