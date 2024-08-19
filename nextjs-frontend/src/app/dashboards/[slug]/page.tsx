import Slug from "@/components/Slug/Slug";
import { getUsers } from "../../../../server/getUsers";

export default async function Page({ params }: { params: { slug: string } }) {
  const user = await getUsers();
  console.log(user)
  return <Slug slug={params.slug}  />;
}
