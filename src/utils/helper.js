/* eslint no-bitwise: "off" */
/* eslint no-mixed-operators: "off" */

export default function uuid() {
  return Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
}
