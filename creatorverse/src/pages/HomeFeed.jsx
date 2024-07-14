import { useEffect, useState } from 'react';
import './HomeFeed.css';
import CreatorCard from '../components/CreatorCard';
import { getAllCreators } from '../supabaseClient';

const HomeFeed = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const data = await getAllCreators();
        setCreators(data);
      } catch (error) {
        console.error('Error fetching creators:', error);
      }
    };

    fetchCreators();
  }, []);

  return (
    <div className="creator-page">
      <div className="creator-feed">
        <div className="feed-text">
          <h1>Explore Creators</h1>
          <p>Can&apos;t find your favorite creator? Add them!</p>
        </div>
        <div className="creators">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              id={creator.id}
              name={creator.name}
              description={creator.description}
              image={creator.image}
              socialMedia={creator.socialMedia}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;