(function(){
'use strict';
var B=window.BUSINESS,$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
var PART='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="6"/><path d="M32 8v10M32 46v10M8 32h10M46 32h10"/></svg>';
var badge=function(i){return i.placeholder?'<span class="badge">EDIT</span>':''};
/* hero + text */
$('#h1').innerHTML=B.tagline.split(' ').map(function(w){return'<span class="w"><span>'+esc(w)+'</span></span>'}).join('');
$('#lead').textContent=B.intro;$('#fname').textContent=B.name;$('#ftag').textContent=B.tagline;$('#yr').textContent=new Date().getFullYear();
$('#aboutText').innerHTML=B.about.map(function(p){return'<p>'+esc(p)+'</p>'}).join('');
/* stats */
var st=$('#stats');if(B.stats&&B.stats.length){st.innerHTML=B.stats.map(function(s){return'<div class="stat rv"><b data-n="'+Number(s.value)+'" data-s="'+esc(s.suffix||'')+'">0</b><span class="muted">'+esc(s.label)+'</span></div>'}).join('')}else st.remove();
/* categories / why / brands */
$('#cats').innerHTML=B.categories.map(function(c){return'<div class="cat rv">'+PART+'<h3>'+esc(c.name)+'</h3><p>'+esc(c.desc||'')+'</p></div>'}).join('');
$('#whyList').innerHTML=B.strengths.map(function(s){return'<div class="rv"><h3>'+esc(s.title)+'</h3><p>'+esc(s.text)+'</p></div>'}).join('');
$('#brandList').innerHTML=(B.brands||[]).map(function(b){return'<div class="rv">'+esc(b.name)+'</div>'}).join('');
/* products */
var P=B.products||[],cat='All',cards=$('#cards');
function thumb(p){return'<div class="thumb">'+badge(p)+(p.image?'<img loading="lazy" src="'+esc(p.image)+'" alt="'+esc(p.name)+'">':PART)+'</div>'}
function enquire(name){var m=$('#form [name=msg]');m.value='Enquiry about: '+name+'\n';location.hash='#contact';setTimeout(function(){m.focus({preventScroll:true})},700)}
function draw(){var q=$('#q').value.trim().toLowerCase(),n=0;
cards.innerHTML=P.map(function(p,i){var hit=(cat==='All'||p.category===cat)&&(p.name+' '+p.category).toLowerCase().indexOf(q)>-1;if(!hit)return'';n++;
return'<article class="card tilt">'+thumb(p)+'<div class="card-b"><small>'+esc(p.category)+'</small><h3>'+esc(p.name)+'</h3><ul>'+(p.specs||[]).map(function(s){return'<li>'+esc(s)+'</li>'}).join('')+'</ul><button class="btn sm" data-i="'+i+'">Enquire</button></div></article>'}).join('');
$('#none').hidden=n>0;bindTilt()}
var cs=['All'].concat(P.map(function(p){return p.category}).filter(function(c,i,a){return a.indexOf(c)===i}));
$('#chips').innerHTML=cs.map(function(c){return'<button class="chip'+(c==='All'?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join('');
$('#chips').onclick=function(e){var b=e.target.closest('.chip');if(!b)return;cat=b.dataset.c;$$('.chip').forEach(function(x){x.classList.toggle('on',x===b)});draw()};
$('#q').oninput=draw;cards.onclick=function(e){var b=e.target.closest('button[data-i]');if(b)enquire(P[b.dataset.i].name)};
function bindTilt(){if(RM||matchMedia('(hover:none)').matches)return;$$('.tilt').forEach(function(c){c.onmousemove=function(e){var r=c.getBoundingClientRect();c.style.transform='perspective(800px) rotateY('+((e.clientX-r.left)/r.width-.5)*6+'deg) rotateX('+(.5-(e.clientY-r.top)/r.height)*6+'deg)'};c.onmouseleave=function(){c.style.transform=''}})}
if(P.length)draw();else{$('#products').remove();$('#showcase').remove()}
/* showcase */
var si=0;function show(){var p=P[si];$('#show').innerHTML=thumb(p)+'<div><small class="muted">'+esc(p.category)+'</small><h3>'+esc(p.name)+'</h3><ul>'+(p.specs||[]).map(function(s){return'<li>'+esc(s)+'</li>'}).join('')+'</ul><button class="btn" id="se">Enquire about this part</button><div class="ctl"><button id="pv" aria-label="Previous product">&larr;</button><button id="nx" aria-label="Next product">&rarr;</button></div></div>';
$('#se').onclick=function(){enquire(p.name)};$('#pv').onclick=function(){si=(si-1+P.length)%P.length;show()};$('#nx').onclick=function(){si=(si+1)%P.length;show()}}
if(P.length)show();
/* gallery */
if(B.gallery&&B.gallery.length)$('#gal').innerHTML=B.gallery.map(function(g){return'<figure class="rv">'+badge(g)+(g.src?'<img loading="lazy" src="'+esc(g.src)+'" alt="'+esc(g.alt)+'">':'<div class="thumb" style="height:100%;aspect-ratio:auto">'+PART+'</div>')+'</figure>'}).join('');else $('#gallery').remove();
if(!(B.brands||[]).length)$('#brands').remove();
/* contact */
var c=B.contact,rows=[];
if(c.phone)rows.push(['Phone','<a href="tel:'+esc(c.phone.replace(/[^+\d]/g,''))+'">'+esc(c.phone)+'</a>']);
if(c.whatsapp)rows.push(['WhatsApp','<a href="https://wa.me/'+esc(c.whatsapp)+'" rel="noopener">Chat on WhatsApp</a>']);
if(c.email)rows.push(['Email','<a href="mailto:'+esc(c.email)+'">'+esc(c.email)+'</a>']);
if(c.address)rows.push(['Address',c.mapUrl?'<a href="'+esc(c.mapUrl)+'" rel="noopener">'+esc(c.address)+'</a>':esc(c.address)]);
if(c.hours)rows.push(['Hours',esc(c.hours)]);
$('#info').innerHTML=rows.length?rows.map(function(r){return'<li><span>'+r[0]+'</span>'+r[1]+'</li>'}).join(''):'<li class="muted">EDIT: add phone, email and address in js/business-data.js.</li>';
$('#form').onsubmit=function(e){e.preventDefault();var f=e.target,s=$('#status'),v=function(n){return f.elements[n].value.trim()};
if(!v('name')||!v('msg')){s.textContent='Enter your name and the part details.';return}
var body='Name: '+v('name')+'\nPhone: '+v('phone')+'\nEmail: '+v('email')+'\n\n'+v('msg');
if(c.email){location.href='mailto:'+c.email+'?subject='+encodeURIComponent('Parts enquiry – '+v('name'))+'&body='+encodeURIComponent(body);s.textContent='Opening your email app…'}
else if(c.whatsapp){window.open('https://wa.me/'+c.whatsapp+'?text='+encodeURIComponent(body),'_blank','noopener');s.textContent='Opening WhatsApp…'}
else s.textContent='Enquiries are not connected yet. Add an email or WhatsApp number in js/business-data.js.'};
/* nav */
var links=[['about','About'],['categories','Categories'],['products','Parts'],['brands','Brands'],['why','Why us'],['gallery','Gallery'],['contact','Contact']].filter(function(l){return $('#'+l[0])});
$('#menu').innerHTML=links.map(function(l){return'<a href="#'+l[0]+'">'+l[1]+'</a>'}).join('');
$('#fnav').innerHTML=links.map(function(l){return'<a href="#'+l[0]+'">'+l[1]+'</a>'}).join('');
var nav=$('#nav'),burger=$('#burger'),menu=$('#menu');
function toggle(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
burger.onclick=function(){toggle(burger.getAttribute('aria-expanded')!=='true')};menu.onclick=function(e){if(e.target.closest('a'))toggle(false)};
addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false)});
/* scroll: header, parallax */
var lastY=0,par=$$('[data-par]'),tick=false;
function onScroll(){var y=scrollY;nav.classList.toggle('solid',y>40);nav.classList.toggle('hide',y>lastY&&y>400&&!menu.classList.contains('open'));lastY=y;
if(!RM&&y<innerHeight*1.2)par.forEach(function(el){el.style.transform='translate3d(0,'+y*el.dataset.par+'px,0)'});tick=false}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
/* reveal, active link, counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');var n=$('[data-n]',e.target);if(n)count(n);io.unobserve(e.target)}})},{threshold:.12});
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
function count(el){var t=+el.dataset.n,s=el.dataset.s,t0=null;if(RM){el.textContent=t+s;return}
(function f(ts){t0=t0||ts;var p=Math.min((ts-t0)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(performance.now())}
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)$$('#menu a').forEach(function(a){a.classList.toggle('on',a.hash==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
links.forEach(function(l){so.observe($('#'+l[0]))});
/* magnetic buttons */
if(!RM&&matchMedia('(hover:hover)').matches)$$('.mag').forEach(function(b){b.onmousemove=function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.2+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'};b.onmouseleave=function(){b.style.transform=''}});
/* hero sparks (light canvas particles, paused offscreen) */
var cv=$('#sparks'),cx=cv.getContext('2d'),ps=[],run=true,W,H;
function size(){var d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
ps=[];for(var i=0;i<(W<700?28:60);i++)ps.push({x:Math.random()*W,y:Math.random()*H,v:.2+Math.random()*.8,r:Math.random()*1.6+.4})}
function frame(){if(run){cx.clearRect(0,0,W,H);cx.fillStyle='#FF5A1F';ps.forEach(function(p){p.y-=p.v;p.x+=p.v*.3;if(p.y<0||p.x>W){p.y=H;p.x=Math.random()*W}cx.globalAlpha=.15+p.r/3;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.3);cx.fill()})}requestAnimationFrame(frame)}
size();addEventListener('resize',size);new IntersectionObserver(function(e){run=e[0].isIntersecting&&!RM}).observe(cv);if(!RM)frame();
/* loader -> hero entrance */
function go(){var l=$('#loader');l.classList.add('done');setTimeout(function(){document.body.classList.add('go');$('#home').classList.add('go')},250)}
var t0=Date.now();addEventListener('load',function(){setTimeout(go,Math.max(0,RM?0:1200-(Date.now()-t0)))});setTimeout(go,4000);
})();
