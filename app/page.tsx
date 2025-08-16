import Strip from "./components/Strip";
import Landing from "./Landing";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function Home(){
  return(
    <div className="overflow-hidden">
      <Landing/>
      <Page2/>
      <div className="relative">
        <Strip/>
      </div>
      <Page3/>
    </div>
  )
}