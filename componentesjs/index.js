AFRAME.registerComponent("mylink", {
    init: function() {
        this.el.addEventListener("mouseenter", (e)=> {
            window.location = this.data.href;
        })
    }
})

AFRAME.registerComponent("setdisplay", {
    init: function() {
            this.el.addEventListener("mouseenter", (e)=> {
                this.el.parentNode.removeChild(document.querySelector('a-text'))
                this.el.parentNode.parentNode.removeChild(document.querySelector('a-image'))
                this.el.parentNode.parentNode.removeChild(document.querySelector('a-plane'))
            })
    }
})

AFRAME.registerComponent('site-change', {
    schema: {
      img: {type: 'string',}
    },

    init: function(){
      var data= this.data
      var el= this.el

      el.addEventListener('mouseenter', function(){
        var mySky= document.querySelector("#my-sky");
        mySky.setAttribute("src", data.img)
      })
    }
  });