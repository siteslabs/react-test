import { createContext, useContext, useState } from "react"
import initialDate from "./data"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [data, setData] = useState(initialDate)

  // PAGINATION DATA
  const [currentPage, setCurrentPage] = useState(0)

  // content in per page
  const itemsPerpage = 20
  const pages = Math.ceil(data.length / itemsPerpage)
  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerpage
    const tempItems = data.slice(start, start + itemsPerpage)
    return tempItems
  })

  // Table header
  const headerData = [
    { title: "Дата" },
    { title: "Название" },
    { title: "Количество" },
    { title: "Расстояние" },
  ]
  const conditionData = [
    { sign: "<" },
    { sign: ">" },
    { sign: "=" },
    { sign: "Содержить" },
  ]

  // Filter for conditions
  const filterAmountDistance = (data, coditionOption, input) => {
    const value = parseInt(input)

    if (Number.isNaN(value)) {
      alert("Пожалуйста введите число")
      return
    }

    if (coditionOption === "<") {
      setData(initialDate.filter((item) => item[data] < value))
    }
    if (coditionOption === ">") {
      setData(initialDate.filter((item) => item[data] > value))
    }
    if (coditionOption === "=") {
      setData(initialDate.filter((item) => item[data] === value))
    }
  }

  // Filter Button Submit
  const sortSubmit = (e, nameOption, coditionOption, input) => {
    e.preventDefault()
    if (nameOption === "Название") {
      setData(initialDate.filter((item) => item.title.includes(input)))
    }
    if (nameOption == "Количество") {
      filterAmountDistance("amount", coditionOption, input)
    }
    if (nameOption == "Расстояние") {
      filterAmountDistance("distance", coditionOption, input)
    }
  }

  return (
    <AppContext.Provider
      value={{
        data,
        headerData,
        conditionData,
        sortSubmit,
        // pagination data
        pages,
        newItems,
        currentPage,
        setCurrentPage,
        // end of pagination data
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook for context
export const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
