import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between rounded-lg bg-white p-4 shadow">
          <p className="text-lg">Welcome, {data.user.email}</p>
          <form action={signOut}>
            <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
              Sign Out
            </button>
          </form>
        </div>

        {/* Your main content here */}
        <div className="rounded-lg bg-white p-4 shadow">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* Add your protected content here */}
        </div>
      </div>
    </div>
  );
}
