import axios from "axios";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5cf3abf28fmshd6f0cbb51806728p10143ejsnd7a612ec7797",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=30",
      { headers }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
