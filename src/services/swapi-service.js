export  default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`); 

        if (!res.ok){
            throw new Error (`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return  await res.json();
    }
    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPPerson)
    }

    getPerson(id) {
        const person =  this.getResource(`/people/${id}/`);
        return this._transformPPerson(person);
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }
    getStarship(id) {
        const starship =  this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;                                                   // regular expression
        return item.url.match(idRegExp)[1] - 1;
    }

    _transformPlanet(planet){
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship) {
        return {
            id : this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            lenght: starship.lenght,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    _transformPerson(person){
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}


const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok){
        throw new Error (`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return  await res.json();

};
getResource('https://swapi.co/api/people/')
    .then((body) => {
        console.log(body);
    })
getResource('https://swapi.co/api/planets/')
    .then((res) => {
        res.results.forEach(el => {
                console.log (el.name)
        })
    })

    .catch((err) => {
        console.error('Could not fetch', err);
    });
