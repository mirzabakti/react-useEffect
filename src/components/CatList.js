import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CatItem from "./CatItem";

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [catsTemp, setCatsTemp] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.thecatapi.com/v1/breeds");
      setCats(response.data);
      setCatsTemp(response.data);
    };

    getData();
  }, []);

  useEffect(() => {
    setCats(() => catsTemp.filter((cats) => cats.name.includes(inputSearch)).map((filteredCats) => filteredCats));
  }, [inputSearch]);

  console.log(inputSearch);
  console.log(cats);

  return (
    <>
      <input type="text" value={inputSearch} className="form-control" placeholder="Write the name of cute cat that you want find here" onChange={(e) => setInputSearch(e.target.value)} />
      {cats.map((item) => (
        <CatItem props={item} />
      ))}
    </>
  );
};

export default CatList;
