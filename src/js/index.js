window.bootiful = {}

/*
*
* '' param is present but empty
* null param is not present
* undefined there are no parameters
*/
bootiful.urlParam = function (name) {
  let result = undefined;
  let candidates_array = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if ((candidates_array?.length || 0) > 1) {
    if (typeof candidates_array[1] === "string") {
      result = decodeURIComponent(candidates_array[1]); // param present and filled
    }
  } else {
    result = null; // param not present
  }
  return result;
};


bootiful.displayToasts = function () {
  let toastElList = [].slice.call(document.querySelectorAll('.toast'))
  let toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach( function(element, index) {
    element.show()
  })
}
