import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp } from "../../store/Redux/authAction";
import Timer from "react-compound-timer";
import "./myBooking.css";
const ModalExample = (props) => {
  console.log("props", props);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [otp, setotp] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });

  // console.log(otp);

  const VerifyOtp = (e) => {
    return dispatch(verifyOtp(props.phone, otp, props.history));
  };

  const ResendOtp = (e) => {
    return dispatch(resendOtp(props.phone));
  };
  // const count = useSelector((state) => state.counter.count);
  const showModal = useSelector((state) => state.Auth.successful);
  // console.log("coount", showModal);

  const toggle = () => setModal(!modal);
  const move = (fromtxt, totxt) => {
    var length = fromtxt.length;

    if (length === 1) {
      document.getElementById(totxt).focus();
    }
  };
  return (
    <div className="pin-modal-div">
      {showModal ? (
        <Modal isOpen centered style={{ maxWidth: "70%", padding: "5rem 0" }}>
          <div className="text-center pin-modal">
            <h4 className="mb-3">Enter Otp</h4>
            <p className="mb-5">
              otp has been sent on your register mobile no.
            </p>
            <div className="modal-pin-form mb-5">
              <input
                type="text"
                id="txt1"
                maxLength="1"
                onKeyUp={move("txt1", "txt2")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin1: text.target.value,
                  })
                }
              />
              <input
                type="text"
                id="txt2"
                maxLength="1"
                onKeyUp={move("txt2", "txt3")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin2: text.target.value,
                  })
                }
              />
              <input
                type="text"
                id="txt3"
                maxLength="1"
                onKeyUp={move("txt3", "txt4")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin3: text.target.value,
                  })
                }
              />
              <input
                type="text"
                id="txt4"
                maxLength="1"
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin4: text.target.value,
                  })
                }
              />
            </div>

            {/* <div className="my-5 text-white">
            <Timer
              initialTime={119999}
              direction="backward"
              className="my-5 text-white"
            >
              {() => (
                <React.Fragment>
                  <Timer.Minutes /> : <Timer.Seconds />
                </React.Fragment>
              )}
            </Timer>
          </div> */}
            <Link to="/processing-bookings">
              <button onClick={(e) => VerifyOtp(e)} className="mb-5">
                Verify
              </button>
            </Link>
            <br />
            <Link
              style={{ color: "#DF8F60", borderBottom: "1px solid #DF8F60 " }}
              onClick={(e) => ResendOtp(e)}
            >
              Resend Otp
            </Link>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default ModalExample;
