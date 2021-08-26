const nameRepository = 'RocketSeat 🚀'
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <li>
          <strong>{nameRepository}</strong>
          <p>Form in React</p>
          <a href=""> Acessar Repositorio</a>
        </li>
      </ul>
    </section>
  )
}
