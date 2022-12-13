import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className="footer items-center p-4 bg-neutral text-neutral-content rounded-lg">
				<div className="items-center grid-flow-col">
					
					<p>Copyright © 2022 - All right reserved</p>
				</div>
				<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl">
                    <FaFacebook></FaFacebook>
                    <FaLinkedin></FaLinkedin>
                    <FaGithub></FaGithub>
					
				</div>
			</footer>
		</div>
	);
};

export default Footer;
