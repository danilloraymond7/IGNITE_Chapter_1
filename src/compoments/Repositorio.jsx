import { useState,useEffect } from 'react';
import { RepositoryItem} from './RepositoryItem'
import  '../styles/reporitory.scss';

export function RepositoryList() {
  const [listRepository,SetlistRepository] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => SetlistRepository(data))
  },[listRepository])

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {listRepository.map(repositories =>{
          return <RepositoryItem key={repositories.name} repositories={repositories}/>
        })}
      </ul>
    </section>
  )
}
