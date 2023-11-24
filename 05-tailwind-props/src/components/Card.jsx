// props are the properties that can be taken and then individual things can be extracted using dot
// otherwise direct destructuring can be done and values can be passed
function Card({
	userName = "SumitZha",
	pic = "https://imgs.search.brave.com/0ZY89H6SoL7F9R7pRlF8PaKzhZaHlD-fZxQgxGsBj1Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93LmZv/cmZ1bi5jb20vZmV0/Y2gvMGIvMGJlZDg1/ZTVlOTk1ZWNlNDEw/NTQ5MzY4MGEwYWNl/OTYuanBlZw",
	bannerWord = "Kaizoku Oni Orewa Naru",
}) {
	return (
		<>
			<div class="h-[300px] rounded-md border">
				<img
					src={pic}
					alt={userName}
					class="h-[200px] w-full rounded-t-md object-cover"
				/>
				<div class="p-3">
					<h1 class="inline-flex items-center text-lg font-semibold">
						{userName}  {" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-4 w-4"
						>
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</h1>

					<button
						type="button"
						class="mt-2 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						{bannerWord}
					</button>
				</div>
			</div>
		</>
	);
}

export default Card;
