import "./Accordion";
import "./AccordionItem";
import "@/components/theme/Theme";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-element";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Accordion",
  component: "md-accordion",
  decorators: [withKnobs, withA11y],
  parameters: {
    a11u: {
      element: "md-accordion"
    }
  }
};

export const Accordion = () => {
  const darkTheme = boolean("darkMode", false);
  const lumos = boolean("Lumos Theme", false);
  const disabled = boolean("disabled", false);
  const expanded = boolean("expanded", false);
  const multiple = boolean("multiple", false);

  return html`
  <md-theme class="theme-toggle" id="activity-button" ?darkTheme=${darkTheme} ?lumos=${lumos}>
    <md-accordion ?multiple=${multiple}>
      <md-accordion-item slot="accordion-item" label="Header №1" ?expanded=${expanded}>
        <div>Panel №1</div>
      </md-accordion-item>
      <md-accordion-item slot="accordion-item" label="Header №2" ?disabled=${disabled}>
        <div>Panel №2</div>
      </md-accordion-item>
      <md-accordion-item slot="accordion-item" label="Header №3">
        <div>Panel №3</div>
      </md-accordion-item>
    </md-accordion>
  </md-theme>
  `;
};