import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ hendleLoadMore }) {
  return (
    <button className={css.button} onClick={hendleLoadMore}>
      Load more
    </button>
  );
}
