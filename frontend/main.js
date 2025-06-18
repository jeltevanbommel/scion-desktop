import {GreetService} from "./bindings/changeme";
import {Events} from "@wailsio/runtime";

let nonadmin = document.getElementById('nonadmin');
let admin = document.getElementById('admin');
const pre = document.getElementById('log-out');

window.quit = () => {
    GreetService.Exit()
}
GreetService.IsAdmin().then((result) => {
    if (result) {
        admin.style.display = "block";
    } else {
        nonadmin.style.display = "block";
    }
}).catch((err) => {
    console.log(err);
});

Events.On('time', (time) => {
    pre.innerText = pre.innerText + "\n" + time.data;
    pre.scrollLeft = 0;
    pre.scrollTop = pre.scrollHeight;

});
