import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";

export default function Signup() {
  /**User Email to sign up */
  const [email, setEmail] = useState("");
  /** User Password */
  const [password, setPassword] = useState("");
  /** User Nick Name */
  const [displayName, setDisplayName] = useState("");
  /** User Profile Pic */
  const [thumbnail, setThumbnail] = useState(null);
  /** If User Profile Pic has an error*/
  const [thumbnailError, setThumbnailError] = useState(null);

  const { signup, isPending, error } = useSignup();

  //A Function to submit the data to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  /** A function to check the type the size of the user Pic */
  const handleFileChange = (e) => {
    /** A clean up to the input type file so it will only take the last file we upload */
    setThumbnail(null);

    let selected = e.target.files[0];

    console.log(selected);
    if (!selected) {
      setThumbnailError("Please select an image file");
      return;
    }
    /** To check if the file uploaded is an Image or not */
    if (!selected.type.includes("image")) {
      setThumbnailError("The File must be an image");
      return;
    }
    /** To check to file size */
    if (selected.size > 900000) {
      setThumbnailError("Image file must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up/ Register</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Username:</span>
          <input
            type="text"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Profile Picture:</span>
          <input type="file" required onChange={handleFileChange} />
          {/** A box will disply the Thumbnail error */}
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        {/** if the Thumbnail does not fulfill our requirement, the button to submit will be disabled */}
        {thumbnailError && (
          <button className="btn" disabled>
            Sign Up
          </button>
        )}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {!thumbnailError && !isPending ? (
          <button className="btn">Sign Up</button>
        ) : null}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
