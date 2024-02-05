import { useRef } from "react";
import Card from "./Card";

function Foreground() {
	const ref = useRef(null);
	const data = [
		{
			desc: "Loremas df asd fasd f as g ds bg d fga sdf a wer df fg ",
			filesize: ".9mb",
			close: false,
			tag: {
				isOpen: true,
				tagTitle: "Refix Now",
				tagColor: "green",
			},
		},
		{
			desc: "Loremas df asd fasd f as g ds bg d fga sdf a wer df fg ",
			filesize: ".9mb",
			close: false,
			tag: {
				isOpen: true,
				tagTitle: "Upload Now",
				tagColor: "green",
			},
		},
		{
			desc: "Loremas df asd fasd f as g ds bg d fga sdf a wer df fg ",
			filesize: ".2mb",
			close: false,
			tag: {
				isOpen: false,
				tagTitle: "Download Now",
				tagColor: "green",
			},
		},
		{
			desc: "Loremas df asd fasd f as g ds bg d fga sdf a wer df fg ",
			filesize: ".9mb",
			close: false,
			tag: {
				isOpen: true,
				tagTitle: "Download Now",
				tagColor: "blue",
			},
		},
	];
	return (
		<div
			ref={ref}
			className="fixed z-[3] top-0 left-0 w-full h-full flex gap-7 flex-wrap p-5"
		>
			{data.map((item, index) => (
				<Card data={item} reference={ref} />
			))}
		</div>
	);
}

export default Foreground;
