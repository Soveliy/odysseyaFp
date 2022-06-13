
import { preloader } from "./project/preloader";
import { buttons } from "./project/buttons";
import { scrollbar } from "./project/scrollbar";
import { about } from "./project/about-steps";
import { planet } from "./project/planet-steps";
import { corporulia } from "./project/corporulia";
import { artifactParts } from "./project/artifact-parts";
import { corporulianCode } from "./project/corporulian-code";

let app = {
    init() {
        preloader();
        buttons();
        scrollbar();
        about();
        planet();
        corporulia();
        artifactParts();
        corporulianCode();
        //particles();
    }
};
app.init();