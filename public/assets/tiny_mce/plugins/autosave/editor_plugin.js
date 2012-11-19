(function(e){var t="autosave",n="restoredraft",r=!0,i,s,o=e.util.Dispatcher;e.create("tinymce.plugins.AutoSave",{init:function(u,l){function v(e){var t={s:1e3,m:6e4};return e=/^(\d+)([ms]?)$/.exec(""+e),(e[2]?t[e[2]]:1)*parseInt(e)}var h=this,p=u.settings;h.editor=u,e.each({ask_before_unload:r,interval:"30s",retention:"20m",minlength:50},function(e,n){n=t+"_"+n,p[n]===i&&(p[n]=e)}),p.autosave_interval=v(p.autosave_interval),p.autosave_retention=v(p.autosave_retention),u.addButton(n,{title:t+".restore_content",onclick:function(){u.getContent({draft:!0}).replace(/\s|&nbsp;|<\/?p[^>]*>|<br[^>]*>/gi,"").length>0?u.windowManager.confirm(t+".warning_message",function(e){e&&h.restoreDraft()}):h.restoreDraft()}}),u.onNodeChange.add(function(){var e=u.controlManager;e.get(n)&&e.setDisabled(n,!h.hasDraft())}),u.onInit.add(function(){u.controlManager.get(n)&&(h.setupStorage(u),setInterval(function(){u.removed||(h.storeDraft(),u.nodeChanged())},p.autosave_interval))}),h.onStoreDraft=new o(h),h.onRestoreDraft=new o(h),h.onRemoveDraft=new o(h),s||(window.onbeforeunload=e.plugins.AutoSave._beforeUnloadHandler,s=r)},getInfo:function(){return{longname:"Auto save",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autosave",version:e.majorVersion+"."+e.minorVersion}},getExpDate:function(){return(new Date((new Date).getTime()+this.editor.settings.autosave_retention)).toUTCString()},setupStorage:function(n){var i=this,s=t+"_test",o="OK";i.key=t+n.id,e.each([function(){if(localStorage){localStorage.setItem(s,o);if(localStorage.getItem(s)===o)return localStorage.removeItem(s),localStorage}},function(){if(sessionStorage){sessionStorage.setItem(s,o);if(sessionStorage.getItem(s)===o)return sessionStorage.removeItem(s),sessionStorage}},function(){if(e.isIE)return n.getElement().style.behavior="url('#default#userData')",{autoExpires:r,setItem:function(e,t){var r=n.getElement();r.setAttribute(e,t),r.expires=i.getExpDate();try{r.save("TinyMCE")}catch(s){}},getItem:function(e){var t=n.getElement();try{return t.load("TinyMCE"),t.getAttribute(e)}catch(r){return null}},removeItem:function(e){n.getElement().removeAttribute(e)}}}],function(e){try{i.storage=e();if(i.storage)return!1}catch(t){}})},storeDraft:function(){var e=this,t=e.storage,n=e.editor,r,i;if(t){if(!t.getItem(e.key)&&!n.isDirty())return;i=n.getContent({draft:!0}),i.length>n.settings.autosave_minlength&&(r=e.getExpDate(),e.storage.autoExpires||e.storage.setItem(e.key+"_expires",r),e.storage.setItem(e.key,i),e.onStoreDraft.dispatch(e,{expires:r,content:i}))}},restoreDraft:function(){var e=this,t=e.storage,n;t&&(n=t.getItem(e.key),n&&(e.editor.setContent(n),e.onRestoreDraft.dispatch(e,{content:n})))},hasDraft:function(){var e=this,t=e.storage,n,i;if(t){i=!!t.getItem(e.key);if(i){if(!!e.storage.autoExpires)return r;n=new Date(t.getItem(e.key+"_expires"));if((new Date).getTime()<n.getTime())return r;e.removeDraft()}}return!1},removeDraft:function(){var e=this,t=e.storage,n=e.key,r;t&&(r=t.getItem(n),t.removeItem(n),t.removeItem(n+"_expires"),r&&e.onRemoveDraft.dispatch(e,{content:r}))},"static":{_beforeUnloadHandler:function(t){var n;return e.each(tinyMCE.editors,function(e){e.plugins.autosave&&e.plugins.autosave.storeDraft();if(e.getParam("fullscreen_is_enabled"))return;!n&&e.isDirty()&&e.getParam("autosave_ask_before_unload")&&(n=e.getLang("autosave.unload_msg"))}),n}}}),e.PluginManager.add("autosave",e.plugins.AutoSave)})(tinymce);