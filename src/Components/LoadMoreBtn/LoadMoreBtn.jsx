import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ hendleLoad }) {
  return (
    <button className={css.button} onClick={hendleLoad}>
      Load more
    </button>
  );
}
