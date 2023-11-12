import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty =  !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore the best cars available on Carly 
          </p>

        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            WE HAVE CARS
          </section>
         ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                Oops, no cars found!
              </h2>
              <p className="text-gray-500">
                Try adjusting your search filters to find what you're looking for.
              </p>
            </div>
          
        )}

      </div>
    </main>
  );
}
