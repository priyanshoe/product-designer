import Strip from "./components/Strip";
import Landing from "./(pages)/Landing";
import Page2 from "./(pages)/Page2";
import Page3 from "./(pages)/Page3";

export default function Home(){
  return(
    <div className="overflow-hidden">
      <Landing/>
      <Page2/>
      <Strip/>
      <Page3/>
    </div>
  )
}