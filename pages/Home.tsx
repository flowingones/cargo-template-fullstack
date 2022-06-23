import { h } from "nano/mod.ts";
import { tw } from "twind/mod.ts";

export default function home() {
  return (
    <div class={tw`font-sans`}>
      <h1>Hello There. Welcome to the Cargo Default Site</h1>
    </div>
  );
}
