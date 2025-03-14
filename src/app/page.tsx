import Banner from "../components/Banner";
import CardPanel from "../components/CardPanel";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px"}}>
        <CardPanel />
      </div>
    </main>
  )
}