import axios from "axios";



async function fetchWatches() {
  try {
    const response = await axios.get('/TimeZone-Landing-Page/luxury_watch_data.json');
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw to handle in calling code if needed
  }
}

export default fetchWatches;