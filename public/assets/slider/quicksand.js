/*

Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/
(function(e){e.fn.quicksand=function(t,n){var r={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:!0,enhancement:function(e){},selector:"> *",dx:0,dy:0};e.extend(r,n);if(e.browser.msie||typeof e.fn.scale=="undefined")r.useScaling=!1;var i;if(typeof arguments[1]=="function")var i=arguments[1];else if(typeof (arguments[2]=="function"))var i=arguments[2];return this.each(function(n){var s,o=[],u=e(t).clone(),a=e(this),f=e(this).css("height"),l,c=!1,h=e(a).offset(),p=[],v=e(this).find(r.selector);if(e.browser.msie&&e.browser.version.substr(0,1)<7){a.html("").append(u);return}var m=0,g=function(){m||(m=1,$toDelete=a.find("> *"),a.prepend(S.find("> *")),$toDelete.remove(),c&&a.css("height",l),r.enhancement(a),typeof i=="function"&&i.call(this))},y=a.offsetParent(),b=y.offset();y.css("position")=="relative"?y.get(0).nodeName.toLowerCase()!="body"&&(b.top+=parseFloat(y.css("border-top-width"))||0,b.left+=parseFloat(y.css("border-left-width"))||0):(b.top-=parseFloat(y.css("border-top-width"))||0,b.left-=parseFloat(y.css("border-left-width"))||0,b.top-=parseFloat(y.css("margin-top"))||0,b.left-=parseFloat(y.css("margin-left"))||0),isNaN(b.left)&&(b.left=0),isNaN(b.top)&&(b.top=0),b.left-=r.dx,b.top-=r.dy,a.css("height",e(this).height()),v.each(function(t){p[t]=e(this).offset()}),e(this).stop();var w=0,E=0;v.each(function(t){e(this).stop();var n=e(this).get(0);n.style.position=="absolute"?(w=-r.dx,E=-r.dy):(w=r.dx,E=r.dy),n.style.position="absolute",n.style.margin="0",n.style.top=p[t].top-parseFloat(n.style.marginTop)-b.top+E+"px",n.style.left=p[t].left-parseFloat(n.style.marginLeft)-b.left+w+"px"});var S=e(a).clone(),x=S.get(0);x.innerHTML="",x.setAttribute("id",""),x.style.height="auto",x.style.width=a.width()+"px",S.append(u),S.insertBefore(a),S.css("opacity",0),x.style.zIndex=-1,x.style.margin="0",x.style.position="absolute",x.style.top=h.top-b.top+"px",x.style.left=h.left-b.left+"px",r.adjustHeight==="dynamic"?a.animate({height:S.height()},r.duration,r.easing):r.adjustHeight==="auto"&&(l=S.height(),parseFloat(f)<parseFloat(l)?a.css("height",l):c=!0),v.each(function(t){var n=[];typeof r.attribute=="function"?(s=r.attribute(e(this)),u.each(function(){if(r.attribute(this)==s)return n=e(this),!1})):n=u.filter("["+r.attribute+"="+e(this).attr(r.attribute)+"]"),n.length?r.useScaling?o.push({element:e(this),animation:{top:n.offset().top-b.top,left:n.offset().left-b.left,opacity:1,scale:"1.0"}}):o.push({element:e(this),animation:{top:n.offset().top-b.top,left:n.offset().left-b.left,opacity:1}}):r.useScaling?o.push({element:e(this),animation:{opacity:"0.0",scale:"0.0"}}):o.push({element:e(this),animation:{opacity:"0.0"}})}),u.each(function(t){var n=[],i=[];typeof r.attribute=="function"?(s=r.attribute(e(this)),v.each(function(){if(r.attribute(this)==s)return n=e(this),!1}),u.each(function(){if(r.attribute(this)==s)return i=e(this),!1})):(n=v.filter("["+r.attribute+"="+e(this).attr(r.attribute)+"]"),i=u.filter("["+r.attribute+"="+e(this).attr(r.attribute)+"]"));var f;if(n.length===0){r.useScaling?f={opacity:"1.0",scale:"1.0"}:f={opacity:"1.0"},d=i.clone();var l=d.get(0);l.style.position="absolute",l.style.margin="0",l.style.top=i.offset().top-b.top+"px",l.style.left=i.offset().left-b.left+"px",d.css("opacity",0),r.useScaling&&d.css("transform","scale(0.0)"),d.appendTo(a),o.push({element:e(d),animation:f})}}),S.remove(),r.enhancement(a);for(n=0;n<o.length;n++)o[n].element.animate(o[n].animation,r.duration,r.easing,g)})}})(jQuery);