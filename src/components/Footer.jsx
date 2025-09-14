import './Footer.css'
import { useFilters } from "../hooks/useFilters"

export function Footer() {
    const { filters } = useFilters()
    return (
        <div className="footer">
            <h4>
                {filters.minPrice} ---  {filters.category}
            </h4>
        </div>
    )
}