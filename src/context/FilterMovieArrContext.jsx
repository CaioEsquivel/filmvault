import { createContext, useState } from "react";

export const FilterMovieArrContext = createContext();

export const FilterMovieArrProvider = ({ children }) => {

    const [filterMovieArr,setFilterMovieArr] = useState(null)

    return (
        <FilterMovieArrContext.Provider value={{ filterMovieArr, setFilterMovieArr }}>
            {children}
        </FilterMovieArrContext.Provider>
    );
};
