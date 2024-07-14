import { useState } from 'react';
import './UploadFormPage.css';
import { useNavigate } from 'react-router-dom';
import { createCreator } from '../supabaseClient';

const UploadFormPage = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    description: '',
    image: '',
    socialMedia: { youtube: '', twitter: '', instagram: '' },
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  const validate = () => {
    const newErrors = {};
    if (!creator.name) newErrors.name = 'Name is required';
    if (!creator.description) newErrors.description = 'Description is required';
    if (!creator.image) newErrors.image = 'Image URL is required';
    if (!creator.socialMedia.youtube && !creator.socialMedia.twitter && !creator.socialMedia.instagram) {
      newErrors.socialMedia = 'At least one social media handle is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      try {
        await createCreator(creator);
        navigate('/creators');
      } catch (error) {
        console.error('Error creating creator:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="upload-form-page">
      <div className="back-container">
        <button className="back-button" onClick={handleBack}>Back</button>
      </div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <label className="name">
          Name:
          <input type="text" name="name" value={creator.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        <label className="image">
          Image URL:
          <p><em>Provide a link to the image of your creator. Be sure to include the http://</em></p>
          <input type="text" name="image" value={creator.image} onChange={handleChange} />
          {errors.image && <p className="error">{errors.image}</p>}
        </label>
        <label className="description">
          Description:
          <p><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
          <textarea name="description" value={creator.description} onChange={handleChange} />
          {errors.description && <p className="error">{errors.description}</p>}
        </label>
        <label className="social-media">
          Social Media:
          <p><em>Provide at least one of the creator&apos;s social media links.</em></p>
          {errors.socialMedia && <p className="error">{errors.socialMedia}</p>}
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
          Instagram:
          <p><em>The creator&apos;s Instagram handle (without the @)</em></p>
          <input type="text" name="instagram" value={creator.socialMedia.instagram} onChange={handleChange} />
        </label>
        <button className="submit-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UploadFormPage;