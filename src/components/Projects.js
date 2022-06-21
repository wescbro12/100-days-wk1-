export default function Projects() {
    return (
        <div className="Projects">
            <div className="card">
                <div className="container">
                    <h4><b>Avatar Memory Game</b></h4>
                    <a href="https://github.com/wescbro12/Avatar-Memory-Game"><h5>Source Code</h5></a>

                </div>
                <section className="col-3 col-4-medium col-12-small">
                    <span className="project-img"><a href="https://wescbro12.github.io/Avatar-Memory-Game/"
                        target="blank"><img src="images/Avatar.png" width="250px" /></a></span>
                </section>
            </div>
            <div className="card" id="wbd">
                <div className="container">
                    <img src="images/wbd.png" width="250px" />
                </div>

            </div>

            <div className="card">
                <div className="container">
                    <h4><b>Honey Do</b></h4>
                    <a href="https://github.com/wescbro12/Unit3-Honey-Too"><h5>Source Code</h5></a>

                </div>
                <section className="col-3 col-4-medium col-12-xsmall">
                    <span className="project-img"><a href="https://wes-captain-log.herokuapp.com/caplog"
                        target="blank"><img src="images/Honey.png" width="250px" /></a></span>

                </section>
            </div>
        </div>
    )
}