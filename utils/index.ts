import axios from "axios";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "5cf3abf28fmshd6f0cbb51806728p10143ejsnd7a612ec7797",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=12",
      { headers }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}


/**
 * Calculates the total price of renting a car based on the city miles per gallon (mpg) and the year of the car.
 * @param city_mpg The city miles per gallon of the car.
 * @param year The year of the car.
 * @returns The total price of renting the car.
 */
export const calculateCarRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50;

    const mileageFactor =  0.1;

    const ageFactor = 0.05;

    const mileageDiscount = city_mpg * mileageFactor;

    const ageDiscount = (new Date().getFullYear() - year) * ageFactor;

    const totalPrice = basePricePerDay + mileageDiscount + ageDiscount;

    return totalPrice.toFixed(0);
}