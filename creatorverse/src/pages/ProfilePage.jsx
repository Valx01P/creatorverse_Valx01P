import './ProfilePage.css';
import Profile from '../components/Profile';

const creator =
    {
      name: 'Alexandra Andersson',
      description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
      image: 'https://preview.redd.it/do-you-guys-remember-that-streamer-xqc-from-back-in-the-day-v0-s5aektlg1fub1.jpg?width=640&crop=smart&auto=webp&s=f998e9c5baf40c077098bb5c140d85fbd6931ab8',
      socialMedia: { youtube: '@thekoreanvegan', twitter: '@thekoreanvegan' , instagram: '@thekoreanvegan'}
    };

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <Profile
          name={creator.name}
          description={creator.description}
          image={creator.image}
          socialMedia={creator.socialMedia}
        />
      </div>
    </div>
  );
};
    

export default ProfilePage;