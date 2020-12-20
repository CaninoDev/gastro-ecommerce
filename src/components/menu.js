import React, { useContext, useState } from "react"
import { ProductsContext } from "../components/providers/products"
import MenuItem from "./menu-item"

const Menu = () => {
  const products = useContext(ProductsContext)
  const [menu, setMenu] = useState(products.listProducts())
  const filtersDefault = (function () {
    var types = ""
    for (const plate of menu) {
      if (plate.type) {
        types += plate.type + " "
      }
    }
    var typesArray = types.split(" ")
    const typeSet = new Set([...typesArray])
    return typeSet
  })()
  const [filters, updateFilters] = useState(filtersDefault)

  const onFilter = (e, newFilter) => {
    e.preventDefault()

    const updatedFilters = filtersDefault.map(f => {
      f.isChecked = f.label === newFilter
      return f
    })

    const filteredProducts =
      newFilter !== "All"
        ? products
            .listProducts()
            .filter(product => product.type.includes(newFilter))
        : products.listProducts()

    updateFilters(updatedFilters)
    setMenu(filteredProducts)
  }

  return (
    <section id="menu" className="menu section-bg" data-aos="fade-up">
      <div className="container">
        <div className="menu-nav">
          <div className="section-title">
            <h2>Menu</h2>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="justify-content-center">
              <ul id="menu-flters">
                <label>
                  {Array.from(filters).map(entry => (
                    <li
                      type="button"
                      onKeyDown={e => e.preventDefault(e)}
                      key={entry}
                      onClick={e => onFilter(e, entry)}
                      className={entry.isChecked ? "filter-active" : null}
                      value={entry}
                      name={entry}
                    >
                      {entry}
                    </li>
                  ))}
                </label>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <div className="d-flex flex-wrap">
              {menu.map(({ id, name, price, description }) => (
                <MenuItem
                  id={id}
                  name={name}
                  price={price}
                  description={description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
