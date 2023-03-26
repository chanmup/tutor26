let refs = {};
refs.imagePreviews = document.querySelector(&#39;#previews&#39;);
refs.fileSelector = document.querySelector(&#39;input[type=file]&#39;);

function addImageBox(container) {
  let imageBox = document.createElement(&quot;div&quot;);
  let progressBox = document.createElement(&quot;progress&quot;);
  imageBox.appendChild(progressBox);
  container.appendChild(imageBox);
  
  return imageBox;
}

function processFile(file) {
  if (!file) {
    return;
  }
  console.log(file);

  let imageBox = addImageBox(refs.imagePreviews);

 
  new Promise(function (resolve, reject) {
    let rawImage = new Image();

    rawImage.addEventListener(&quot;load&quot;, function () {
      resolve(rawImage);
    });

    rawImage.src = URL.createObjectURL(file);
  })
  .then(function (rawImage) {
   
    return new Promise(function (resolve, reject) {
      let canvas = document.createElement(&#39;canvas&#39;);
      let ctx = canvas.getContext(&quot;2d&quot;);

      canvas.width = rawImage.width;
      canvas.height = rawImage.height;
      ctx.drawImage(rawImage, 0, 0);

      canvas.toBlob(function (blob) {
        resolve(URL.createObjectURL(blob));
      }, &quot;image/webp&quot;);
    });
  })
  .then(function (imageURL) {
  
    return new Promise(function (resolve, reject) {
      let scaledImg = new Image();

      scaledImg.addEventListener(&quot;load&quot;, function () {
        resolve({imageURL, scaledImg});
      });

      scaledImg.setAttribute(&quot;src&quot;, imageURL);
    });
  })
  .then(function (data) {
  
    let imageLink = document.createElement(&quot;a&quot;);

    imageLink.setAttribute(&quot;href&quot;, data.imageURL);
    imageLink.setAttribute(&#39;download&#39;, `${file.name}.webp`);
    imageLink.appendChild(data.scaledImg);

    imageBox.innerHTML = &quot;&quot;;
    imageBox.appendChild(imageLink);
  });
}

function processFiles(files) {
  for (let file of files) {
    processFile(file);
  }
}

function fileSelectorChanged() {
  processFiles(refs.fileSelector.files);
  refs.fileSelector.value = &quot;&quot;;
}

refs.fileSelector.addEventListener(&quot;change&quot;, fileSelectorChanged);


function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(callback, e) {
  e.stopPropagation();
  e.preventDefault();
  callback(e.dataTransfer.files);
}

function setDragDrop(area, callback) {
  area.addEventListener(&quot;dragenter&quot;, dragenter, false);
  area.addEventListener(&quot;dragover&quot;, dragover, false);
  area.addEventListener(&quot;drop&quot;, function (e) { drop(callback, e); }, false);
}
setDragDrop(document.documentElement, processFiles);