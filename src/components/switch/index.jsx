import { useEventListener } from "./../../common";

const valueGroup = "valueGroup";

const value1 = "Switch 1";
const value2 = "Switch 2";
const value3 = "Switch 3";
const checked = false;

export const SwitchListener = () => {
  const element = document.querySelector("#we-switch-group");
  console.log(element);
  useEventListener(element, "switchGroupCallback", (data) =>
    console.log("switchGroupCallback", data)
  );
};

export const Switch = `<div class="component">
      <h2>Switch</h2>
      <we-switch-group value=${valueGroup} id="we-switch-group">
        <we-switch value=${value1} checked=${checked}></we-switch>
        <we-switch value=${value2} checked=${checked}></we-switch>
        <we-switch value=${value3} checked=${checked}></we-switch>
      </we-switch-group>
    </div>`;
