

function Home() {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="logo hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <img src="https://i.imgur.com/0uVCbH7.png"/>
          </h1>
          <h2 className="title is-3 has-text-white has-text-centered">Your source for finding the best mountain adventures.</h2>
          <div className="searchbar column is-half is-offset-one-quarter" >
            <form>
              <div className="control column is-half">
                <input className="input is-focused" type="text" placeholder="Find your adventure..."/>
              </div>
              <div className="column is-half">
                <input type="submit" value="Search" className="button"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home