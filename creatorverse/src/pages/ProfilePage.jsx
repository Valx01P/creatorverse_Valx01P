import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import Profile from '../components/Profile';
import { getCreatorById, deleteCreator } from '../supabaseClient';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDelete = async () => {
    try {
      await deleteCreator(id);
      navigate('/creators');
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
    closeModal();
  };

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="back-container">
        <button className="back-button" onClick={handleBack}>Back</button>
      </div>
      <div className="profile-container">
        <Profile
          name={creator.name}
          description={creator.description}
          image={creator.image}
          socialMedia={creator.socialMedia}
        />
      </div>
      <div className="crud-buttons">
        <button className="edit-button" onClick={() => navigate(`/edit/${creator.id}`)}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>

      {showModal && (
        <>
          <div className="m-background" onClick={closeModal}></div>
          <div className="m">
            <button className="c-modal" onClick={closeModal}>X</button>
            <p>Are you sure you want to delete this creator?</p>
            <div className="m-buttons">
              <button className="con-button" onClick={confirmDelete}>Yes, I&apos;m sure</button>
              <button className="can-button" onClick={closeModal}>Never mind</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;