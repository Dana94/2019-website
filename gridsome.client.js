import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faLinkedin, faGithub, faEnvelope, faFile)

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
  }