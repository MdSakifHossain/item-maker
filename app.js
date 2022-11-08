// grabbing all the necessary stuffs
const fakas = document.querySelectorAll(".faka")
const output = document.getElementById('output')
const cpBtn = document.getElementById('cpBtn')
const id = document.getElementById('id')
const poster = document.getElementById('poster')
const movieName = document.getElementById('movieName')
const movieDate = document.getElementById('movieDate')
const movieMonth = document.getElementById('movieMonth')
const movieYear = document.getElementById('movieYear')
const movieType = document.getElementById('movieType')
const movieBtn = document.getElementById('movieBtn')
const tvBtn = document.getElementById('tvBtn')
const movieQuality = document.getElementById('movieQuality')
const movieBackdrop = document.getElementById('movieBackdrop')


// movie button onclick ....
movieBtn.onclick = () => {
  movieType.value = 'Movie'
}

// tv button onclick ....
tvBtn.onclick = () => {
  movieType.value = "TV"
}





// generate function ...
const generate = () => {
	output.innerHTML = 
	`<span class="key" >"id"</span>: ${id.value},<br>
	<span class="key" >"poster"</span>: <span class="value" >"${poster.value}"</span>,<br>
	<span class="key" >"movieName"</span>: <span class="value" >"${movieName.value}"</span>,<br>
	<span class="key" >"movieYear"</span>: <span class="value" >"${movieDate.value}-${movieMonth.value}-${movieYear.value}"</span>,<br>
	<span class="key" >"type"</span>: <span class="value" >"${movieType.value}"</span>,<br>
	<span class="key" >"quality"</span>: <span class="value" >"${movieQuality.value}"</span>,<br>
	<span class="key" >"backdrop"</span>: <span class="value" >"${movieBackdrop.value}"</span>
	`
}




// reset function ...
const reset = () => {
  id.value = ""
  poster.value = ""
  movieName.value = ""
  movieDate.value = ""
  movieMonth.value = ""
  movieYear.value = ""
  movieType.value = ""
  movieQuality.value = "HD"
  movieBackdrop.value = ""
  output.innerHTML = 
  `<span class="key" >"id"</span>: ,<br>
  <span class="key" >"poster"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"movieName"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"movieYear"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"type"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"quality"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"backdrop"</span>: <span class="value" >""</span>
  `
  
}

// copy function

const copyBitch = () => {
	navigator.clipboard.writeText(output.innerText)
}
cpBtn.onclick = () => copyBitch()
