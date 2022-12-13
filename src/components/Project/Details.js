import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(data);

  useEffect(() => {
    fetch(`http://localhost:5000/details/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    // fetch("data.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const result = data.find((pr) => pr.id == id);
    //     setData(result);
    //   });
  }, [id]);

  return (
    <div>
      <h2>this is details page</h2>
      <h3>Category: {data.category}</h3>
      <h3>Name: {data.name}</h3>
    </div>
  );
};

export default Details;
