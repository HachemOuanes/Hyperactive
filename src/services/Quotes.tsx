import axios from 'axios';

const quotesGenerator = () => {

    var config = {
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'decbc3b3d7msh2a275583ac282a6p124ac3jsn7cb0388c8ab4',
            'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
        }
    }


    return axios
        .post('https://motivational-quotes1.p.rapidapi.com/motivation', config)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
}


export default quotesGenerator;
