import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ items, imageClick }) {
  return (
    <ul className={css.gallary}>
      {items.map((image) => (
        <li key={image.id} onClick={() => imageClick(image.urls.regular)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
