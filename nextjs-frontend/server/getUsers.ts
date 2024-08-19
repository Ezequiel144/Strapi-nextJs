import { API_URL } from "../config";

export async function getUsers(/* { token }: { token: string | null } *//* {id}: {id: any | null} */) {
  const res = await fetch(`${API_URL}/users/${3}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      //Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIzODU5Mzk0LCJleHAiOjE3MjY0NTEzOTR9.2IgfJD2iPJqh1mD8YyjbyoMKyW6zq4R8BC304iK3joQ`,
    },
  });
  if (res.ok) {
    //throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
}
