import { RepositoryItem} from './RepositoryItem'

const objRepository = {
  name:'Unform',
  description:'Form for React',
  link:'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem nameRepository={objRepository}/>
      </ul>
    </section>
  )
}
