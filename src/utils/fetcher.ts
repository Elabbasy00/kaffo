export const fetcher = async (url: string, config?: {}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DJANGO_URL}${url}`,
    config
  );
  return response;
};

export async function api<T>(url: string, config?: {}): Promise<T> {
  return fetch(`${process.env.NEXT_PUBLIC_DJANGO_URL}${url}`, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .then((data) => {
      return data;
    });
}
