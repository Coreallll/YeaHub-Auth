export function replaceQueryParams(
  searchParams: URLSearchParams,
  key: string,
  value: string | number | null) {
  const params = Object.fromEntries(searchParams);

  if (value) {
    params[key] = String(value);
  } else {
    delete params[key];
  }

  return params;
}