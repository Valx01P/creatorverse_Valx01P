import { useState, useEffect } from 'react';
import './EditFormPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getCreatorById, updateCreator, deleteCreator } from '../supabaseClient';

const EditFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    description: '',
    image: '',
    socialMedia: { youtube: '', twitter: '', instagram: '' },
  });

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const data = await getCreatorById(id);
        setCreator(data);
      } catch (error) {
        console.error('Error fetching creator:', error);
      }
    };

    fetchCreator();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in creator.socialMedia) {
      setCreator((prev) => ({
        ...prev,
        socialMedia: { ...prev.socialMedia, [name]: value },
      }));
    } else {
      setCreator((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCreator(id, creator);
      navigate(`/profile/${id}`);
    } catch (error) {
      console.error('Error updating creator:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCreator(id);
      navigate('/creators');
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
  };

  const openModal = () => {
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
      <form className="e-form" onSubmit={handleSubmit}>
        <label className="name">
          Name:
          <input type="text" name="name" value={creator.name} onChange={handleChange} />
        </label>
        <label className="image">
          Image URL:
          <p><em>Provide a link to the image of your creator. Be sure to include the http://</em></p>
          <input type="text" name="image" value={creator.image} onChange={handleChange} />
        </label>
        <label className="description">
          Description:
          <p><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
          <textarea name="description" value={creator.description} onChange={handleChange} />
        </label>
        <label className="social-media">
          Social Media:
          <p><em>Provide at least one of the creator&apos;s social media links.</em></p>
        </label>
        <label className="youtube">
          YouTube:
          <p><em>The creator&apos;s YouTube handle (without the @)</em></p>
          <input type="text" name="youtube" value={creator.socialMedia.youtube} onChange={handleChange} />
        </label>
        <label className="twitter">
          X / Twitter:
          <p><em>The creator&apos;s X / Twitter handle (without the @)</em></p>
          <input type="text" name="twitter" value={creator.socialMedia.twitter} onChange={handleChange} />
        </label>
        <label className="instagram">
          Instagram
          <p><em>The creator&apos;s Instagram handle (without the @)</em></p>
          <input type="text" name="instagram" value={creator.socialMedia.instagram} onChange={handleChange} />
        </label>
        <div className="f-buttons">
          <button className="s-button" type="submit">Submit</button>
          <button className="d-button" type="button" onClick={openModal}>Delete</button>
        </div>
      </form>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Are you sure you want to delete this creator?</p>
          <button className="confirm-delete" onClick={handleDelete}>Yes, delete</button>
          <button className="cancel-delete" onClick={closeModal}>Never mind</button>
        </div>
      </div>
    </div>
  );
};

export default EditFormPage;