import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {

    const {filters, setFilters} = useFilters()
    const categoryId = useId()
    const minPriceId = useId()

    const handlePriceChange = (event) => {
        const newPrice = event.target.value
        setFilters(prevState => ({
            ...prevState, minPrice: newPrice
        }))
    }

    const handleCategoryChange = (event) => {
        const newCat = event.target.value
        setFilters(prevState => ({
            ...prevState, category: newCat
        }))
    }

    return (
        <header>
            <section className="filters">
                <div>
                <label htmlFor={categoryId}></label>
                <select id={categoryId} 
                    onChange={handleCategoryChange}
                >
                    <option value={'all'}> Todo</option>
                    <option value={'Hardware'}> Componentes</option>
                    <option value={'Perifericos'}> Perifericos</option>
                    <option value={'Videojuegos'}> Videojuegos</option>
                </select>
                </div>
                <div>
                    <label htmlFor={minPriceId}></label>
                    <input type="range" id={minPriceId}
                    value={filters.minPrice}
                    min={0}
                    max={250}
                    onChange={handlePriceChange}
                    >
                    </input>
                    <span>{filters.minPrice}</span>
                </div>
            </section>
        </header>
    )
}