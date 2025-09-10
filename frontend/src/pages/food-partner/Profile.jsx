import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/profile.css";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/food-partner/${id}`, {
          withCredentials: true,
        });
        setProfile(res.data.foodPartner);
        setVideos(res.data.foodPartner?.foodItems || []);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        setError("Something went wrong while fetching the profile.");
      }
    };

    fetchProfile();
  }, [id]);

  if (error) {
    return <div className="error-msg">{error}</div>;
  }

  if (!profile) {
    return <div className="loading-msg">Loading...</div>;
  }

  return (
    <main className="profile-page">
      {/* Header Section */}
      <section className="profile-header">
        <div className="profile-meta">
          <img
            className="profile-avatar"
            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
            alt={`${profile.name}'s avatar`}
          />

          <div className="profile-info">
            <h1 className="profile-pill profile-business" title="Business name">
              {profile.name}
            </h1>
            <p className="profile-pill profile-address" title="Address">
              {profile.address}
            </p>
          </div>
        </div>

        <div className="profile-stats" role="list" aria-label="Stats">
          <div className="profile-stat" role="listitem">
            <span className="profile-stat-label">Total Meals</span>
            <span className="profile-stat-value">{profile.totalMeals}</span>
          </div>
          <div className="profile-stat" role="listitem">
            <span className="profile-stat-label">Customers Served</span>
            <span className="profile-stat-value">{profile.customersServed}</span>
          </div>
        </div>
      </section>

      <hr className="profile-sep" />

      {/* Videos Section */}
      <section className="profile-grid" aria-label="Uploaded food videos">
        {videos.map((video) => (
          <div key={video.id} className="profile-grid-item">
            <video
              className="profile-grid-video"
              src={video.video}
              controls
              muted
              preload="metadata"
              playsInline
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Profile;
