const accordionData = [
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Maecenas id finibus massa, mattis blandit nunc. Maecenas a turpis at massa viverra volutpat lacinia sit amet neque.",
    },
    {
      title: "Nulla sodales nunc eu lorem",
      content:
        "Curabitur in commodo velit, congue interdum nisi. Morbi congue purus elit, non tincidunt eros lobortis at. Nulla a odio ligula.",
    },
    {
      title: "Etiam fringilla mi in lectus",
      content:
        "Nulla eget tincidunt dui. Maecenas aliquet nec velit ut mattis. Nulla sagittis ligula in ex placerat lacinia. Praesent ac dui quis augue sollicitudin dictum sit amet cursus neque. Sed posuere libero at lobortis semper.",
    },
  ];
  const multiple = false;
  const open = false;
  export const Accordion = `<div class="component">
  <h2>Accordion</h2>
  <we-accordion-group multiple=${multiple}>
      <we-accordion open=${false}>
        <div slot="title">${accordionData[0].title}</div>
        <div slot="content">${accordionData[0].content}</div>
      </we-accordion>
      <we-accordion open=${true}>
        <div slot="title">${accordionData[1].title}</div>
        <div slot="content">${accordionData[1].content}</div>
      </we-accordion>
      <we-accordion open=${false}>
        <div slot="title">${accordionData[2].title}</div>
        <div slot="content">${accordionData[2].content}</div>
      </we-accordion>
  </we-accordion-group>
  </div>`;