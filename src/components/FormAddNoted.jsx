import React, { useEffect, useState } from "react";

const FormAddNoted = () => {
  return (
    <section className="wrapper-input-section">
      <div className="input-section">
        <form id="inputCatatan">
          <div className="input">
            <div className="label-judul">
              <label htmlFor="inputCatatanTitle">Judul</label>
              <span>aa</span>
            </div>
            <input id="inputCatatanTitle" autoFocus type="text" required placeholder="Tulis judul catatan" />
          </div>
          <div className="input">
            <label htmlFor="inputCatatanCatatan">Catatan</label>
            <textarea name="catatan" id="inputCatatanCatatan" required placeholder="Tulis catatan Anda disini"></textarea>
          </div>

          <button id="CatatanSubmit" type="submit">
            Buat
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormAddNoted;
