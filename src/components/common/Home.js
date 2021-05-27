function Home() {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="columns is-multiline is-mobile">
        <div className="column is-half summerActivities">
          <p className="bd-notification is-info">Summer Activities</p>
        </div>
        <div className="column is-half winterActivities">
          <p className="bd-notification is-info">Winter Activities</p>
        </div>
        <div className="column is-auto logo">
          <p className="bd-notification is-info ">MontVenture</p>
        </div>
      </div>
    </section>
  )
}

export default Home