import { useGlobalContext } from "../context"
import "../styles/pagination.css"

const Pagination = () => {
  const { pages, currentPage, setCurrentPage } = useGlobalContext()

  const changePage = (page) => {
    setCurrentPage(page)
  }

  // Pagination pages
  const pagesContent = Array.from({ length: pages }, (_, index) => (
    <div
      className={`pagination__page ${currentPage === index && "selected"}`}
      key={index}
      onClick={() => changePage(index)}
    >
      {index + 1}
    </div>
  ))

  return (
    <div className="pagination">
      <div className="container">{pagesContent}</div>
    </div>
  )
}

export default Pagination
