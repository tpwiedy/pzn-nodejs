import { URL } from "url";

const natours = new URL(
  "https://natours-production-wiedy.up.railway.app/tour/the-forest-hiker?duration=5"
);

natours.host = "www.natours-wiedy.com";
natours.searchParams.append("difficulty", "medium");

console.info(natours.toString());
console.info(natours.protocol);
console.info(natours.host);
console.info(natours.pathname);
console.info(natours.searchParams);
