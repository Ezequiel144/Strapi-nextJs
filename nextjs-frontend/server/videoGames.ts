import { API_URL } from "../config";

export async function getVideoGames() {
  const res = await fetch(
    `${API_URL}/video-games?populate[platfroms][fields][0]=name&populate=cover`
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const { data } = await res.json();
  return data;
}

export function getCoverUrl({ attrib }: any) {
  console.log(attrib);
  const { url } = attrib.Cover.data.attributes;
  return `${API_URL}${url}`;
}
