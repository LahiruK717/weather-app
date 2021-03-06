window.addEventListener('load', () => {
	let long
	let lat
	let temperatureDesctiption = document.querySelector('.temperature-description')
	let temperatureDegree = document.querySelector('.temperature-degree')
	let locationTimezone = document.querySelector('.location-timezone')
	let temperatureSection = document.querySelector('.temperature')
	let temperatureSpan = document.querySelector('.temperature span')

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude
			lat = position.coords.latitude

			const proxy = `https://cors-anywhere.herokuapp.com/`
			const weatherAPI = `${proxy}https://api.darksky.net/forecast/75f738816a0cb5f5f5130c2a90ed06a9/${lat},${long}`

			fetch(weatherAPI)
				.then(response => {
					return response.json()
				})
				.then(data => {
					const { temperature, summary, icon } = data.currently

					temperatureDegree.textContent = Math.round(temperature)
					temperatureDesctiption.textContent = summary
					locationTimezone.textContent = data.timezone
					setIcon(icon, document.querySelector('.icon'))
				})
		})
	}

	// comment 1
	// comment 2
	// comment 1.1
	// comment 7
	temperatureSection.addEventListener('click', () => {
		if (temperatureSpan.textContent == 'F') {
			temperatureSpan.textContent = 'C'
			temperatureDegree.textContent = Math.round((temperatureDegree.textContent - 32) * (5 / 9))
		} else {
			temperatureSpan.textContent = 'F'
			temperatureDegree.textContent = Math.round((temperatureDegree.textContent * 9) / 5 + 32)
		}
	})


	// commit 2
	// comment 1
	// commit 3
	// commit 4
	// commit 5
	// comment 7
	function setIcon(icon, iconId) {
		const skycons = new Skycons({ color: 'white' })
		const currentIcon = icon.replace(/-/g, '_').toUpperCase()
		skycons.play()
		return skycons.set(iconId, Skycons[currentIcon])
	}
})
