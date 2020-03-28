import React from 'react';
import { Link } from "react-router-dom";
import Asset from '../../components/Asset'

class Favourites extends React.Component {
  removeFromFavourites = (key) => {
    let array = JSON.parse(localStorage.getItem("favouriteDogs"))
    array.splice(key, 1);
    localStorage.setItem("favouriteDogs", JSON.stringify(array))

    this.forceUpdate();
  }

  removeAll = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.removeItem("favouriteDogs");
      this.forceUpdate();
    } else {
      return false
    }
  }

  render() {
    if (JSON.parse(localStorage.getItem("favouriteDogs")) == undefined || !JSON.parse(localStorage.getItem("favouriteDogs")).length) {
      return (
        <div className="flex justify-center items-center mt-16 lg:mt-32 text-center">
          <h2 className="text-4xl font-semibold">You don't have any saved dogs. <Link className="transition duration-300 text-blue-500 hover:text-blue-600 hover:underline" to="/">Go back</Link> and add some.</h2>
        </div>
      )
    }
    return (
      <div>
        <div className="flex items-center mb-8">
          <h1 class="text-4xl font-bold mr-4">Favourites</h1>
          <span class="inline-flex rounded-md shadow-sm">
            <button onClick={() => this.removeAll()} type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              Delete all
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {JSON.parse(localStorage.getItem("favouriteDogs")).map((item, idx) => {
            return (
              <div key={idx} className="relative overflow-hidden" style={{height: "400px"}}>
                <Asset data={item} />
                <button onClick={() => this.removeFromFavourites(idx)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-0 right-0 p-3 bg-red-600 text-white shadow-lg transition duration-300 h-10 w-10 rounded-bl-lg hover:bg-red-700">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Favourites;