import './HomeFeed.css';
import CreatorCard from '../components/CreatorCard';

const creators = [
    {
      name: 'Alexandra Andersson',
      description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
      image: 'https://i1.sndcdn.com/artworks-000511321446-3lwj3c-t500x500.jpg'
    },
    {
      name: 'Sarah\'s Vegan Kitchen',
      description: 'I went vegan in late 2015, originally to improve my health (although nowadays I\'m primarily vegan for ethical and environmental reasons). Around that same time, I...',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Alia_Shelesh_YouTube_shorts_screenshot.jpg/220px-Alia_Shelesh_YouTube_shorts_screenshot.jpg'
    },
    {
      name: 'Alexandra Andersson',
      description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
      image: 'https://preview.redd.it/sv3rige-goatis-raw-meat-eater-v0-6dll2z8z6yub1.png?width=1080&crop=smart&auto=webp&s=079e6c589f72a3dd27f465708923a22b94afb47a'
    },
    {
      name: 'Sarah\'s Vegan Kitchen',
      description: 'I went vegan in late 2015, originally to improve my health (although nowadays I\'m primarily vegan for ethical and environmental reasons). Around that same time, I...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ0neKGVPlAw5ov-gR3yTx77kIwK_V4TKVQ&s'
    },
    {
        name: 'Alexandra Andersson',
        description: 'With my years of living a plant based lifestyle and my knowledge from the Plant Based Nutrition course from eCornell, I feel confident to inspire you to eat more...',
        image: 'https://preview.redd.it/do-you-guys-remember-that-streamer-xqc-from-back-in-the-day-v0-s5aektlg1fub1.jpg?width=640&crop=smart&auto=webp&s=f998e9c5baf40c077098bb5c140d85fbd6931ab8'
    }
  ];

const HomeFeed = () => {
  return (
    <div className="creator-page">
      <div className="creator-feed">
        <div className="feed-text">
          <h1>Explore Creators</h1>
          <p>Can&apos;t find your favorite creator? Add them!</p>
        </div>
        <div className="creators">
          {creators.map((creator, index) => (
            <CreatorCard
              key={index}
              name={creator.name}
              description={creator.description}
              image={creator.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
    

export default HomeFeed;