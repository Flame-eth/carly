import { CarProps, FilterProps } from "@/types";
import axios from "axios";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, year, fuel, limit } = filters;
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_SECRET,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await axios.get(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
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

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageDiscount = city_mpg * mileageFactor;

  const ageDiscount = (new Date().getFullYear() - year) * ageFactor;

  const totalPrice = basePricePerDay + mileageDiscount + ageDiscount;

  return totalPrice.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`https://cdn.imagin.studio/getimage`);

  const { make, model, year } = car;

  url.searchParams.append("customer", process.env.NEXT_PUBLIC_IMAGIN_KEY ?? "");

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle ?? "front"}`);

  return url.toString();
};

export const updateSearchParams = (type: string, value: string) => {
  const params = new URLSearchParams(window.location.search);

  params.set(type, value);

  const pathname = `${window.location.pathname}?${params.toString()}`;

  return pathname;
};
