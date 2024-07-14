import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProfilePage.css';
import Profile from '../components/Profile';

const creators = [
  {
    id: 1,
    name: 'Alexandra Andersson',
    description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
    image: 'https://i1.sndcdn.com/artworks-000511321446-3lwj3c-t500x500.jpg',
    socialMedia: { youtube: 'thekoreanvegan', twitter: 'thekoreanvegan' , instagram: 'thekoreanvegan'}
  },
  {
    id: 2,
    name: 'Sarah\'s Vegan Kitchen',
    description: 'I went vegan in late 2015, originally to improve my health (although nowadays I\'m primarily vegan for ethical and environmental reasons). Around that same time, I...',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Alia_Shelesh_YouTube_shorts_screenshot.jpg/220px-Alia_Shelesh_YouTube_shorts_screenshot.jpg',
    socialMedia: { youtube: 'thekoreanvegan', twitter: 'thekoreanvegan' , instagram: 'thekoreanvegan'}
  },
  {
    id: 3,
    name: 'Alexandra Andersson',
    description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
    image: 'https://preview.redd.it/sv3rige-goatis-raw-meat-eater-v0-6dll2z8z6yub1.png?width=1080&crop=smart&auto=webp&s=079e6c589f72a3dd27f465708923a22b94afb47a',
    socialMedia: { youtube: 'thekoreanvegan', instagram: 'thekoreanvegan'}
  },
  {
    id: 4,
    name: 'Sarah\'s Vegan Kitchen',
    description: 'I went vegan in late 2015, originally to improve my health (although nowadays I\'m primarily vegan for ethical and environmental reasons). Around that same time, I...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ0neKGVPlAw5ov-gR3yTx77kIwK_V4TKVQ&s',
    socialMedia: { youtube: 'thekoreanvegan', instagram: 'thekoreanvegan'}
  },
  {
    id: 5,
    name: 'Alexandra Andersson',
    description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
    image: 'https://preview.redd.it/do-you-guys-remember-that-streamer-xqc-from-back-in-the-day-v0-s5aektlg1fub1.jpg?width=640&crop=smart&auto=webp&s=f998e9c5baf40c077098bb5c140d85fbd6931ab8',
    socialMedia: { youtube: 'thekoreanvegan', instagram: 'thekoreanvegan'}
  }
];

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const foundCreator = creators.find(creator => creator.id === parseInt(id));
    if (foundCreator) {
      setCreator(foundCreator);
    } else {
      console.log('Creator not found');
    }
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

  const confirmDelete = () => {
    // Placeholder for delete API call
    console.log('Deleted');
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
