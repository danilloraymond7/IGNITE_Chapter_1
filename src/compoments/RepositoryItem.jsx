export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.nameRepository.name}</strong>
      <p>{props.nameRepository.description}</p>
      <a
        href={props.nameRepository.link}> {
        props.nameRepository.name}
      </a>
    </li>
  )
}
