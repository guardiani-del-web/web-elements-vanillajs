const title = "Title";
const subtitle = "Subtitle";
const texts =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
export const Card = `<div class="component">
            <h2>Card</h2>
            <we-card>
                <div slot="title">${title}</div>
                <div slot="subtitle">${subtitle}</div>
                <div slot="texts">${texts}</div>
            </we-card>
        </div>`;
