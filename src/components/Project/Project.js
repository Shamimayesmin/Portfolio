import React from "react";
import img1 from "../assets/projects/pro1.png";
import img2 from "../assets/projects/pro2.png";
import img3 from "../assets/projects/pro3.png";
import img4 from "../assets/projects/pro4.png";
import img5 from "../assets/projects/pro5.png";
import img7 from "../assets/projects/pro7.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="my-40">
      <h1 className="text-xl font-serif text-center m-2 font-bold text-pink-600">
        Projects
      </h1>
      <h2 className="text-5xl font-serif text-center font-bold">
        My Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 m-10">
        <div
          data-aos="zoom-in-right"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CarSale</h2>
            <p>1.It's a resale wesite with resposive layout, nice UI & UX.</p>
            <p>
              2. Implemented firebase authentication login and logout system for
              enjoyable user experience.
            </p>
            <p>
              3.Implemented dashboard with diffrent user role admin, seller,
              buyer route .
            </p>

            <p>
              4. Created dynamic product category route, user can see category
              wise products
            </p>
            <div className="card-actions justify-end">
              <Link
                to={"/details/1"}
                className="btn bg-gradient-to-t from-pink-600"
              >
                View Details <FaArrowRight className="ml-2" />
              </Link>
              {/* <Link to={`/details/${}`}>
						<button className="btn btn-accent">Add service</button>
					</Link> */}
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CarPer</h2>
            <p>1 . It designed for all type of carpenter service provide .</p>
            <p>
              2 . Excuted firebase authentication with login and logout for good
              user experience.
            </p>
            <p>
              3. Created checkout page , user can add service in the checkout
              page to fillup checkout form.
            </p>
            <p>
              4. In service details page user can add review on this service and
              see previous reviews.
            </p>
            <div className="card-actions justify-end">
              <a href="https://assignment--11.web.app/">
                {" "}
                <button className="btn bg-gradient-to-t from-pink-600 ">
                  View Details
                  <FaArrowRight className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">EduMate</h2>
            <p>
              1. Online educational website with resposive layout nice UI
              design.
            </p>
            <p>
              2. Inplemented firebase authentication in login logout route and
              checkout page.
            </p>
            <p>
              3. Course category route where each course has dynamic route
              details page.
            </p>
            <p>
              4. In details page excuted react pdf to download that course and
              premium button.
            </p>

            <div className="card-actions justify-end">
              <a href="https://assignment-10-4ecf8.web.app">
                {" "}
                <button className="btn bg-gradient-to-t from-pink-600 ">
                  View Details
                  <FaArrowRight className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-left"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quizizz</h2>
            <p>1. Programimg quiz contest website.</p>
            <p>2. React , JavaScript, CSS, Git category quiz.</p>
            <p>3. To select specific category it will redirect quiz page.</p>
            <p>
              4. On quiz page after sellecting quiz option it will show right or
              worng answer on toast.
            </p>
            <div className="card-actions justify-end">
              <a href="https://timely-kitten-854e6c.netlify.app/">
                {" "}
                <button className="btn bg-gradient-to-t from-pink-600 ">
                  View Details
                  <FaArrowRight className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fitness Portal</h2>
            <p>
              1. Implemented regular exercise counter and break time tacker.
            </p>
            <p>
              2. A single page application with diffrent kind of exercise with
              required age and time.
            </p>
            <p>
              3. By adding a item it will show the exercise time in exercise
              details
            </p>
            <p>
              4. Created add break time of exercise, click on the add break
              button it will show the time on break time section.{" "}
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <a href="https://glistening-tiramisu-d05ff6.netlify.app/">
                <button className="btn bg-gradient-to-t from-pink-600 ">
                  View Details <FaArrowRight className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="card card-compact bg-base-300 shadow-2xl"
        >
          <figure>
            <img src={img7} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">NewsBD.Com</h2>
            <p>
              1. Designed and implemented new portal with resposive layout and
              good UI
            </p>
            <p>2. Eight News category and each category has dynamic route</p>
            <p>
              3. Inside a news category there are many news item and their
              dynamic id route created.
            </p>
            <p>
              4. Each news has news details page where is details news showed
              and back to category id route.
            </p>
            <div className="card-actions justify-end">
              <Link
                to={"/details/2"}
                className="btn bg-gradient-to-t from-pink-600"
              >
                View Details <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
