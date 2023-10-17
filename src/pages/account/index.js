<<<<<<< HEAD
import supabase from "../../shared/model/Supabase";
import { useLoaderData } from "react-router-dom";

export default function Account() {
  const data = useLoaderData();

  return <div>Account Page</div>;
}

export async function accountDataLoader() {
  let { data, error } = await supabase.from("Users").select("*").eq("id", 1);

  if (error) throw new Error("db connection failed");
  return data;
}
=======
export default function Account() {
  return <div>Account Page</div>;
}
>>>>>>> f7717fbff88ee57c246f58fee1f2a24ffacf0850
