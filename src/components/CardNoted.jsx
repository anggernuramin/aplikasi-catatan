import React from "react";
import { useState, useEffect } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

const CardNoted = () => {
  const [noted, setNoted] = useState([]);
  useEffect(() => {
    setNoted(getAllNotes());
  }, []);
  return (
    <section className="Catatan-shelf">
      {noted.map((data) => {
        return (
          <div key={data.id} className="card-catatan">
            <h3>{data.title}</h3>
            <span>{showFormattedDate(data.createdAt)}</span>
            <p>{data.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CardNoted;
