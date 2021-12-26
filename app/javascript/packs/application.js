// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import fontawesome from '@fortawesome/fontawesome-free'
import faSolid from '@fortawesome/fontawesome-free-solid'
import faRegular from '@fortawesome/free-regular-svg-icons'
import faBrands from '@fortawesome/free-brands-svg-icons'

fontawesome.library.add(faSolid, faRegular, faBrands)

fontawesome.dom.i2svg()

Rails.start()
Turbolinks.start()
ActiveStorage.start()
