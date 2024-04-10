import Image from "next/image";
import "./page.module.css";
import Nav from '../app/components/Nav/nav'

export default function Home() {
  return (
    <main className="main-container">
      <Nav/>
      <div className="body-container">
        <div className="body">
<Image
      alt="there once was a kid"
      src= '/There-once-was.png'
      width={1440}
      height={800}
      />
        </div>

      </div>
    </main>
  );
}
