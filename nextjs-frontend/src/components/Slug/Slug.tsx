"use client";
import { getUsers } from "../../../server/getUsers";


export default function Slug({ slug /* , user */ }: { slug: string }) {
  let userToken = localStorage.getItem("token-user");
  //console.log(user);
  if (!userToken) {
    window.location.href = "/auth/login";
  }
  return <div>My Post: {slug}</div>;
}
