import './UploadFormPage.css';

const UploadFormPage = () => {
  return (
    <div className="upload-form-page">
        <div className="back-container">
            <button className="back-button">Back</button>
        </div>
        <form className="upload-form">
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
            <button className="submit-button" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UploadFormPage