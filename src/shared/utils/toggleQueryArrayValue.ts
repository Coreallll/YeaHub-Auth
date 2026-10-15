export function toggleQueryArrayValues(
  searchParams: URLSearchParams,
  key: string,
  values: string[] | number[],
) {
  const params = new URLSearchParams(searchParams);

  const current = params.get(key)?.split(",") ?? [];
  const nextValues = values.map(String);

  const isActive = nextValues.every(value =>
    current.includes(value)
  );

  const next = isActive
    ? current.filter(value => !nextValues.includes(value))
    : [...new Set([...current, ...nextValues])];

  if (next.length) {
    params.set(key, next.join(","));
  } else {
    params.delete(key);
  }

  return params;
}