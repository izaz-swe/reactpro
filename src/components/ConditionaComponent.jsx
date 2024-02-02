import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponents({display}){
  return display ? <Welcome/> : <Code/>;
}