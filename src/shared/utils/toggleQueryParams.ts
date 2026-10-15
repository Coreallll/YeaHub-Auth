export function toggleQueryParams(
  searchParams: URLSearchParams,
  key: string,
  value: string | number | null) {
  const params = new URLSearchParams(searchParams);

  const currentValues = params.get(key)?.split(",") ?? [];
  const stringValue = String(value);

  const next = currentValues.includes(stringValue)
    ? currentValues.filter(value => value !== stringValue)
    : [...currentValues, stringValue];

  if (next.length) {
    params.set(key, next.join(","));
  } else {
    params.delete(key);
  }

  return params;
}