import Hero from "../../components/global/hero/Hero";
import New from "../../components/ui/home/new/New";
import FP from "../../components/ui/home/featureProduct/FP";
import Anim from "../../components/anim/Anim";
import Animone from "../../components/anim/animone/Animone";
import Animtwo from "../../components/anim/animtwo/Animtwo";
import Zig from "../../components/anim/cartAnim/Zig";
import "../style/Home.scss";
function Home() {
  return (
    <div className="--t-h-container">
      <Hero />
      <Zig />
      <Anim />
      <Animone />
      <Animtwo />
      <FP />
      <New />
    </div>
  );
}

export default Home;
