import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    settitle(currentContact.title);
    setcatagory(currentContact.catagory);
    setcontent(currentContact.content);
  }, [currentContact]);

  const [title, settitle] = useState("");
  const [catagory, setcatagory] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactcatagoryExists = contacts.filter((contact) =>
      contact.catagory === catagory && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactcontentExists = contacts.filter((contact) =>
      contact.content === content && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!catagory || !title || !content) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactcatagoryExists.length > 0) {
      return toast.error("This catagory already exists!!");
    }
    if (checkContactcontentExists.length > 0) {
      return toast.error("This content number already exists!!");
    }

    const data = {
      id: currentContact.id,
      catagory,
      title,
      content,
    };

    updateContact(data);
    toast.success("Contact updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={title}
                  placeholder={"Title"}
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={catagory}
                  placeholder={"Catagories"}
                  onChange={(e) => setcatagory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={content}
                  placeholder={"Content"}
                  onChange={(e) => setcontent(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
