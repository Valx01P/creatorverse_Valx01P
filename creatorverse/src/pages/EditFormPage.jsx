import './EditFormPage.css';
import { useNavigate } from 'react-router-dom';

const EditFormPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);
    };

  const handleDelete = (event) => {
    event.preventDefault();
    // Logic to open the modal
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  return (
    <div className="e-form-page">
        <div className="b-container">
            <button className="b-button" onClick={handleBack}>Back</button>
        </div>
        <form className="e-form">
            <label className="name">
                Name:
                <input type="text" name="name" />
            </label>
            <label className="image">
                Image URL:
                <p><em>Provide a link to the image of your creator. Be sure to include the http://</em></p>
                <input type="text" name="image" />
            </label>
            <label className="description">
                Description:
                <p><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
                <textarea name="description" />
            </label>
            <label className="social-media">
                Social Media:
                <p><em>Provide at least one of the creator&apos;s social media links.</em></p>
            </label>
            <label className="youtube">
                YouTube:
                <p><em>The creator&apos;s YouTube handle (without the @)</em></p>
                <input type="text" name="youtube" />
            </label>
            <label className="twitter">
                X / Twitter:
                <p><em>The creator&apos;s X / Twitter handle (without the @)</em></p>
                <input type="text" name="twitter" />
            </label>
            <label className="instagram">
                Instagram
                <p><em>The creator&apos;s Instagram handle (without the @)</em></p>
                <input type="text" name="instagram" />
            </label>
            <div className="f-buttons">
              <button className="s-button" type="submit">Submit</button>
              <button className="d-button" onClick={handleDelete}>Delete</button>
            </div>
        </form>
        <div className="overlay" onClick={closeModal}></div>
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>Are you sure you want to delete this creator?</p>
                <button className="confirm-delete" onClick={closeModal}>Yes, delete</button>
                <button className="cancel-delete" onClick={closeModal}>Never mind</button>
            </div>
        </div>
    </div>
  )
}

export default EditFormPage;
