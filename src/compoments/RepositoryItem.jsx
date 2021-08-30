export function RepositoryItem(props) {
  return (
    <li>
      <h1>{props.repositories.name}</h1>
      <p>{props.repositories.description}</p>
      <a href={props.repositories.html_url}>
        {props.repositories.name}
      </a>
    </li>
  )
}
