function Background() {
	return (
		<div>
			<div className="fixed z-[2] w-full h-screen">
				<div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xs font-semibold">
					Documents
				</div>
				<h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[12vw] leading-none tracking-tight">
					Docs.
				</h1>
			</div>
		</div>
	);
}

export default Background;
