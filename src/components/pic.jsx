import "./navbar.css";
import videoBg from '../resource/cut.mp4'

function Section() {
  return (
    <section className="home">
      <video autoPlay muted loop src={videoBg} />
    </section>
  )
}

export default Section;
