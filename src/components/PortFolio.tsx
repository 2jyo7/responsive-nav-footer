"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

// Define the types
interface Photo {
  id: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  alt_description: string;
}

const PortFolio: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Your Unsplash API Access Key
  const accessKey = 'Kv40XI0ZyN9oe4768msmL0m-FUkFcmq5ZNLHx5dIx90'; // Best practice to use environment variables for API keys

  

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: accessKey,
            per_page: 12, // Adjust the number of images you want
          },
        });
        setPhotos(response.data);
     console.log(response.data);
      setLoading(false);
      } catch (err: unknown) {
        console.log('Error loading images', err);
        setLoading(false);
      }
    };

    if (accessKey) {
      fetchPhotos();
    } else {
      setError('API Key not provided');
      setLoading(false);
    }
  }, [accessKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(photos);


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 md:mt-12 md:px-8 md:py-12">
      {photos.map((photo) => (
        <div key={photo.id} className="relative">
          <Image
            src={photo.urls.small}
            alt={photo.alt_description || 'Unsplash image'}
            className="w-full h-full object-cover rounded-md shadow-md"
            width={600} // Adjust the width
            height={400} // Adjust the height
            priority // This helps with loading performance
          />
          <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-sm">
            {photo.user.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortFolio;
