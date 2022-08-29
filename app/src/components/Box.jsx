import '../styles/Box.sass';


function Box(props) {

  const handleFormSubmit = async(event) => {
    event.preventDefault()
    const city = event.target.city.value

    props.onCitySelected(city)
  }

  return <div className="Box">
      <main className="Box__container">
        <p> Please allow location or search for city </p>

        <form className='Box__form' onSubmit={handleFormSubmit}>
          <input type="text" name="city" placeholder="City"/>
          <button className='material-symbols-outlined Box__button'>Search</button>
        </form>
      </main>

  </div>
}

export default Box