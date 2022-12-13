import React from "react";
import { Link } from "react-router-dom";

//fixed top-0
const Navbar = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li className="hover:bg-pink-600 rounded-xl">
							{/* <a href="#home">Home</a> */}
							<Link to="/home">Home</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
							{/* <a href="#about">About me</a> */}
							<Link to="/about">About Me</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
							{/* <a href="#projects">Project</a> */}
							<Link to="/projects">Project</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
							{/* <a href="#contact">Contact me </a> */}
							<Link to="/contact">Contact me </Link>
							</li>
							<li className="hover:bg-pink-600 rounded-xl">
							<Link to="/blog">Blog </Link>
							</li>
							
						</ul>
					</div>
					<Link to="/" className="btn bg-gradient-to-t from-pink-600 normal-case text-xl">SYPort</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
                    		<li className="hover:bg-pink-600 rounded-xl">
							{/* <a href="#home">Home</a> */}
							<Link to="/home">Home</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
								{/* <a href="#about">About me</a> */}
								<Link to="/about">About Me</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
								{/* <a href="#projects">Project</a> */}
								<Link to="/projects">Project</Link>
							</li>
							
							<li className="hover:bg-pink-600 rounded-xl">
								{/* <a href="#contact">Contact me </a> */}
								<Link to="/contact">Contact me </Link>
							</li>
							<li className="hover:bg-pink-600 rounded-xl">
							<Link to="/blog">Blog </Link>
							</li>
							
					</ul>
				</div>
				
			</div>
		</div>
	);
};

export default Navbar;
