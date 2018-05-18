export default function downloadFile(url = '', fileName) {
  // https://github.com/rndme/download
  url = url.replace(/^(http(?:s)?:\/\/)(.*)/gi,(str,$1,$2) => {
    return 'https://' + $2;
  });
  let anchor = document.createElement('a');
  let defaultMime = 'application/octet-stream'; // this default mime also triggers iframe downloads
  let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  let isSafari = /(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent);
  if ('download' in anchor && !isFirefox) { //html5 A[download]
    anchor.href = url;
    anchor.setAttribute('download', fileName);
    anchor.className = 'download-js-link';
    anchor.innerHTML = 'downloading...';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    setTimeout(function() {
      anchor.click();
      document.body.removeChild(anchor);
    }, 66);
    return true;
  }

  // handle non-a[download] safari as best we can:
  if(isSafari) {
    if(/^data:/.test(url))	url='data:'+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
    if(!window.open(url)){ // popup blocked, offer direct download:
      if(confirm('Displaying New Document\n\nUse Save As... to download, then click back to return to this page.')){ location.href=url; }
    }
    return true;
  }
  if(isFirefox){
    let f = document.createElement('iframe');
    document.body.appendChild(f);
    f.src = url;
    f.style.display = 'none';
    document.body.appendChild(f);
  }
}