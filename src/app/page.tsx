import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
	const session = await getServerAuthSession();
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
					Next-drive
				</h1>
				{!session && <Link
					href={"/api/auth/signin"}
					className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
				>
					{"Sign in"}
				</Link>}
			</div>
		</main>
	);
}
