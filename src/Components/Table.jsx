import { useGlobalContext } from "../context"
import "../styles/Table.css"
import Pagination from "./Pagination"
import Noresults from "./Noresults"

const Table = () => {
  const { data, headerData, newItems, currentPage } = useGlobalContext()

  return (
    <div className="table">
      <div className="container">
        {data.length > 0 ? (
          <table>
            <thead>
              <tr>
                {headerData.map((data, index) => (
                  <th key={index}>
                    {data.title} {data.title === "Расстояние" && "(км)"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {newItems[currentPage].map((data) => {
                const { id, date, title, amount, distance } = data
                return (
                  <tr key={id}>
                    <td>{date}</td>
                    <td>{title}</td>
                    <td>{amount}</td>
                    <td>{distance} </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <Noresults />
        )}
        {data.length > 20 && <Pagination />}
      </div>
    </div>
  )
}

export default Table
