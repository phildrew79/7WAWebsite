     jQuery(function(){
          $(".img-swap").hover(
               function(){this.src = this.src.replace("_off","_on");},
               function(){this.src = this.src.replace("_on","_off");
          });
     });
