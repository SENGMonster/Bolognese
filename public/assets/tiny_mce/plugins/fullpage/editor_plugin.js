(function(){var e=tinymce.each,t=tinymce.html.Node;tinymce.create("tinymce.plugins.FullPagePlugin",{init:function(e,t){var n=this;n.editor=e,e.addCommand("mceFullPageProperties",function(){e.windowManager.open({file:t+"/fullpage.htm",width:430+parseInt(e.getLang("fullpage.delta_width",0)),height:495+parseInt(e.getLang("fullpage.delta_height",0)),inline:1},{plugin_url:t,data:n._htmlToData()})}),e.addButton("fullpage",{title:"fullpage.desc",cmd:"mceFullPageProperties"}),e.onBeforeSetContent.add(n._setContent,n),e.onGetContent.add(n._getContent,n)},getInfo:function(){return{longname:"Fullpage",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/fullpage",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_htmlToData:function(){function u(e,t){var n=e.attr(t);return n||""}var t=this._parseHeader(),n={},r,i,s,o=this.editor;return n.fontface=o.getParam("fullpage_default_fontface",""),n.fontsize=o.getParam("fullpage_default_fontsize",""),i=t.firstChild,i.type==7&&(n.xml_pi=!0,s=/encoding="([^"]+)"/.exec(i.value),s&&(n.docencoding=s[1])),i=t.getAll("#doctype")[0],i&&(n.doctype="<!DOCTYPE"+i.value+">"),i=t.getAll("title")[0],i&&i.firstChild&&(n.metatitle=i.firstChild.value),e(t.getAll("meta"),function(e){var t=e.attr("name"),r=e.attr("http-equiv"),i;t?n["meta"+t.toLowerCase()]=e.attr("content"):r=="Content-Type"&&(i=/charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")),i&&(n.docencoding=i[1]))}),i=t.getAll("html")[0],i&&(n.langcode=u(i,"lang")||u(i,"xml:lang")),i=t.getAll("link")[0],i&&i.attr("rel")=="stylesheet"&&(n.stylesheet=i.attr("href")),i=t.getAll("body")[0],i&&(n.langdir=u(i,"dir"),n.style=u(i,"style"),n.visited_color=u(i,"vlink"),n.link_color=u(i,"link"),n.active_color=u(i,"alink")),n},_dataToHtml:function(n){function l(e,t,n){e.attr(t,n?n:undefined)}function c(e){i.firstChild?i.insert(e,i.firstChild):i.append(e)}var r,i,s,o,u,f=this.editor.dom;r=this._parseHeader(),i=r.getAll("head")[0],i||(o=r.getAll("html")[0],i=new t("head",1),o.firstChild?o.insert(i,o.firstChild,!0):o.append(i)),o=r.firstChild,n.xml_pi?(u='version="1.0"',n.docencoding&&(u+=' encoding="'+n.docencoding+'"'),o.type!=7&&(o=new t("xml",7),r.insert(o,r.firstChild,!0)),o.value=u):o&&o.type==7&&o.remove(),o=r.getAll("#doctype")[0],n.doctype?(o||(o=new t("#doctype",10),n.xml_pi?r.insert(o,r.firstChild):c(o)),o.value=n.doctype.substring(9,n.doctype.length-1)):o&&o.remove(),o=r.getAll("title")[0],n.metatitle&&(o||(o=new t("title",1),o.append(new t("#text",3)).value=n.metatitle,c(o))),n.docencoding&&(o=null,e(r.getAll("meta"),function(e){e.attr("http-equiv")=="Content-Type"&&(o=e)}),o||(o=new t("meta",1),o.attr("http-equiv","Content-Type"),o.shortEnded=!0,c(o)),o.attr("content","text/html; charset="+n.docencoding)),e("keywords,description,author,copyright,robots".split(","),function(e){var i=r.getAll("meta"),s,u,f=n["meta"+e];for(s=0;s<i.length;s++){u=i[s];if(u.attr("name")==e){f?u.attr("content",f):u.remove();return}}f&&(o=new t("meta",1),o.attr("name",e),o.attr("content",f),o.shortEnded=!0,c(o))}),o=r.getAll("link")[0],o&&o.attr("rel")=="stylesheet"?n.stylesheet?o.attr("href",n.stylesheet):o.remove():n.stylesheet&&(o=new t("link",1),o.attr({rel:"stylesheet",text:"text/css",href:n.stylesheet}),o.shortEnded=!0,c(o)),o=r.getAll("body")[0],o&&(l(o,"dir",n.langdir),l(o,"style",n.style),l(o,"vlink",n.visited_color),l(o,"link",n.link_color),l(o,"alink",n.active_color),f.setAttribs(this.editor.getBody(),{style:n.style,dir:n.dir,vLink:n.visited_color,link:n.link_color,aLink:n.active_color})),o=r.getAll("html")[0],o&&(l(o,"lang",n.langcode),l(o,"xml:lang",n.langcode)),s=(new tinymce.html.Serializer({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"})).serialize(r),this.head=s.substring(0,s.indexOf("</body>"))},_parseHeader:function(){return(new tinymce.html.DomParser({validate:!1,root_name:"#document"})).parse(this.head)},_setContent:function(t,n){function c(e){return e.replace(/<\/?[A-Z]+/g,function(e){return e.toLowerCase()})}var r=this,i,s,o=n.content,u,a="",f=r.editor.dom,l;if(n.format=="raw"&&r.head)return;if(n.source_view&&t.getParam("fullpage_hide_in_source_view"))return;o=o.replace(/<(\/?)BODY/gi,"<$1body"),i=o.indexOf("<body"),i!=-1?(i=o.indexOf(">",i),r.head=c(o.substring(0,i+1)),s=o.indexOf("</body",i),s==-1&&(s=o.length),n.content=o.substring(i+1,s),r.foot=c(o.substring(s))):(r.head=this._getDefaultHeader(),r.foot="\n</body>\n</html>"),u=r._parseHeader(),e(u.getAll("style"),function(e){e.firstChild&&(a+=e.firstChild.value)}),l=u.getAll("body")[0],l&&f.setAttribs(r.editor.getBody(),{style:l.attr("style")||"",dir:l.attr("dir")||"",vLink:l.attr("vlink")||"",link:l.attr("link")||"",aLink:l.attr("alink")||""}),f.remove("fullpage_styles"),a&&(f.add(r.editor.getDoc().getElementsByTagName("head")[0],"style",{id:"fullpage_styles"},a),l=f.get("fullpage_styles"),l.styleSheet&&(l.styleSheet.cssText=a))},_getDefaultHeader:function(){var e="",t=this.editor,n,r="";t.getParam("fullpage_default_xml_pi")&&(e+='<?xml version="1.0" encoding="'+t.getParam("fullpage_default_encoding","ISO-8859-1")+'" ?>\n'),e+=t.getParam("fullpage_default_doctype",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'),e+="\n<html>\n<head>\n";if(n=t.getParam("fullpage_default_title"))e+="<title>"+n+"</title>\n";if(n=t.getParam("fullpage_default_encoding"))e+='<meta http-equiv="Content-Type" content="text/html; charset='+n+'" />\n';if(n=t.getParam("fullpage_default_font_family"))r+="font-family: "+n+";";if(n=t.getParam("fullpage_default_font_size"))r+="font-size: "+n+";";if(n=t.getParam("fullpage_default_text_color"))r+="color: "+n+";";return e+="</head>\n<body"+(r?' style="'+r+'"':"")+">\n",e},_getContent:function(e,t){var n=this;if(!t.source_view||!e.getParam("fullpage_hide_in_source_view"))t.content=tinymce.trim(n.head)+"\n"+tinymce.trim(t.content)+"\n"+tinymce.trim(n.foot)}}),tinymce.PluginManager.add("fullpage",tinymce.plugins.FullPagePlugin)})();