
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c827386d7msh239a1da51210460p1f9445jsnf58c82a9ee83',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

   const getWheather=async(city)=>{
	    cityName.innerHTML = city;
	    try {
		const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		cloud_pct.innerHTML = result.cloud_pct
		temp.innerHTML = result.temp
		temp2.innerHTML = result.temp
		feels_like.innerHTML = result.feels_like
		humidity.innerHTML = result.humidity
		humidity2.innerHTML = result.humidity
		min_temp.innerHTML = result.min_temp
		max_temp.innerHTML = result.max_temp
		wind_speed.innerHTML = result.wind_speed
		wind_speed2.innerHTML = result.wind_speed
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise
		sunset.innerHTML = result.sunset

	} catch (error) {
		console.error(error);
	}
 }
 
  submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWheather(city.value);
 })
getWheather("Delhi");
 
const whether1=async(city)=>{
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
		const response = await fetch(url, options);
		const result = await response.json();
		a1.innerHTML = result.cloud_pct;
		a2.innerHTML = result.temp;
		a3.innerHTML = result.feels_like;
		a4.innerHTML = result.humidity;
		a5.innerHTML = result.min_temp;
		a6.innerHTML = result.max_temp;
		a7.innerHTML = result.wind_speed;
		a8.innerHTML = result.wind_degrees;
		a9.innerHTML = result.sunrise;
		a10.innerHTML = result.sunset;
 
};
whether1("patna");

const whether2=async(city)=>{
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
			const response = await fetch(url, options);
			const result = await response.json();
			b1.innerHTML = result.cloud_pct;
			b2.innerHTML = result.temp;
			b3.innerHTML = result.feels_like;
			b4.innerHTML = result.humidity;
			b5.innerHTML = result.min_temp;
			b6.innerHTML = result.max_temp;
			b7.innerHTML = result.wind_speed;
			b8.innerHTML = result.wind_degrees;
			b9.innerHTML = result.sunrise;
			b10.innerHTML = result.sunset;
	 
	};
	whether2("London");

const whether3=async(city)=>{
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
			const response = await fetch(url, options);
			const result = await response.json();
			c1.innerHTML = result.cloud_pct;
			c2.innerHTML = result.temp;
			c3.innerHTML = result.feels_like;
			c4.innerHTML = result.humidity;
			c5.innerHTML = result.min_temp;
			c6.innerHTML = result.max_temp;
			c7.innerHTML = result.wind_speed;
			c8.innerHTML = result.wind_degrees;
			c9.innerHTML = result.sunrise;
			c10.innerHTML = result.sunset;
	 
	};
	whether3("Lucknow");

	const whether4=async(city)=>{
		const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
				const response = await fetch(url, options);
				const result = await response.json();
				d1.innerHTML = result.cloud_pct;
				d2.innerHTML = result.temp;
				d3.innerHTML = result.feels_like;
				d4.innerHTML = result.humidity;
				d5.innerHTML = result.min_temp;
				d6.innerHTML = result.max_temp;
				d7.innerHTML = result.wind_speed;
				d8.innerHTML = result.wind_degrees;
				d9.innerHTML = result.sunrise;
				d10.innerHTML = result.sunset;
		 
		};
		whether4("Shanghai");