import React, { useState } from 'react'
import Stats from './components/stats'
import Reviews from './components/reviews'
import Payments from './components/payments'
import ListView from './components/list_view'
import "./styles/app.css"
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  let [state, update] = useState({ "section": "stats" })

  function display_section() {// used to render section on change of section state
    let rendering_section;
    switch (state.section) {
      case "stats": rendering_section = <Stats />
        break;
      case "reviews": rendering_section = <Reviews />
        break;
      case "payments": rendering_section = <Payments />
        break;
      case "customer_list": rendering_section = <ListView type={"customer_list"} />
        break;
      case "hotel_list": rendering_section = <ListView type={"hotel_list"} />
        break;
      default:
        rendering_section = null;
        break
    }
    return rendering_section;

  }

  function change_section(e) {// used to change admin panel sections
    update((state) => ({ ...state, "section": e.target.value }))
  }

  return (
    <>
      <div className='main_content dark_theme w-100'>
        <div className='category_selection'>
          <div onClick={change_section} id="stats">Admin Panel</div>
          <div onClick={change_section} id="customer_list">Customer</div>
          <div onClick={change_section} id="hotel_list">Hotels</div>
          <div onClick={change_section} id="payments">Payments</div>
          <div onClick={change_section} id="reviews">Reviews</div>
        </div>
        <div>
          <div className='float-none'>
            <div className='float-start'>welcome prateek!</div>
            <div className='float-end'>Logout</div>
          </div>
          <div>home/dashboard</div>
          {display_section()}
        </div>
      </div>
    </>
  )
}

export default App