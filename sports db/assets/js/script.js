const loadSports = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displaySports(data.sports))
}

const displaySports = sports => {
    const sportsCOntainer = document.getElementById('sports-container')
    sports.forEach(sport => {
        console.log(sport);
        const sportDiv = document.createElement('div');
        sportDiv.classList.add('col');
        sportDiv.innerHTML = `
        <div class="card">
            <img src="${sport.strSportThumb ? sport.strSportThumb : 'https://i.ibb.co/hfgdwZ5/image.png'}" class="card-img-top" alt="picture not found">
            <div class="card-body">
            <h5 class="card-title">${sport.strSport}</h5>
            <p class="card-text">${sport.strSportDescription.slice(0,200)}</p>
            </div>
        </div>
        `;
        sportsCOntainer.appendChild(sportDiv);

});
}

loadSports();
