//Create blob from B64 string

var b64data = '//B64_HERE//';
const b64toBlob = (b64Data, contentType='//CONTENT_TYPE//', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

const contentType = '//CONTENT_TYPE//';
const blob = b64toBlob(b64data, contentType);

//Create Form upload
function upload() {
var formData = new FormData();
  formData.append("//UPLOAD_FORM//", blob, "//FILE_NAME//");

var xhr = new XMLHttpRequest();
xhr.open("POST", "//ENDPOINT//",true);
xhr.send(formData);
}

//Validate it uploaded
function getPage()
{
	var b64url ="//GET_PAGE//";
 	xhr = new XMLHttpRequest();
	xhr.open("GET", b64url, true);
	xhr.send(null);

}

upload();
getPage();
