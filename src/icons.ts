/**
 * Importing all icon packs
 */
import * as FaIcons from "oh-vue-icons/icons/fa"
import * as RiIcons from "oh-vue-icons/icons/ri"
import * as IoIcons from "oh-vue-icons/icons/io"
import {addIcons} from "oh-vue-icons";

/**
 * Setting constructors
 */
const Fa = Object.values({...FaIcons});
const Ri = Object.values({...RiIcons});
const Io = Object.values({...IoIcons});

addIcons(...Fa, ...Ri, ...Io)