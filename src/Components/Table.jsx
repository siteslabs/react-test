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
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          maiores illo cumque. Reprehenderit, reiciendis. Inventore corporis
          ipsam similique saepe obcaecati maxime corrupti iure eos, pariatur
          unde porro reiciendis cupiditate in, ipsa modi distinctio magni
          voluptas sequi eaque tempore iusto harum, possimus vero. Consectetur,
          sequi perspiciatis eligendi vitae consequatur sed asperiores
          cupiditate voluptatibus reprehenderit incidunt esse corporis dolor
          quidem labore similique aut, non culpa praesentium dicta odio! Totam
          iste optio quisquam ut voluptatum numquam itaque animi aspernatur, ex
          nostrum inventore magnam.
        </h3>
      </div>
    </div>
  )
}

export default Table
