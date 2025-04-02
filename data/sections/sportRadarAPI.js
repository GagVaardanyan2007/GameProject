export default async function newsGenerate(){
    const url = 'https://sportsradar-sportsbook-api.p.rapidapi.com/api/v1/sportsradar/scoreboard';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0839422a30mshb8006d96e29f070p1cd8a8jsn1c96d31fb648',
            'x-rapidapi-host': 'sportsradar-sportsbook-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}