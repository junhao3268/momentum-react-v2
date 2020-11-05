import "@/components/button/Button";
import { getDate, getMonth, isSameDay, now } from "@/utils/dateUtils";
import { customElement, html, LitElement, property } from "lit-element";
import DateTime from "luxon/src/datetime.js";

export namespace DatePickerDay {}

@customElement("md-datepicker-day")
export class DatePickerDay extends LitElement {
  @property() day: DateTime | undefined = now(); // meant to be a DateTime instance reflecting a day
  @property() month: DateTime | undefined = undefined; // meant to be a DateTime instance reflecting a month
  @property({ type: Boolean }) selected = false; // not sure, seems moment related?
  //   @property() focus = false; replace this, otherwise it expects dom native focus()
  @property({ attribute: false }) handleDayClick: Function | undefined = undefined; // a passed function from the main picker context
  @property({ type: Boolean }) disabled = false;

  handleClick(e: MouseEvent) {
    const { handleDayClick, day } = this;
    return handleDayClick && handleDayClick(e, day);
  }

  render() {
    const { selected, focus, day, month } = this;

    const isOutsideMonth = month !== getMonth(day);
    const isSelected = isSameDay(day, selected);
    const isToday = isSameDay(day, now());
    // const disabled = isDayDisabled(day, this); // too reliant on react-based {...otherProps} pattern, better pass it along as an attribute
    const hasFocus = isSameDay(day, focus);

    return html`
      <md-button
        circle
        size=${28}
        ?disabled=${this.disabled}
        class=${"md-datepicker__day" +
          `${(isSelected && ` md-datepicker__day--selected`) || ""}` +
          `${(hasFocus && ` md-datepicker__day--focus`) || ""}` +
          `${(isToday && ` md-datepicker__day--today`) || ""}` +
          `${(isOutsideMonth && ` md-datepicker__day--outside-month`) || ""}`}
        @click=${this.handleClick}
        aria-label=${`${day?.format("D, dddd MMMM YYYY")}`}
        aria-selected=${isSelected}
        tab-index=${-1}
      >
        <div aria-hidden="true">
          ${getDate(day)}
        </div>
      </md-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-datepicker-day": DatePickerDay;
  }
}
