import { useEventListener } from "./../../common";

const name = "Country";
const checked = true;
const disabled = false;

const radio1 = "Peru";
const radio2 = "Italia";
const radio3 = "Germany";

export const RadioListener = () => {
  const element = document.querySelector("#we-radio-group");
  console.log(element);
  useEventListener(element, "radioGroupCallback", (data) =>
    console.log("radioGroupCallback", data)
  );
};

export const Radio = `<div class="component" >
            <h2>Radio</h2>
            <we-radio-group value=${name} id="we-radio-group">
                <we-radio value=${radio1}>${radio1}</we-radio>
                <we-radio checked=${checked} disabled=${disabled} value=${radio2}>${radio2}</we-radio>
                <we-radio value=${radio3}>${radio3}</we-radio>
            </we-radio-group>
        </div>`;
