import React from "react";
import { useState } from "react";

const Button = ({ label, onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="">
			<button
				className={`
            relative overflow-hidden bg-gray-800 text-white px-6 py-1 mt-4 ml-5 text-sm font-light rounded-lg
            transition-all duration-300 ease-in-out
            ${isHovered ? "shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]" : ""}
          `}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<span className="relative z-10">{label}</span>
				
			</button>
		</div>
	);
};

export default Button;
