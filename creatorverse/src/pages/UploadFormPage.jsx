
const UploadFormPage = () => {
  return (
    <div className="upload-form-page">
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Image URL:
                <p><em>Provide a link to the image of your creator. Be sure to include the http://</em></p>
                <input type="text" name="image" />
            </label>
            <label>
                Description:
                <p><em>Provide a description of the creator. Who are they? What makes them interesting?</em></p>
                <textarea name="description" />
            </label>
            <label>
                Social Media:
                <p><em>Provide at least one of the creator&apos;s social media links.</em></p>
            </label>
            <label>
                YouTube:
                <p><em>The creator&apos;s YouTube handle (without the @)</em></p>
                <input type="text" name="youtube" />
            </label>
            <label>
                Twitter:
                <p><em>The creator&apos;s X/Twitter handle (without the @)</em></p>
                <input type="text" name="twitter" />
            </label>
            <label>
                Instagram
                <p><em>The creator&apos;s Instagram handle (without the @)</em></p>
                <input type="text" name="instagram" />
            </label>
            <button><input type="submit" value="Submit" />Submit</button>
        </form>
    </div>
  )
}

export default UploadFormPage