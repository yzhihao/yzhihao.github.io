(function(){var f=window,c=f.bShareUtil,B=f.bShareControl,a=f.bShare,e=a.config,m=a.iL8n,b=e.popHCol,s=e.poptxtc,y=e.popbgc,C=a.whost,t=a.imageBasePath,i=document,n=i.documentElement,o=i.body,p=Math.max,u=0,v=0,z=e.lang=="en",E=function(){var j=i.getElementById("bsPanelHolder");j||(j=c.createElement("div","bsPanelHolder"));var D=j;c.loadStyle("a.bsSiteLink{text-decoration:none;color:"+s+";}a.bsSiteLink:hover{text-decoration:underline;}a.bshareDiv{overflow:hidden;height:16px;line-height:18px;font-size:14px;color:#333;padding-left:0;}a.bshareDiv:hover{text-decoration:none;}div.bsTitle{padding:0 8px;border-bottom:1px solid #e8e8e8;color:"+
s+";background:"+y+";text-align:left;}div.buzzButton{cursor:pointer;}div.bsRlogo,div.bsRlogoSel{width:68px;float:left;margin:0;padding:2px 0;}div.bsRlogo a,div.bsRlogoSel a{float:left;}div.bsLogo,div.bsLogoSel{float:left;width:111px;text-align:left;height:auto;padding:2px 4px;margin:2px 0;white-space:nowrap;overflow:hidden;}div.bsLogoSel,div.bsRlogoSel{border:1px solid #ddd;background:#f1f1f1;}div.bsLogo,div.bsRlogo{border:1px solid #fff;background:#fff;}div.bsLogo a,div.bsLogoSel a{display:block;height:16px;line-height:16px;padding:0 0 0 24px;text-decoration:none;float:left;overflow:hidden;}div.bsLogoSel a,div.bsRlogoSel a{color:#000;border:none;}div.bsLogo a,div.bsRlogo a{color:#666;border:none;}div.bsLogoLink{width:121px;overflow:hidden;background:#FFF;float:left;margin:3px 0;}#bsPanel{position:absolute;z-index:100000000;font-size:12px;width:"+
(111*b+(b-1)*10+26+(c.isIe&&!c.isSt?6:0))+"px;background:url("+a.shost+"/frame/images/background-opaque-dark."+(c.isIe6?"gif":"png")+");padding:6px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;}div.bsClear{clear:both;height:0;line-height:0;font-size:0;overflow:hidden;}div.bsPopupAwd{background: url("+t+"/bshare_box_sprite2.gif) no-repeat top left;background-position:0 -624px;width:18px;padding-left:3px;text-align:center;float:left;margin-left:2px;height:15px;font-size:12px;color:#fff;overflow:hidden;}div.bsRlogo .bsPopupAwd,div.bsRlogoSel .bsPopupAwd{float:left;margin:5px 0 0 -14px;}");
var k;k='<div class="bsTitle"><a style="float:left;height:20px;line-height:20px;font-weight:bold;" class="bsSiteLink" target="_blank" href="'+C+'/intro">'+m.shareText+'</a><a class="bsSiteLink" style="cursor:pointer;float:right;height:20px;line-height:20px;font-weight:bold;" onclick="document.getElementById(\'bsPanel\').style.display=\'none\';">X</a><div class="bsClear"></div></div><div class="bsClear"></div>';var h="",g,d,w,l=[],f,n,q,o,x,p=0,r;if(b==2){h+='<div style="height:47px;border-bottom:1px #ccc solid;padding:4px 0 4px 16px;margin-right:8px;_padding-left:12px;">';
for(g=0;g<3&&g<e.bps.length;g++)d=e.bps[g],c.isUndefined(a.pnMap[d])||(q=!!a.params.promote&&!z&&c.arrayContains(a.arrayIsAwd,d),h+='<div class="bsRlogo" onmouseover="javascript:this.className=\'bsRlogoSel\'" onmouseout="javascript:this.className=\'bsRlogo\'"><a href="javascript:;" onclick="javascript:bShare.share(event,\''+d+'\');return false;" style="text-decoration:none;line-height:120%;"><div style="cursor:pointer;width:24px;height:24px;margin:0 18px 2px;background:url('+t+"/logos/m2/"+d+'.gif) no-repeat;"></div><div style="cursor:pointer;text-align:center;width:60px;height:16px !important;overflow:hidden;color:inherit;white-space:nowrap;line-height:120% !important">'+
a.pnMap[d][0]+"</div></a>"+(q?'<div class="bsPopupAwd">'+m.promoteShort+"</div>":"")+"</div>");h+="</div>"}for(d=0;d<b;d++)l.push("<div class='bsLogoLink'>");n=b<2&&e.bps.length>6?6:e.bps.length;for(g=0,f=b==2?3:0;f<n;f++)d=e.bps[f],c.isUndefined(a.pnMap[d])||(w=a.pnMap[d][0],x=a.pnMap[d][1]*-18,q=!!a.params.promote&&!z&&c.arrayContains(a.arrayIsAwd,d),o=(c.arrayContains(a.boldPlatforms,d)?"font-weight:bold;":"")+(c.arrayContains(a.redPlatforms,d)?"color:red;":"")+(q?"width:48px;":""),l[g%b]+='<div class="bsLogo" onmouseover="javascript:this.className=\'bsLogoSel\'" onmouseout="javascript:this.className=\'bsLogo\'"><a href="javascript:;" title="'+
w+'" onclick="javascript:bShare.share(event,\''+d+'\');return false;" style="'+o+"background:url("+t+(x?"/slogos_sprite8."+(c.isIe?"gif":"png")+") no-repeat 0 "+x+'px;">':"/logos/s4/"+d+(c.isIe?".gif":".png")+') no-repeat;">')+w+"</a>"+(q?'<div class="bsPopupAwd">'+m.promoteShort+"</div>":"")+"</div>",g++);u=116+26*Math.ceil(g/b)-(b!=2?56:0);v=b*121+28;for(d=0;d<b;d++)h+=l[d]+"</div>";h+="<div class='bsClear'></div>";for(r in a.pnMap)a.pnMap.hasOwnProperty(r)&&p++;l='<div style="height:20px;line-height:20px;padding:0 8px;border-top:1px solid #e8e8e8;color:'+
s+";background:"+y+';"><div class="buzzButton" style="float:left;">'+(b==1?m.morePlatsShort:m.morePlats+' <font style="font-weight:normal;">('+p+")</font>")+"</div>";e.logo&&(l+=a.elems.powerBy);l+="</div>";k=k+"<div style='padding-left:8px;background:#fff;*height:"+(26*Math.ceil(g/b)+6+(b==2?56:0))+"px;'>"+h+"</div>"+l;D.innerHTML='<div id="bsPanel" style="display:none;">'+k+"</div>";i.body.appendChild(j);return j};a.hover=function(j){a.timerId!=0&&clearTimeout(a.timerId);var b=j||c.getElem(i,"a",
"buzzButton")[0],k=c.getOffset(b).y,h=c.getOffset(b).x,g=b.offsetHeight,d=i.getElementById("bsPanel"),f=c.getWH().w;c.getWH();if(e.poph!="right"&&(h+v>f||e.poph=="left"))h-=v-b.offsetWidth;d.style.left=h+"px";d.style.top=e.pop==2||e.pop!=1&&k-{t:p(n.scrollTop,o.scrollTop),l:p(n.scrollLeft,o.scrollLeft)}.t+u+g>c.getWH().h?k-u-2+"px":k+g+2+"px";d.style.display="";a.prepare(j.index);a.click()};a.ready=function(){E();var b=i.getElementById("bsPanel");a.timerId=0;var f=function(c){e.pop==-2?c.onclick=
function(){a.hover(this)}:(c.onmouseover=function(){a.hover(this)},c.onmouseout=function(){a.timerId=setTimeout(function(){b.style.display="none"},20)})};a.style!=5&&c.getElem(i,"a","bshareDiv",function(a,b){c.getElem(a,"div","buzzButton",function(a){a.index=b;f(a)})});c.getElem(i,"div","bshare-custom",function(a,b){c.getElem(a,"a","bshare-more",function(a){a.index=b;f(a)})});c.getElem(b,"div","buzzButton",function(b,c){b.onclick=function(b){a.more(b,c);return!1}});b.onmouseout=function(){a.timerId=
setTimeout(function(){b.style.display="none"},0)};b.onmouseover=function(){a.timerId!=0&&clearTimeout(a.timerId)}};(function(){for(var b=f.location.host,c="video.rayli.com.cn,v.sun0769.com,mytv365.com,jxntv.cn,gdtv.cn,chinanews.com,gmw.cn,mop.com,163.com,china.com.cn,m4.cn,kanglu.com,uuu9.com,online.sh.cn,yokamen.cn,bshare.local".split(","),e=c.length;e--;)if(b.indexOf(c[e])>-1)return a.params.promote?a.arrayIsAwd.push("189share"):(a.params.promote=!0,a.arrayIsAwd=["189share"]),!0})();var r=0,A=function(){if(B.bShareLoad||
r>=30){if(!e.bps||e.bps.length==0)e.bps=a.defaultBps;a.ready()}else++r,setTimeout(A,100)};A()})();