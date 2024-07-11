import { useState } from 'react';
import './ProfilePage.css';
import Profile from '../components/Profile';

const creator =
    {
      name: 'Alexandra Andersson',
      description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
      image: 'https://preview.redd.it/do-you-guys-remember-that-streamer-xqc-from-back-in-the-day-v0-s5aektlg1fub1.jpg?width=640&crop=smart&auto=webp&s=f998e9c5baf40c077098bb5c140d85fbd6931ab8',
      socialMedia: { youtube: 'thekoreanvegan', twitter: 'thekoreanvegan' , instagram: 'thekoreanvegan'}
    };

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmDelete = () => {
    // Placeholder for delete API call
    console.log('Deleted');
    closeModal();
  };

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
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>

      {showModal && (
        <>
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>X</button>
            <p>Are you sure you want to delete this creator?</p>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={confirmDelete}>Yes, I&apos;m sure</button>
              <button className="cancel-button" onClick={closeModal}>Never mind</button>
            </div>
          </div>
        </>
      )}

    </div>
  );
};
    

export default ProfilePage;