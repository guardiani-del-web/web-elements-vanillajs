import "./style.css";

import {Accordion} from './components/accordion'
import {Card} from './components/card'
import {Checkbox} from './components/checkbox'
import {Chips} from './components/chips'
import {Divider} from './components/divider'
import {Dropdown} from './components/dropdown'
import {Modal} from './components/modal'
import {Radio} from './components/radio'
import {Slider} from './components/slider'
import {Switch} from './components/switch'
import {Tab} from './components/tab'
import {Textarea} from './components/textarea'
import {Tooltip} from './components/tooltip'

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
${Accordion}
${Card}
${Checkbox}
${Chips}
${Divider}
${Dropdown}
${Modal}
${Radio}
${Slider}
${Switch}
${Tab}
${Textarea}
${Tooltip}
`;
