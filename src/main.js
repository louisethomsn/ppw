import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";
scroll(animate(".progress-bar", { scaleX: [0, 1] }));

inView(".pilinview", () => {
  animate(".pilinview", { y: [-2000, 0] }, { duration: 1 });
});

inView(".projektinview1", () => {
  animate(".projektinview1", { x: [-2000, 0] }, { duration: 2 });
});
inView(".projektinview2", () => {
  animate(".projektinview2", { x: [+2000, 0] }, { duration: 2 });
});

inView(".projektinview3", () => {
  animate(".projektinview3", { x: [-2000, 0] }, { duration: 2 });
});
inView(".projektinview4", () => {
  animate(".projektinview4", { x: [+2000, 0] }, { duration: 2 });
});
inView(".projektinview5", () => {
  animate(".projektinview5", { x: [-2000, 0] }, { duration: 2 });
});
inView(".projektinview6", () => {
  animate(".projektinview6", { x: [+2000, 0] }, { duration: 2 });
});

inView(".projektinview7", () => {
  animate(".projektinview7", { x: [-2000, 0] }, { duration: 2 });
});
