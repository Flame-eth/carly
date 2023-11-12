"use client";
import { CardCardProps } from "@/types";
import { useState } from "react";

const CarCard: React.FC<CardCardProps> = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>
    </div>
  );
};

export default CarCard;
