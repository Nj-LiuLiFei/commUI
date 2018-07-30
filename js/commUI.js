;
(
    function (window) {
        var cofig={
          "blockUIImgPath":"img/commonUIBlockImg_1.png",
        };
        var commUIUtil={
          "createBlockUI":function (e,m,f) {
              var b = document.createElement("div"),c=document.createElement("div"),
                  i=document.createElement("img"),s=document.createElement("span");
              b.classList.add("commui-block-wrap"),c.classList.add("block-content"),
                  i.classList.add("block-load-img"),i.setAttribute("src",cofig.blockUIImgPath);
              if(f == true) {
                  b.style.position="fixed";
              }
              s.innerHTML = m;
              c.appendChild(i),c.appendChild(s),b.appendChild(c);
              return b;
          },
        };
        var commUI={
          "blockUI":function (e,m,f) {
              var s = new Date().getTime();
              if(e.selector) {
                  for(var i=0;i<e.length;i++) {
                      (e[i]).appendChild(commUIUtil.createBlockUI(e,m,f));
                  }
              }else {
                  if(e.length){
                      for(var i=0;i<e.length;i++) {
                          e[i].appendChild(commUIUtil.createBlockUI(e,m,f));
                      }
                  }else {
                      e.appendChild(commUIUtil.createBlockUI(e,m,f));
                  }
              }
              console.log("加载框渲染耗时："+(new Date().getTime()-s));
          },
          "unblockUI":function (e) {
              var sd = new Date().getTime();
              if(e.selector) {
                  for(var i=0;i<e.length;i++) {
                      var s = e[i].getElementsByClassName("commui-block-wrap");
                      for(var j=0;j<s.length;j++) {
                          s[j].remove();
                      }
                  }
              }else {
                  if(e.length){
                      for(var i=0;i<e.length;i++) {
                          var s = e[i].getElementsByClassName("commui-block-wrap");
                          for(var j=0;j<s.length;j++) {
                              s[j].remove();
                          }
                      }
                  }else {
                      var s = e.getElementsByClassName("commui-block-wrap");
                      for(var j=0;j<s.length;j++) {
                          s[j].remove();
                      }
                  }
              }
              console.log("取消加载框渲染耗时："+(new Date().getTime()-sd));
          },
        };
        window.commUI = commUI;
    }
)(window);