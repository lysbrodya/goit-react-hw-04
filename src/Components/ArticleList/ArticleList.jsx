export default function ArticleList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noreferrer noopener">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
