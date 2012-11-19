/**
 * editor_template_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(e){function a(e,t){function f(e){return e.replace(/%(\w+)/g,"")}var n,r,s=e.dom,o="",u,a;return previewStyles=e.settings.preview_styles,previewStyles===!1?"":(previewStyles||(previewStyles="font-family font-size font-weight text-decoration text-transform color background-color"),n=t.block||t.inline||"span",r=s.create(n),i(t.styles,function(e,t){e=f(e),e&&s.setStyle(r,t,e)}),i(t.attributes,function(e,t){e=f(e),e&&s.setAttrib(r,t,e)}),i(t.classes,function(e){e=f(e),s.hasClass(r,e)||s.addClass(r,e)}),s.setStyles(r,{position:"absolute",left:-65535}),e.getBody().appendChild(r),u=s.getStyle(e.getBody(),"fontSize",!0),u=/px$/.test(u)?parseInt(u,10):0,i(previewStyles.split(" "),function(t){var n=s.getStyle(r,t,!0);if(t=="background-color"&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)){n=s.getStyle(e.getBody(),t,!0);if(s.toHex(n).toLowerCase()=="#ffffff")return}if(t=="font-size"&&/em|%$/.test(n)){if(u===0)return;n=parseFloat(n,10)/(/%$/.test(n)?100:1),n=n*u+"px"}o+=t+":"+n+";"}),s.remove(r),o)}var t=e.DOM,n=e.dom.Event,r=e.extend,i=e.each,s=e.util.Cookie,o,u=e.explode;e.ThemeManager.requireLangPack("advanced"),e.create("tinymce.themes.AdvancedTheme",{sizes:[8,10,12,14,18,24,36],controls:{bold:["bold_desc","Bold"],italic:["italic_desc","Italic"],underline:["underline_desc","Underline"],strikethrough:["striketrough_desc","Strikethrough"],justifyleft:["justifyleft_desc","JustifyLeft"],justifycenter:["justifycenter_desc","JustifyCenter"],justifyright:["justifyright_desc","JustifyRight"],justifyfull:["justifyfull_desc","JustifyFull"],bullist:["bullist_desc","InsertUnorderedList"],numlist:["numlist_desc","InsertOrderedList"],outdent:["outdent_desc","Outdent"],indent:["indent_desc","Indent"],cut:["cut_desc","Cut"],copy:["copy_desc","Copy"],paste:["paste_desc","Paste"],undo:["undo_desc","Undo"],redo:["redo_desc","Redo"],link:["link_desc","mceLink"],unlink:["unlink_desc","unlink"],image:["image_desc","mceImage"],cleanup:["cleanup_desc","mceCleanup"],help:["help_desc","mceHelp"],code:["code_desc","mceCodeEditor"],hr:["hr_desc","InsertHorizontalRule"],removeformat:["removeformat_desc","RemoveFormat"],sub:["sub_desc","subscript"],sup:["sup_desc","superscript"],forecolor:["forecolor_desc","ForeColor"],forecolorpicker:["forecolor_desc","mceForeColor"],backcolor:["backcolor_desc","HiliteColor"],backcolorpicker:["backcolor_desc","mceBackColor"],charmap:["charmap_desc","mceCharMap"],visualaid:["visualaid_desc","mceToggleVisualAid"],anchor:["anchor_desc","mceInsertAnchor"],newdocument:["newdocument_desc","mceNewDocument"],blockquote:["blockquote_desc","mceBlockQuote"]},stateControls:["bold","italic","underline","strikethrough","bullist","numlist","justifyleft","justifycenter","justifyright","justifyfull","sub","sup","blockquote"],init:function(n,s){var o=this,u,a,f;o.editor=n,o.url=s,o.onResolveName=new e.util.Dispatcher(this),u=n.settings,n.forcedHighContrastMode=n.settings.detect_highcontrast&&o._isHighContrast(),n.settings.skin=n.forcedHighContrastMode?"highcontrast":n.settings.skin,u.theme_advanced_buttons1||(u=r({theme_advanced_buttons1:"bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect",theme_advanced_buttons2:"bullist,numlist,|,outdent,indent,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code",theme_advanced_buttons3:"hr,removeformat,visualaid,|,sub,sup,|,charmap"},u)),o.settings=u=r({theme_advanced_path:!0,theme_advanced_toolbar_location:"top",theme_advanced_blockformats:"p,address,pre,h1,h2,h3,h4,h5,h6",theme_advanced_toolbar_align:"left",theme_advanced_statusbar_location:"bottom",theme_advanced_fonts:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",theme_advanced_more_colors:1,theme_advanced_row_height:23,theme_advanced_resize_horizontal:1,theme_advanced_resizing_use_cookie:1,theme_advanced_font_sizes:"1,2,3,4,5,6,7",theme_advanced_font_selector:"span",theme_advanced_show_current_color:0,readonly:n.settings.readonly},u),u.font_size_style_values||(u.font_size_style_values="8pt,10pt,12pt,14pt,18pt,24pt,36pt"),e.is(u.theme_advanced_font_sizes,"string")&&(u.font_size_style_values=e.explode(u.font_size_style_values),u.font_size_classes=e.explode(u.font_size_classes||""),f={},n.settings.theme_advanced_font_sizes=u.theme_advanced_font_sizes,i(n.getParam("theme_advanced_font_sizes","","hash"),function(e,t){var n;t==e&&e>=1&&e<=7&&(t=e+" ("+o.sizes[e-1]+"pt)",n=u.font_size_classes[e-1],e=u.font_size_style_values[e-1]||o.sizes[e-1]+"pt"),/^\s*\./.test(e)&&(n=e.replace(/\./g,"")),f[t]=n?{"class":n}:{fontSize:e}}),u.theme_advanced_font_sizes=f),(a=u.theme_advanced_path_location)&&a!="none"&&(u.theme_advanced_statusbar_location=u.theme_advanced_path_location),u.theme_advanced_statusbar_location=="none"&&(u.theme_advanced_statusbar_location=0),n.settings.content_css!==!1&&n.contentCSS.push(n.baseURI.toAbsolute(s+"/skins/"+n.settings.skin+"/content.css")),n.onInit.add(function(){n.settings.readonly||(n.onNodeChange.add(o._nodeChanged,o),n.onKeyUp.add(o._updateUndoStatus,o),n.onMouseUp.add(o._updateUndoStatus,o),n.dom.bind(n.dom.getRoot(),"dragend",function(){o._updateUndoStatus(n)}))}),n.onSetProgressState.add(function(e,n,r){var i,s=e.id,u;n?o.progressTimer=setTimeout(function(){i=e.getContainer(),i=i.insertBefore(t.create("DIV",{style:"position:relative"}),i.firstChild),u=t.get(e.id+"_tbl"),t.add(i,"div",{id:s+"_blocker","class":"mceBlocker",style:{width:u.clientWidth+2,height:u.clientHeight+2}}),t.add(i,"div",{id:s+"_progress","class":"mceProgress",style:{left:u.clientWidth/2,top:u.clientHeight/2}})},r||0):(t.remove(s+"_blocker"),t.remove(s+"_progress"),clearTimeout(o.progressTimer))}),t.loadCSS(u.editor_css?n.documentBaseURI.toAbsolute(u.editor_css):s+"/skins/"+n.settings.skin+"/ui.css"),u.skin_variant&&t.loadCSS(s+"/skins/"+n.settings.skin+"/ui_"+u.skin_variant+".css")},_isHighContrast:function(){var e,n=t.add(t.getRoot(),"div",{style:"background-color: rgb(171,239,86);"});return e=(t.getStyle(n,"background-color",!0)+"").toLowerCase().replace(/ /g,""),t.remove(n),e!="rgb(171,239,86)"&&e!="#abef56"},createControl:function(e,t){var n,r;if(r=t.createControl(e))return r;switch(e){case"styleselect":return this._createStyleSelect();case"formatselect":return this._createBlockFormats();case"fontselect":return this._createFontSelect();case"fontsizeselect":return this._createFontSizeSelect();case"forecolor":return this._createForeColorMenu();case"backcolor":return this._createBackColorMenu()}if(n=this.controls[e])return t.createButton(e,{title:"advanced."+n[0],cmd:n[1],ui:n[2],value:n[3]})},execCommand:function(e,t,n){var r=this["_"+e];return r?(r.call(this,t,n),!0):!1},_importClasses:function(e){var t=this.editor,n=t.controlManager.get("styleselect");n.getLength()==0&&i(t.dom.getClasses(),function(e,r){var i="style_"+r,s;s={inline:"span",attributes:{"class":e["class"]},selector:"*"},t.formatter.register(i,s),n.add(e["class"],i,{style:function(){return a(t,s)}})})},_createStyleSelect:function(t){var r=this,s=r.editor,o=s.controlManager,u;return u=o.createListBox("styleselect",{title:"advanced.style_select",onselect:function(t){var n,r=[],o;return i(u.items,function(e){r.push(e.value)}),s.focus(),s.undoManager.add(),n=s.formatter.matchAll(r),e.each(n,function(e){if(!t||e==t)e&&s.formatter.remove(e),o=!0}),o||s.formatter.apply(t),s.undoManager.add(),s.nodeChanged(),!1}}),s.onPreInit.add(function(){var e=0,t=s.getParam("style_formats");t?i(t,function(t){var n,r=0;i(t,function(){r++}),r>1?(n=t.name=t.name||"style_"+e++,s.formatter.register(n,t),u.add(t.title,n,{style:function(){return a(s,t)}})):u.add(t.title)}):i(s.getParam("theme_advanced_styles","","hash"),function(t,n){var i,o;t&&(i="style_"+e++,o={inline:"span",classes:t,selector:"*"},s.formatter.register(i,o),u.add(r.editor.translate(n),i,{style:function(){return a(s,o)}}))})}),u.getLength()==0&&u.onPostRender.add(function(e,t){u.NativeListBox?n.add(t.id,"focus",r._importClasses,r):(n.add(t.id+"_text","focus",r._importClasses,r),n.add(t.id+"_text","mousedown",r._importClasses,r),n.add(t.id+"_open","focus",r._importClasses,r),n.add(t.id+"_open","mousedown",r._importClasses,r))}),u},_createFontSelect:function(){var e,t=this,n=t.editor;return e=n.controlManager.createListBox("fontselect",{title:"advanced.fontdefault",onselect:function(t){var r=e.items[e.selectedIndex];if(!t&&r){n.execCommand("FontName",!1,r.value);return}return n.execCommand("FontName",!1,t),e.select(function(e){return t==e}),r&&r.value==t&&e.select(null),!1}}),e&&i(n.getParam("theme_advanced_fonts",t.settings.theme_advanced_fonts,"hash"),function(t,r){e.add(n.translate(r),t,{style:t.indexOf("dings")==-1?"font-family:"+t:""})}),e},_createFontSizeSelect:function(){var e=this,t=e.editor,n,r=0,s=[];return n=t.controlManager.createListBox("fontsizeselect",{title:"advanced.font_size",onselect:function(e){var r=n.items[n.selectedIndex];if(!e&&r){r=r.value,r["class"]?(t.formatter.toggle("fontsize_class",{value:r["class"]}),t.undoManager.add(),t.nodeChanged()):t.execCommand("FontSize",!1,r.fontSize);return}return e["class"]?(t.focus(),t.undoManager.add(),t.formatter.toggle("fontsize_class",{value:e["class"]}),t.undoManager.add(),t.nodeChanged()):t.execCommand("FontSize",!1,e.fontSize),n.select(function(t){return e==t}),r&&(r.value.fontSize==e.fontSize||r.value["class"]&&r.value["class"]==e["class"])&&n.select(null),!1}}),n&&i(e.settings.theme_advanced_font_sizes,function(t,i){var s=t.fontSize;s>=1&&s<=7&&(s=e.sizes[parseInt(s)-1]+"pt"),n.add(i,t,{style:"font-size:"+s,"class":"mceFontSize"+r++ +(" "+(t["class"]||""))})}),n},_createBlockFormats:function(){var e,t={p:"advanced.paragraph",address:"advanced.address",pre:"advanced.pre",h1:"advanced.h1",h2:"advanced.h2",h3:"advanced.h3",h4:"advanced.h4",h5:"advanced.h5",h6:"advanced.h6",div:"advanced.div",blockquote:"advanced.blockquote",code:"advanced.code",dt:"advanced.dt",dd:"advanced.dd",samp:"advanced.samp"},n=this;return e=n.editor.controlManager.createListBox("formatselect",{title:"advanced.block",onselect:function(e){return n.editor.execCommand("FormatBlock",!1,e),!1}}),e&&i(n.editor.getParam("theme_advanced_blockformats",n.settings.theme_advanced_blockformats,"hash"),function(r,i){e.add(n.editor.translate(i!=r?i:t[r]),r,{"class":"mce_formatPreview mce_"+r,style:function(){return a(n.editor,{block:r})}})}),e},_createForeColorMenu:function(){var e,t=this,n=t.settings,r={},i;n.theme_advanced_more_colors&&(r.more_colors_func=function(){t._mceColorPicker(0,{color:e.value,func:function(t){e.setColor(t)}})});if(i=n.theme_advanced_text_colors)r.colors=i;return n.theme_advanced_default_foreground_color&&(r.default_color=n.theme_advanced_default_foreground_color),r.title="advanced.forecolor_desc",r.cmd="ForeColor",r.scope=this,e=t.editor.controlManager.createColorSplitButton("forecolor",r),e},_createBackColorMenu:function(){var e,t=this,n=t.settings,r={},i;n.theme_advanced_more_colors&&(r.more_colors_func=function(){t._mceColorPicker(0,{color:e.value,func:function(t){e.setColor(t)}})});if(i=n.theme_advanced_background_colors)r.colors=i;return n.theme_advanced_default_background_color&&(r.default_color=n.theme_advanced_default_background_color),r.title="advanced.backcolor_desc",r.cmd="HiliteColor",r.scope=this,e=t.editor.controlManager.createColorSplitButton("backcolor",r),e},renderUI:function(r){var s,o,u,a=this,f=a.editor,l=a.settings,c,h,p;f.settings&&(f.settings.aria_label=l.aria_label+f.getLang("advanced.help_shortcut")),s=h=t.create("span",{role:"application","aria-labelledby":f.id+"_voice",id:f.id+"_parent","class":"mceEditor "+f.settings.skin+"Skin"+(l.skin_variant?" "+f.settings.skin+"Skin"+a._ufirst(l.skin_variant):"")+(f.settings.directionality=="rtl"?" mceRtl":"")}),t.add(s,"span",{"class":"mceVoiceLabel",style:"display:none;",id:f.id+"_voice"},l.aria_label),t.boxModel||(s=t.add(s,"div",{"class":"mceOldBoxModel"})),s=c=t.add(s,"table",{role:"presentation",id:f.id+"_tbl","class":"mceLayout",cellSpacing:0,cellPadding:0}),s=u=t.add(s,"tbody");switch((l.theme_advanced_layout_manager||"").toLowerCase()){case"rowlayout":o=a._rowLayout(l,u,r);break;case"customlayout":o=f.execCallback("theme_advanced_custom_layout",l,u,r,h);break;default:o=a._simpleLayout(l,u,r,h)}return s=r.targetNode,p=c.rows,t.addClass(p[0],"mceFirst"),t.addClass(p[p.length-1],"mceLast"),i(t.select("tr",u),function(e){t.addClass(e.firstChild,"mceFirst"),t.addClass(e.childNodes[e.childNodes.length-1],"mceLast")}),t.get(l.theme_advanced_toolbar_container)?t.get(l.theme_advanced_toolbar_container).appendChild(h):t.insertAfter(h,s),n.add(f.id+"_path_row","click",function(e){e=e.target;if(e.nodeName=="A")return a._sel(e.className.replace(/^.*mcePath_([0-9]+).*$/,"$1")),!1}),f.getParam("accessibility_focus")||n.add(t.add(h,"a",{href:"#"},"<!-- IE -->"),"focus",function(){tinyMCE.get(f.id).focus()}),l.theme_advanced_toolbar_location=="external"&&(r.deltaHeight=0),a.deltaHeight=r.deltaHeight,r.targetNode=null,f.onKeyDown.add(function(r,i){var s=121,o=122;if(i.altKey){if(i.keyCode===s)return e.isWebKit&&window.focus(),a.toolbarGroup.focus(),n.cancel(i);if(i.keyCode===o)return t.get(r.id+"_path_row").focus(),n.cancel(i)}}),f.addShortcut("alt+0","","mceShortcuts",a),{iframeContainer:o,editorContainer:f.id+"_parent",sizeContainer:c,deltaHeight:r.deltaHeight}},getInfo:function(){return{longname:"Advanced theme",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",version:e.majorVersion+"."+e.minorVersion}},resizeBy:function(e,n){var r=t.get(this.editor.id+"_ifr");this.resizeTo(r.clientWidth+e,r.clientHeight+n)},resizeTo:function(e,n,r){var i=this.editor,o=this.settings,u=t.get(i.id+"_tbl"),a=t.get(i.id+"_ifr");e=Math.max(o.theme_advanced_resizing_min_width||100,e),n=Math.max(o.theme_advanced_resizing_min_height||100,n),e=Math.min(o.theme_advanced_resizing_max_width||65535,e),n=Math.min(o.theme_advanced_resizing_max_height||65535,n),t.setStyle(u,"height",""),t.setStyle(a,"height",n),o.theme_advanced_resize_horizontal&&(t.setStyle(u,"width",""),t.setStyle(a,"width",e),e<u.clientWidth&&(e=u.clientWidth,t.setStyle(a,"width",u.clientWidth))),r&&o.theme_advanced_resizing_use_cookie&&s.setHash("TinyMCE_"+i.id+"_size",{cw:e,ch:n})},destroy:function(){var e=this.editor.id;n.clear(e+"_resize"),n.clear(e+"_path_row"),n.clear(e+"_external_close")},_simpleLayout:function(e,r,i,s){var u=this,a=u.editor,f=e.theme_advanced_toolbar_location,l=e.theme_advanced_statusbar_location,c,h,p,d;return e.readonly?(c=t.add(r,"tr"),c=h=t.add(c,"td",{"class":"mceIframeContainer"}),h):(f=="top"&&u._addToolbars(r,i),f=="external"&&(c=d=t.create("div",{style:"position:relative"}),c=t.add(c,"div",{id:a.id+"_external","class":"mceExternalToolbar"}),t.add(c,"a",{id:a.id+"_external_close",href:"javascript:;","class":"mceExternalClose"}),c=t.add(c,"table",{id:a.id+"_tblext",cellSpacing:0,cellPadding:0}),p=t.add(c,"tbody"),s.firstChild.className=="mceOldBoxModel"?s.firstChild.appendChild(d):s.insertBefore(d,s.firstChild),u._addToolbars(p,i),a.onMouseUp.add(function(){var e=t.get(a.id+"_external");t.show(e),t.hide(o);var r=n.add(a.id+"_external_close","click",function(){return t.hide(a.id+"_external"),n.remove(a.id+"_external_close","click",r),!1});t.show(e),t.setStyle(e,"top",0-t.getRect(a.id+"_tblext").h-1),t.hide(e),t.show(e),e.style.filter="",o=a.id+"_external",e=null})),l=="top"&&u._addStatusBar(r,i),e.theme_advanced_toolbar_container||(c=t.add(r,"tr"),c=h=t.add(c,"td",{"class":"mceIframeContainer"})),f=="bottom"&&u._addToolbars(r,i),l=="bottom"&&u._addStatusBar(r,i),h)},_rowLayout:function(e,n,r){var s=this,o=s.editor,a,f,l=o.controlManager,c,h,p,d;return a=e.theme_advanced_containers_default_class||"",f=e.theme_advanced_containers_default_align||"center",i(u(e.theme_advanced_containers||""),function(i,o){var u=e["theme_advanced_container_"+i]||"";switch(i.toLowerCase()){case"mceeditor":c=t.add(n,"tr"),c=h=t.add(c,"td",{"class":"mceIframeContainer"});break;case"mceelementpath":s._addStatusBar(n,r);break;default:d=(e["theme_advanced_container_"+i+"_align"]||f).toLowerCase(),d="mce"+s._ufirst(d),c=t.add(t.add(n,"tr"),"td",{"class":"mceToolbar "+(e["theme_advanced_container_"+i+"_class"]||a)+" "+d||f}),p=l.createToolbar("toolbar"+o),s._addControls(u,p),t.setHTML(c,p.renderHTML()),r.deltaHeight-=e.theme_advanced_row_height}}),h},_addControls:function(e,t){var n=this,r=n.settings,s,o=n.editor.controlManager;r.theme_advanced_disable&&!n._disabled?(s={},i(u(r.theme_advanced_disable),function(e){s[e]=1}),n._disabled=s):s=n._disabled,i(u(e),function(e){var r;if(s&&s[e])return;if(e=="tablecontrols"){i(["table","|","row_props","cell_props","|","row_before","row_after","delete_row","|","col_before","col_after","delete_col","|","split_cells","merge_cells"],function(e){e=n.createControl(e,o),e&&t.add(e)});return}r=n.createControl(e,o),r&&t.add(r)})},_addToolbars:function(e,n){var r=this,i,s,o=r.editor,u=r.settings,a,f=o.controlManager,l,c,h=[],p,d,v=!1;d=f.createToolbarGroup("toolbargroup",{name:o.getLang("advanced.toolbar"),tab_focus_toolbar:o.getParam("theme_advanced_tab_focus_toolbar")}),r.toolbarGroup=d,p=u.theme_advanced_toolbar_align.toLowerCase(),p="mce"+r._ufirst(p),c=t.add(t.add(e,"tr",{role:"toolbar"}),"td",{"class":"mceToolbar "+p,role:"toolbar"});for(i=1;a=u["theme_advanced_buttons"+i];i++)v=!0,s=f.createToolbar("toolbar"+i,{"class":"mceToolbarRow"+i}),u["theme_advanced_buttons"+i+"_add"]&&(a+=","+u["theme_advanced_buttons"+i+"_add"]),u["theme_advanced_buttons"+i+"_add_before"]&&(a=u["theme_advanced_buttons"+i+"_add_before"]+","+a),r._addControls(a,s),d.add(s),n.deltaHeight-=u.theme_advanced_row_height;v||(n.deltaHeight-=u.theme_advanced_row_height),h.push(d.renderHTML()),h.push(t.createHTML("a",{href:"#",accesskey:"z",title:o.getLang("advanced.toolbar_focus"),onfocus:"tinyMCE.getInstanceById('"+o.id+"').focus();"},"<!-- IE -->")),t.setHTML(c,h.join(""))},_addStatusBar:function(e,r){var i,o=this,u=o.editor,a=o.settings,f,l,c,h;i=t.add(e,"tr"),i=h=t.add(i,"td",{"class":"mceStatusbar"}),i=t.add(i,"div",{id:u.id+"_path_row",role:"group","aria-labelledby":u.id+"_path_voice"}),a.theme_advanced_path?(t.add(i,"span",{id:u.id+"_path_voice"},u.translate("advanced.path")),t.add(i,"span",{},": ")):t.add(i,"span",{},"&#160;"),a.theme_advanced_resizing&&(t.add(h,"a",{id:u.id+"_resize",href:"javascript:;",onclick:"return false;","class":"mceResize",tabIndex:"-1"}),a.theme_advanced_resizing_use_cookie&&u.onPostRender.add(function(){var e=s.getHash("TinyMCE_"+u.id+"_size"),n=t.get(u.id+"_tbl");if(!e)return;o.resizeTo(e.cw,e.ch)}),u.onPostRender.add(function(){n.add(u.id+"_resize","click",function(e){e.preventDefault()}),n.add(u.id+"_resize","mousedown",function(e){function m(e){e.preventDefault(),p=c+(e.screenX-f),d=h+(e.screenY-l),o.resizeTo(p,d)}function g(e){n.remove(t.doc,"mousemove",r),n.remove(u.getDoc(),"mousemove",i),n.remove(t.doc,"mouseup",s),n.remove(u.getDoc(),"mouseup",a),p=c+(e.screenX-f),d=h+(e.screenY-l),o.resizeTo(p,d,!0),u.nodeChanged()}var r,i,s,a,f,l,c,h,p,d,v;e.preventDefault(),f=e.screenX,l=e.screenY,v=t.get(o.editor.id+"_ifr"),c=p=v.clientWidth,h=d=v.clientHeight,r=n.add(t.doc,"mousemove",m),i=n.add(u.getDoc(),"mousemove",m),s=n.add(t.doc,"mouseup",g),a=n.add(u.getDoc(),"mouseup",g)})})),r.deltaHeight-=21,i=e=null},_updateUndoStatus:function(e){var t=e.controlManager,n=e.undoManager;t.setDisabled("undo",!n.hasUndo()&&!n.typing),t.setDisabled("redo",!n.hasRedo())},_nodeChanged:function(n,r,s,o,u){function E(e){var t,n=u.parents,r=e;typeof e=="string"&&(r=function(t){return t.nodeName==e});for(t=0;t<n.length;t++)if(r(n[t]))return n[t]}var a=this,f,l=0,c,h,p=a.settings,d,v,m,g,y,b,w;e.each(a.stateControls,function(e){r.setActive(e,n.queryCommandState(a.controls[e][1]))}),r.setActive("visualaid",n.hasVisual),a._updateUndoStatus(n),r.setDisabled("outdent",!n.queryCommandState("Outdent")),f=E("A");if(h=r.get("link"))h.setDisabled(!f&&o||f&&!f.href),h.setActive(!!f&&!f.name&&!f.id);if(h=r.get("unlink"))h.setDisabled(!f&&o),h.setActive(!!f&&!f.name&&!f.id);(h=r.get("anchor"))&&h.setActive(!o&&!!f&&(f.name||f.id&&!f.href)),f=E("IMG"),(h=r.get("image"))&&h.setActive(!o&&!!f&&s.className.indexOf("mceItem")==-1);if(h=r.get("styleselect"))a._importClasses(),b=[],i(h.items,function(e){b.push(e.value)}),w=n.formatter.matchAll(b),h.select(w[0]),e.each(w,function(e,t){t>0&&h.mark(e)});if(h=r.get("formatselect"))f=E(n.dom.isBlock),f&&h.select(f.nodeName.toLowerCase());E(function(e){return e.nodeName==="SPAN"&&!d&&e.className&&(d=e.className),n.dom.is(e,p.theme_advanced_font_selector)&&(!v&&e.style.fontSize&&(v=e.style.fontSize),!m&&e.style.fontFamily&&(m=e.style.fontFamily.replace(/[\"\']+/g,"").replace(/^([^,]+).*/,"$1").toLowerCase()),!g&&e.style.color&&(g=e.style.color),!y&&e.style.backgroundColor&&(y=e.style.backgroundColor)),!1}),(h=r.get("fontselect"))&&h.select(function(e){return e.replace(/^([^,]+).*/,"$1").toLowerCase()==m});if(h=r.get("fontsizeselect"))p.theme_advanced_runtime_fontsize&&!v&&!d&&(v=n.dom.getStyle(s,"fontSize",!0)),h.select(function(e){if(e.fontSize&&e.fontSize===v)return!0;if(e["class"]&&e["class"]===d)return!0});if(p.theme_advanced_show_current_color){function S(e,t){if(h=r.get(e))t||(t=h.settings.default_color),t!==h.value&&h.displayColor(t)}S("forecolor",g),S("backcolor",y)}if(p.theme_advanced_show_current_color){function S(e,t){if(h=r.get(e))t||(t=h.settings.default_color),t!==h.value&&h.displayColor(t)}S("forecolor",g),S("backcolor",y)}p.theme_advanced_path&&p.theme_advanced_statusbar_location&&(f=t.get(n.id+"_path")||t.add(n.id+"_path_row","span",{id:n.id+"_path"}),a.statusKeyboardNavigation&&(a.statusKeyboardNavigation.destroy(),a.statusKeyboardNavigation=null),t.setHTML(f,""),E(function(r){var i=r.nodeName.toLowerCase(),s,o,u="";if(r.nodeType!=1||i==="br"||r.getAttribute("data-mce-bogus")||t.hasClass(r,"mceItemHidden")||t.hasClass(r,"mceItemRemoved"))return;e.isIE&&r.scopeName!=="HTML"&&r.scopeName&&(i=r.scopeName+":"+i),i=i.replace(/mce\:/g,"");switch(i){case"b":i="strong";break;case"i":i="em";break;case"img":if(c=t.getAttrib(r,"src"))u+="src: "+c+" ";break;case"a":if(c=t.getAttrib(r,"name"))u+="name: "+c+" ",i+="#"+c;if(c=t.getAttrib(r,"href"))u+="href: "+c+" ";break;case"font":if(c=t.getAttrib(r,"face"))u+="font: "+c+" ";if(c=t.getAttrib(r,"size"))u+="size: "+c+" ";if(c=t.getAttrib(r,"color"))u+="color: "+c+" ";break;case"span":if(c=t.getAttrib(r,"style"))u+="style: "+c+" "}if(c=t.getAttrib(r,"id"))u+="id: "+c+" ";if(c=r.className){c=c.replace(/\b\s*(webkit|mce|Apple-)\w+\s*\b/g,"");if(c){u+="class: "+c+" ";if(n.dom.isBlock(r)||i=="img"||i=="span")i+="."+c}}i=i.replace(/(html:)/g,""),i={name:i,node:r,title:u},a.onResolveName.dispatch(a,i),u=i.title,i=i.name,o=t.create("a",{href:"javascript:;",role:"button",onmousedown:"return false;",title:u,"class":"mcePath_"+l++},i),f.hasChildNodes()?(f.insertBefore(t.create("span",{"aria-hidden":"true"}," » "),f.firstChild),f.insertBefore(o,f.firstChild)):f.appendChild(o)},n.getBody()),t.select("a",f).length>0&&(a.statusKeyboardNavigation=new e.ui.KeyboardNavigation({root:n.id+"_path_row",items:t.select("a",f),excludeFromTabOrder:!0,onCancel:function(){n.focus()}},t)))},_sel:function(e){this.editor.execCommand("mceSelectNodeDepth",!1,e)},_mceInsertAnchor:function(e,t){var n=this.editor;n.windowManager.open({url:this.url+"/anchor.htm",width:320+parseInt(n.getLang("advanced.anchor_delta_width",0)),height:90+parseInt(n.getLang("advanced.anchor_delta_height",0)),inline:!0},{theme_url:this.url})},_mceCharMap:function(){var e=this.editor;e.windowManager.open({url:this.url+"/charmap.htm",width:550+parseInt(e.getLang("advanced.charmap_delta_width",0)),height:265+parseInt(e.getLang("advanced.charmap_delta_height",0)),inline:!0},{theme_url:this.url})},_mceHelp:function(){var e=this.editor;e.windowManager.open({url:this.url+"/about.htm",width:480,height:380,inline:!0},{theme_url:this.url})},_mceShortcuts:function(){var e=this.editor;e.windowManager.open({url:this.url+"/shortcuts.htm",width:480,height:380,inline:!0},{theme_url:this.url})},_mceColorPicker:function(e,t){var n=this.editor;t=t||{},n.windowManager.open({url:this.url+"/color_picker.htm",width:375+parseInt(n.getLang("advanced.colorpicker_delta_width",0)),height:250+parseInt(n.getLang("advanced.colorpicker_delta_height",0)),close_previous:!1,inline:!0},{input_color:t.color,func:t.func,theme_url:this.url})},_mceCodeEditor:function(e,t){var n=this.editor;n.windowManager.open({url:this.url+"/source_editor.htm",width:parseInt(n.getParam("theme_advanced_source_editor_width",720)),height:parseInt(n.getParam("theme_advanced_source_editor_height",580)),inline:!0,resizable:!0,maximizable:!0},{theme_url:this.url})},_mceImage:function(e,t){var n=this.editor;if(n.dom.getAttrib(n.selection.getNode(),"class","").indexOf("mceItem")!=-1)return;n.windowManager.open({url:this.url+"/image.htm",width:355+parseInt(n.getLang("advanced.image_delta_width",0)),height:275+parseInt(n.getLang("advanced.image_delta_height",0)),inline:!0},{theme_url:this.url})},_mceLink:function(e,t){var n=this.editor;n.windowManager.open({url:this.url+"/link.htm",width:310+parseInt(n.getLang("advanced.link_delta_width",0)),height:200+parseInt(n.getLang("advanced.link_delta_height",0)),inline:!0},{theme_url:this.url})},_mceNewDocument:function(){var e=this.editor;e.windowManager.confirm("advanced.newdocument",function(t){t&&e.execCommand("mceSetContent",!1,"")})},_mceForeColor:function(){var e=this;this._mceColorPicker(0,{color:e.fgColor,func:function(t){e.fgColor=t,e.editor.execCommand("ForeColor",!1,t)}})},_mceBackColor:function(){var e=this;this._mceColorPicker(0,{color:e.bgColor,func:function(t){e.bgColor=t,e.editor.execCommand("HiliteColor",!1,t)}})},_ufirst:function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}}),e.ThemeManager.add("advanced",e.themes.AdvancedTheme)})(tinymce);