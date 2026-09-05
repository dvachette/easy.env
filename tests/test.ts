import { inspect } from "util";
import { required, optional } from "../src";
import { config } from "dotenv";
config({ path: '.env.test' })
const myConfig = {
    value: required("VALUE"),
    heyo: optional("HEYO"),
    test: optional("TEST", "You won't see me"),
    bloat: optional("I_DONT_EXIST"),
}

console.log(inspect(myConfig));