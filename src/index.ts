import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { mapAPIKey } from "./api-keys.json";

const script = document.createElement("script");
document.body.insertAdjacentElement("afterbegin", script).id = "maps-script";
const mapScript = document.getElementById("maps-script");
mapScript.setAttribute("src", `https://maps.googleapis.com/maps/api/js?key=${mapAPIKey}`);
mapScript.addEventListener("load", (e) => {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap("map");

  customMap.addMarker(user);
  customMap.addMarker(company);
});
