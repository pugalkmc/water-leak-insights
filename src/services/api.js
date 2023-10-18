// api.js

const BASE_URL = 'https://your-api-url.com'; // Replace with your actual API endpoint

// Example function to fetch user profile data
export async function getUserProfile(userId) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch user profile data');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Example function to update user profile
export async function updateUserProfile(userId, profileData) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to update user profile');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Add more API functions as needed for your project
