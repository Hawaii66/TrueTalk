import { API_ROUTE } from "../Functions/API";

export const useFetch = () => {
  const makeAuthedGet = async <T>(
    url: string,
    token: string
  ): Promise<T | null> => {
    const request = await fetch(`${API_ROUTE}${url}?token=${token}`, {
      method: "GET",
    });

    if (request.status !== 200) {
      return null;
    }

    const body = await request.json();

    return body as T;
  };

  const makeGet = async <T>(url: string) => {
    const request = await fetch(`${API_ROUTE}${url}`, { method: "GET" });

    if (request.status !== 200) {
      return null;
    }

    const json = await request.json();

    return json as T;
  };

  const makePost = async <T, U>(url: string, data: U): Promise<T | null> => {
    const request = await fetch(`${API_ROUTE}${url}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (request.status !== 200) {
      return null;
    }

    const json = await request.json();

    return json as T;
  };

  return {
    makeAuthedGet,
    makePost,
    makeGet,
  };
};
