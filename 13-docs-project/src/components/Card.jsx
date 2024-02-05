import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, reference }) {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.1 }}
			dragElastic={0.1}
			dragTransition={{ bounceStiffness: 100, bounceDamping: 40 }}
		>
			<div className="relative flex-shrink-0 w-96 h-72 rounded-2xl bg-zinc-900/90 text-white py-5 px-3 text-md overflow-hidden mb-10">
				<FaRegFileAlt />
				<p className="text-xs mt-4 leading-4">{data.desc}</p>

				<div className="footer absolute bottom-0 bg-zinc-900 w-full left-0 ">
					<div className="flex items-center justify-between py-3 px-3">
						<h5>{data.filesize}</h5>
						<span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center font-semibold justify-center">
							{data.close ? (
								<MdClose size=".9em" color="#fff" />
							) : (
								<GoDownload size=".9em" color="#fff" />
							)}
						</span>
					</div>

					{data.tag.isOpen && (
						<div
							className={`tag w-full py-3 ${
								data.tag.tagColor === "blue"
									? "bg-blue-600"
									: "bg-green-600"
							} flex items-center justify-center`}
						>
							<h3 className="text-sm font-semibold">
								{data.tag.tagTitle}
							</h3>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default Card;
