
import {useEffect, useState} from 'react';
import api from '../../services/api';


//base da url: /https://api.themoviedb.org/3/
// api: /movie/now_playing?api_key=cfb58711e7afb393a4b54db263d762fa&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        async function loadFilmes(){
            const response = await api.get("movie/now_playing" ,{
                params: {
                    api_key: "cfb58711e7afb393a4b54db263d762fa",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results)
            
        }

        loadFilmes();

    },[]);

    return(
        
        <div className="Home">
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;