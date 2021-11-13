import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ contacts, addContact }) => {
  const [title, settitle] = useState("");
  const [catagory, setcatagory] = useState("");
  const [content, setcontent] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactcatagoryExists = contacts.filter((contact) =>
      contact.catagory === catagory ? contact : null
    );
    const checkContactcontentExists = contacts.filter((contact) =>
      contact.content === content ? contact : null
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
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      catagory,
      title,
      content,
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Categories"
                value={catagory}
                onChange={(e) => setcatagory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Submit"
              />
             
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="button"
                value="Cancel"
                onClick={() => history.push("/")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
