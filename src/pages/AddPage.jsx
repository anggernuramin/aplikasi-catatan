import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import FormAddNoted from "../components/FormAddNoted";
import Header from "../components/Header";

const AddPage = () => {
  return (
    <>
      <Header
        title="Add Noted Apps"
        description="Tambah catatan pribadi Anda dengan lebih Mudah."
      />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <Link to="/" className="wrapper-icon-home">
              <FaHome className="icon-home" />
              <p>Back To Home </p>
            </Link>
            <FormAddNoted />
          </div>
        </div>
      </main>
    </>
  );
};

export default AddPage;
