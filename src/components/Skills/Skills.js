import React from "react";

import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaJava, FaJs, FaNode, FaNodeJs, FaReact } from "react-icons/fa";

const Skills = () => {
	return (
		<div className="my-20">
			<h3 className="text-center font-bold text-lg font-serif text-pink-500">Skills</h3>
					<h2 className="text-4xl text-center font-bold font-serif">Fully compatible with</h2>
			<section className="dark:bg-gray-800 dark:text-gray-100 m-12">
				<div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
					
					<div className="flex flex-wrap justify-center lg:justify-between text-8xl">
						<FaHtml5 className="text-red-400"></FaHtml5>
						<FaReact className="text-blue-400"></FaReact>
						
						<FaCss3 className="text-blue-400"></FaCss3>
						
						<FaBootstrap className="text-purple-400"></FaBootstrap>
						<FaJs className="text-yellow-400"></FaJs>
						<FaCss3Alt className="text-sky-400"></FaCss3Alt>
						<FaNode className="text-green-400"></FaNode>
						
					</div>
				</div>
			</section>
		</div>
	);
};

export default Skills;
