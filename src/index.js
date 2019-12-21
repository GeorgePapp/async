
import {searchPost} from "./config"
import {getUserData} from "./model"
import {clearPreviousUserData}from "./view"

searchPost.searchBarInput.addEventListener('keypress', search)
function search(element) {
    var key = element.which || element.keyCode;
    const getValue = searchPost.searchBarInput.value;
   if (key === 13) {
        clearPreviousUserData()
        getUserData(getValue)
    }

}
