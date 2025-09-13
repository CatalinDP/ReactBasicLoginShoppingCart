import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)

    if (filters === undefined || setFilters === undefined) {
        throw new Error('Filters context must be used within a Filters provider')
    }

    function filterProducts(products) {
        return products.filter(
            item => item.precio >= filters.minPrice &&
            (
                filters.category === 'all' 
                || item.categoria === filters.category
            )
        )
    }

    return {filters, setFilters, filterProducts }
}