import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContextProvider from "./context/ContextProvider";
import location from "../asset/images/location.svg";
import "../index.css";

const ChooseCity = () => {
  const [show, setShow] = useState(false);
  const { setCity, city, loading } = useContext(ContextProvider);

  const handleSumbit = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleNameCity = (city) => {
    if (city === "qazvin") {
      return "قزوین";
    } else if (city === "tehran") {
      return "تهران";
    } else if (city === "shiraz") {
      return "شیراز";
    } else if (city === "isfahan") {
      return "اصفهان";
    } else if (city === "qom") {
      return "قم";
    } else if (city === "karaj") {
      return "کرج";
    } else if (city === "kermanshah") {
      return "کرمانشاه";
    } else if (city === "mashhad") {
      return "مشهد";
    }
  };

  return (
    <>
      {!loading && (
        <>
          <Button
            variant="secondary"
            className="flex font-yekanBakh hover:bg-one"
            onClick={() => setShow(true)}
          >
            {handleNameCity(city)}
            <img width={20} className="mx-1 " src={location} alt="" />
          </Button>
          <Modal
            id="modal"
            className="modal-dialog modal-90w"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="example-custom-modal-styling-title"
                className="font-yekanBakh"
              >
                لطفا شهر مورد نظر خود را انتخاب کنید
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSumbit}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="qazvin"
                    type="input"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    قزوین
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="tehran"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    تهران
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="tabriz"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    تبریز
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="karaj"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    کرج
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="mashhad"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    مشهد
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="isfahan"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    اصفهان
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="kermanshah"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    کرمانشاه
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="qom"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    قم
                  </button>
                  <button
                    className="px-3 py-2 m-2 rounded-2xl bg-two hover:brightness-90"
                    value="shiraz"
                    onClick={(e) => setCity(e.target.value)}
                  >
                    شیراز
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default ChooseCity;
