import { useState } from "react"
import { useGlobalContext } from "../context"
import "../styles/sort.css"

const Sort = () => {
  const { headerData, conditionData, sortSubmit } = useGlobalContext()

  const [sortOptions, setSortOptions] = useState({
    nameOption: headerData[1].title,
    coditionOption: conditionData[0].sign,
    input: "",
  })

  const changeHandler = (e) => {
    const { name, value } = e.target
    setSortOptions({
      ...sortOptions,
      [name]: value,
    })
  }

  // Условие Сортировки
  const condition = (sign) =>
    (sortOptions.nameOption === "Название" && sign.sign !== "Содержить") ||
    (sortOptions.nameOption !== "Название" && sign.sign == "Содержить")

  // OPTION CONTENTS
  const headerOptionContent = headerData.map(
    (item, index) =>
      item.title !== "Дата" && (
        <option className="sort__option" key={index} value={item.title}>
          {item.title}
        </option>
      )
  )
  const conditionOptionContent = conditionData.map((sign, index) => (
    <option
      className="sort__option"
      key={index}
      value={sign.sign}
      disabled={condition(sign)}
    >
      {sign.sign}
    </option>
  ))

  return (
    <div className="sort">
      <form className="container">
        <select
          className="sort__select"
          name="nameOption"
          onChange={changeHandler}
        >
          {headerOptionContent}
        </select>
        <select
          className="sort__select"
          name="coditionOption"
          onChange={changeHandler}
        >
          {conditionOptionContent}
        </select>
        <input
          className="sort__input"
          type="text"
          name="input"
          value={sortOptions.input}
          onChange={changeHandler}
        />
        <button
          className="sort__btn"
          onClick={(e) =>
            sortSubmit(
              e,
              sortOptions.nameOption,
              sortOptions.coditionOption,
              sortOptions.input
            )
          }
        >
          Применить фильтр
        </button>
      </form>
    </div>
  )
}

export default Sort
