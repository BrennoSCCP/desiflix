import './favoritos.css' 
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@desiflix")
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme) =>{
            return(filme.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem("@desiflix", JSON.stringify(filtroFilmes))
        toast.success("Filme excluido com sucesso!");
    }

    return(
        <div className="container">
            <div className="meus-filmes">
                <h1>Minha lista de filmes</h1>

                {filmes.length === 0 && <span>Você ainda não possui filmes salvos :( </span>}
                
                <ul>
                    {filmes.map((filme) => {
                        return(
                            <li key={filme.id} >
                                <span>{filme.title}</span>
                                <div>
                                    <Link className='button-acoes' to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                    <button className="btn-excluir" onClick={()=> excluirFilme(filme.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        
    )
}

export default Favoritos