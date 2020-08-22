import { useEventListener } from "./../../common";

const name = "Fruits";
const checked = false;
const disabled = false;

const checkbox1 = "Banana";
const checkbox2 = "Apple";
const checkbox3 = "Pear";

export const CheckboxListener = () => {
  const element = document.querySelector("#we-checkbox-group");
  console.log(element);
  useEventListener(element, "checkboxGroupCallback", (data) =>
    console.log("checkboxGroupCallback", data)
  );
};


export const Checkbox = `<div class="component">
      <h2>Checkbox</h2>
      <we-checkbox-group value=${name} id="we-checkbox-group">
        <we-checkbox value=${checkbox1}>${checkbox1}</we-checkbox>
        <we-checkbox checked=${checked} disabled=${disabled} value=${checkbox2}>
          ${checkbox2}
        </we-checkbox>
        <we-checkbox value=${checkbox3}>${checkbox3}</we-checkbox>
      </we-checkbox-group>
    </div>`;
