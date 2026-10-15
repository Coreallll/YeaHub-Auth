interface PaginationItemsProps {
  totalPages: number;
  currentPage: number;
}
export const getPaginationItems = ({totalPages, currentPage}: PaginationItemsProps) => {

  const items = [];

  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(i);
    }

    return items;
  }

  items.push(1);

  if (currentPage > 4) {
    items.push('...');
  }

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  for (let i = start; i <= end; i++) {
    items.push(i);
  }

  if (currentPage < totalPages - 2) {
    items.push('...');
  }

  items.push(totalPages);

  return items;
}