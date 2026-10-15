import styles from "@/shared/ui/Sidebar/SidebarLayout.module.css";

interface SidebarLayoutProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export function SidebarLayout({ children, className = "" }: SidebarLayoutProps) {
  return <aside className={`${styles.sidebar} ${className}`}>{children}</aside>;
}
