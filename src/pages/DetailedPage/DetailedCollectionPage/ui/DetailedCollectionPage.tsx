import styles from "../../DetailedPage.module.css";
import arrowReturn from "@/shared/assets/icons/arrowReturn.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCollectionByIdQuery } from "@/pages/DetailedPage/DetailedCollectionPage/api/collectionByIdApi.ts";
import DetailedCollectionPageSkeleton from "@/pages/DetailedPage/DetailedCollectionPage/ui/DetailedCollectionPageSkeleton.tsx";
import DetailedCollectionTitle from "@/pages/DetailedPage/DetailedCollectionPage/ui/DetailedCollectionTitle.tsx";
import { Questions } from "@/widgets/questions";
import DetailedCollectionPageSidebar from "@/pages/DetailedPage/DetailedCollectionPage/ui/DetailedCollectionPageSidebar.tsx";

export default function DetailedCollectionPage() {
  const navigate = useNavigate();

  const { collectionId } = useParams();
  const {
    data: collection,
    isLoading: isCollectionLoading,
    isError: isCollectionError,
  } = useGetCollectionByIdQuery(String(collectionId));

  if (isCollectionLoading) {
    return <DetailedCollectionPageSkeleton />;
  }
  if (isCollectionError) {
    return (
      <div className={styles.contentWrapper}>
        <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>
          Ошибка при загрузке коллекции
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className={styles.contentWrapper}>
        <div className={`${styles.shadowWrapper} ${styles.titleWrapper}`}>Контент не найден</div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <button
        className={styles.returnBtn}
        onClick={() => navigate("/collections")}
      >
        <img
          src={arrowReturn}
          alt="Стрелка назад"
        />
        Назад
      </button>
      <div className="mainWrapper">
        <div className={styles.contentWrapper}>
          <DetailedCollectionTitle collection={collection} />
          <Questions collection={collection} />
        </div>
        <DetailedCollectionPageSidebar collection={collection} />
      </div>
    </div>
  );
}
