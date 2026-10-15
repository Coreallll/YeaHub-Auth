import styles from "./CollectionCard.module.css";
import collectionCardPlaceholder from "@/shared/assets/images/itemCardPlaceholder.png";
import star from "@/shared/assets/icons/star.svg";
import question from "@/shared/assets/icons/question.svg";
import { Link } from "react-router-dom";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import { getQuestionsWord } from "@/shared/utils/getQuestionWord.ts";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      className={styles.cardWrapper}
      to={`/collections/${collection.id}`}
    >
      <img
        className={styles.cardImg}
        src={collection.company?.imageSrc ?? collectionCardPlaceholder}
        alt={collection.company?.title}
      />
      <div className={styles.cardContent}>
        <ul className={styles.keywordsList}>
          {collection.keywords.map((keyword) => (
            <li
              key={keyword}
              className={styles.keyword}
            >
              {keyword}
            </li>
          ))}
        </ul>
        <h2 className={styles.cardTitle}>{collection.title}</h2>
        <div className={styles.cardLinks}>
          <span className={styles.cardLink}>
            {collection.isFree === false && (
              <img
                src={star}
                alt=""
              />
            )}
            {collection.isFree === true ? <span>Для всех</span> : <span>Для участников</span>}
          </span>
          <span className={styles.cardLink}>
            <img
              src={question}
              alt=""
            />
            <span>
              {collection.questionsCount} {getQuestionsWord(collection.questionsCount)}
            </span>
          </span>
        </div>
        <ul className={styles.specList}>
          {collection.specializations.map((specialization) => (
            <li
              key={specialization.id}
              className={styles.cardSpec}
            >
              {specialization.title}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
