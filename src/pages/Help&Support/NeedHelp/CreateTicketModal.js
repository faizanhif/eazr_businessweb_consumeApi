import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import TinyMce from "./TinyMce";
const CreateTicketModal = (props) => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };
  return (
    <div>
      <Button
        color="primary"
        style={{
          background: "#3A44A1",
          border: "none",
          outline: "none",
          fontWeight: "900",
        }}
        onClick={toggle}
      >
        Create Ticket
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="view-modal"
        centered
        dialogClassName="view-modal"
        // size="lg"
        style={{ maxWidth: "70%" }}
      >
        <ModalBody>
          <div className="create-ticket-form">
            <h5 className="mb-5 mt-5">Create Ticket</h5>
            <div>
              <label htmlFor="">Ticket Title</label>
              <input type="text" placeholder="Type here" />
            </div>
            <div>
              <label htmlFor="">Client</label>
              <select name="" id="">
                <option value="">-</option>
                <option value="">XYZ Brand</option>
                <option value="">ABC Company</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Ticket Type</label>
              <select name="" id="">
                <option value="">select</option>
                <option value="">General Support</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Labels</label>
              <select name="" id="">
                <option value="">-</option>
                <option value="">Important</option>
                <option value="">Invoice Related</option>
              </select>
            </div>
            <div style={{ display: "block" }}>
              <label htmlFor="">Description</label>
              <TinyMce apiKey="vix1s2ydcqr4vsn400a0i74gbkkx2fydhdvvhzl0swvz1kmb" />
            </div>
            <div>{file && <ImageThumb image={file} />}</div>

            <div className="create-ticket-form-btn">
              <label for="files" className="btn btn-default">
                <i class="fas fa-camera mr-2"></i>Choose File
              </label>
              <input
                id="files"
                type="file"
                class="btn btn-default"
                style={{ visibility: "hidden" }}
                onChange={handleChange}
              />
              <button>Save</button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateTicketModal;
