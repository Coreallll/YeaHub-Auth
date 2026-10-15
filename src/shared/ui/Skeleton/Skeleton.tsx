import styles from "./Skeleton.module.css";

interface SkeletonProps {
  count?: number;
  className?: string;
  width?: number | undefined;
  height?: number | undefined;
  borderRadius?: number | undefined;
}

export default function Skeleton({
  count,
  className = "",
  width,
  height,
  borderRadius,
}: SkeletonProps) {
  return Array.from({ length: count || 1 }).map((_, index) => (
    <div
      key={index}
      className={className}
      style={{
        width: width ? `${width}px` : "100%",
      }}
    >
      <div
        className={styles.skeleton}
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "24px",
          borderRadius: borderRadius ? `${borderRadius}px` : "4px",
        }}
      ></div>
    </div>
  ));
}
