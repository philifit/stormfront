/* TODO:
- Add load listener
- Support for avif
- picture element injection
- srcset impl
- background Support
- path for cloudinary assets
- video playback support
- async, delayed, fire on load events
- name spacery, so like actual plugin-style support

// example full image path: https://iconcdn-res.cloudinary.com/image/upload/v1634753483/nordictrack.com/cdn/email/2021/Blast/10-20-21/400px.gif
// example full video path: https://iconcdn-res.cloudinary.com/video/upload/v1633379312/nordictrack.com/cdn/images/marketing/homepagevideo/2021_NT_WEB_ST_boston-marathon-ambient_16x9_18sec_MOS_20211004.mp4
*/
;function stormfront(options){
  options = options || {
    basePath: 'https://iconcdn-res.cloudinary.com/',
    target: 'optimize',
    debug: false
  };
  // options needs be fleshed out, image, video, bg imaage, bg video, pixity style, lazy-load style, aspect ratio,etc.


  // functions
  function setImage(image) {
    let width = image.attr("data-width")|| 'auto',
        height = image.attr("data-height")|| 'auto',
        ratio = image.attr("data-ratio") || height / width || '',
        bg = image.attr("data-bg") || false,
        async = image.attr("async") || true;
    console.log("setImage called!");
    console.log("width:",width);
    console.log("height:", height);
    console.log("ratio:", ratio);
    console.log("bg:", bg);
    console.log("async:", async);
    console.log("setImage finished!");
  }
  function setVideo(poster,bg) {}
  function getImages() {
    // find all images with a class of optimize and let's start processing!
    let targets = document.querySelectorAll(options.target);
    if(targets.length > 0) {
      console.log("we have at least one target, so we can do something!");
      // check for and send width, height, ratio, bg, async attributes in setImage!
      targets.forEach(setImage(el));
    } else {
      console.log("zero images found, returning...");
    }
  }
  function getVideos() {}

  // other tomfoolery

  console.log("we is runnin! calling getImages()");
  getImages();
  // end stromfront()
};
