export const tabsData = [
  {
    title: "Tab 1",
    enabled: false,
    content:
      "Quisque laoreet tortor et accumsan elementum. Ut bibendum mi ac justo viverra, a consequat diam tincidunt. Cras nec metus sed tortor sodales blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
  },
  {
    title: "Tab 2",
    enabled: true,
    content:
      "Aenean massa nisl, facilisis sit amet vestibulum non, faucibus ut enim. Quisque nisl magna, convallis in metus vitae, interdum consequat odio.",
  },
  {
    title: "Tab 3",
    enabled: false,
    content:
      "Vestibulum et ex efficitur, pretium diam eu, ultrices lorem. Maecenas ullamcorper mollis auctor. Nulla convallis placerat imperdiet. Curabitur at mi eget libero varius porta. Vestibulum nibh felis, cursus ullamcorper semper nec, pretium id ipsum. Nulla facilisi. Pellentesque luctus ac lacus non sagittis.",
  },
];

export const Tab = `<div class="component">
      <h2>Tab</h2>
      <we-tab-group>
          <we-tab enabled=${tabsData[0].enabled}>
            <div slot="header">${tabsData[0].title}</div>
            <div slot="content">
              <p>${tabsData[0].content}</p>
            </div>
          </we-tab>
          <we-tab enabled=${tabsData[1].enabled}>
            <div slot="header">${tabsData[1].title}</div>
            <div slot="content">
              <p>${tabsData[1].content}</p>
            </div>
          </we-tab>
          <we-tab enabled=${tabsData[2].enabled}>
            <div slot="header">${tabsData[2].title}</div>
            <div slot="content">
              <p>${tabsData[2].content}</p>
            </div>
          </we-tab>
      </we-tab-group>
    </div>`;
