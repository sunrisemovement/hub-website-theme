(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,a,t){"use strict";t.r(a);t(34);var n,r=t(175),i=t(0),s=t.n(i),c=t(176),l=t.n(c),o=t(177),A=t.n(o),u=t(155),m=t(152),d=t(148),p=(t(178),t(180)),f=t.n(p),h=t(160),g=t(181),E=t.n(g),b=function(e){return i.createElement("span",{style:{"--icon-font-size":(e.size||24)+"px","--icon-color":e.color},className:E.a.icon},e.icon)},v=function(e){return i.createElement(h.a,{className:f.a.link,to:e.to},i.createElement("span",null,e.label),i.createElement(b,{icon:"arrow_forward",size:20}))},w=(t(87),t(182),t(85),t(57),t(41),t(184),t(165)),N=t.n(w),y=(t(162),t(187),t(188),t(193)),L=t.n(y),x=function(){function e(e,a){this._count=e,this._value=a}return e.prototype[Symbol.iterator]=N.a.mark(function e(){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<this._count)){e.next=7;break}return e.next=4,this._value;case 4:a++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)}),e}(),M=function(){function e(e,a){this._year=e,this._month=a;var t=a-1,n=new Date(e,t,1),r=new Date(e,t+1,1);r.setDate(0);var i=new Date(n);i.setDate(i.getDate()-i.getDay()),this._firstSunday=i;var s=new Date(r);s.setDate(s.getDate()+(6-s.getDay())),this._lastSaturday=s}var a=e.prototype;return a[Symbol.iterator]=N.a.mark(function e(){var a,t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=new Date(this._lastSaturday)).setDate(a.getDate()+1),t=new Date(this._firstSunday);case 3:if(this.equalDays(t,a)){e.next=9;break}return e.next=6,{year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate()};case 6:t.setDate(t.getDate()+1),e.next=3;break;case 9:case"end":return e.stop()}},e,this)}),a.equalDays=function(e,a){return e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth()&&e.getDate()===a.getDate()},e}(),B=function(e){return i.createElement("div",{className:L.a.listEntry},i.createElement("div",{className:L.a.listEntryName},"Hub Meeting"),i.createElement("div",{className:L.a.listEntryTime},"6:00pm - 8:00pm"),i.createElement("div",{className:L.a.listEntryLocation},"123 Main St., Anytown, PA"))},D=function(e){return i.createElement("div",{className:L.a.sizer},i.createElement(d.a,{elevation:"4dp",radius:4,height:"100%"},i.createElement("div",{className:L.a.container},i.createElement("div",{className:L.a.calendar},i.createElement("div",{className:L.a.calendarMonth},i.createElement("div",{className:L.a.calendarMonthPrevious},i.createElement(b,{icon:"arrow_back_ios"})),i.createElement("div",{className:L.a.calendarMonthName},"June 2019"),i.createElement("div",{className:L.a.calendarMonthNext},i.createElement(b,{icon:"arrow_forward_ios"}))),i.createElement("div",{className:L.a.calendarGrid},Array.from(new M(2019,6)).map(function(a){var t,n,r,s;return i.createElement("div",{className:(t={},t[L.a.calendarGridEntry]=!0,t[L.a.calendarGridEntryCurrent]=(r=a,s=e.current,r.day===s.day&&r.month===s.month&&r.year===s.year),n=t,Object.keys(n).reduce(function(e,a){return n[a]?e+" "+a:e},"")),key:a.year+"-"+a.month+"-"+a.day},a.day)}))),i.createElement("div",{className:L.a.list},Array.from(new x(10,{name:"Hub Meeting",location:"123 Main St., Anytown, PA",time:"6:00PM - 8:00PM"})).map(function(e,a){return i.createElement(B,Object.assign({key:a},e))})))))};D.defaultProps={current:(n=new Date,{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()})};var j=D,S=t(194),C=t.n(S),P=t(202),Y=(t(200),t(201)),R=t.n(Y),Q=function(){var e=C()(N.a.mark(function e(a){var t,n,r,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new URL("https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(a)+".json")).searchParams.append("access_token",{}.MAPBOX_TOKEN),t.searchParams.append("autocomplete","false"),t.searchParams.append("fuzzyMatch","true"),e.next=7,fetch(t.href);case 7:return n=e.sent,e.next=10,n.json();case 10:if(r=e.sent,i=r.features[0]){e.next=14;break}throw Error("Not Found");case 14:return e.abrupt("return",{latitude:i.center[1],longitude:i.center[0]});case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",null);case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(a){return e.apply(this,arguments)}}(),T=function(e){if(!e.location)return i.createElement(i.Fragment,null);var a=i.useState(null),t=a[0],n=a[1];return i.useEffect(function(){e.location&&Q(e.location).then(n)},[e.location]),null!==t?i.createElement(P.b,{mapboxApiAccessToken:{}.MAPBOX_TOKEN,className:e.className,width:"100%",height:"100%",latitude:t.latitude,longitude:t.longitude,mapStyle:"mapbox://styles/mapbox/streets-v10",zoom:15},i.createElement(P.a,{latitude:t.latitude,longitude:t.longitude,offsetTop:-40,offsetLeft:-20},i.createElement("div",{className:R.a.marker},i.createElement(b,{icon:"place",size:40,color:"var(--color-yellow)"})))):i.createElement(i.Fragment,null)},z=function(e){return s.a.createElement("section",{className:A.a.heroSection},s.a.createElement(l.a,Object.assign({className:A.a.heroImage},e.image)),s.a.createElement("h1",{className:A.a.heroHubName},"Sunrise Anytown"),s.a.createElement("p",{className:A.a.heroHubDescription},"Repellendus veniam corrupti eius, corporis impedit quae itaque, nulla excepturi saepe accusamus deleniti minima dolor eligendi nihil nisi voluptatem, illum dignissimos distinctio!"))},k=function(){return s.a.createElement("section",{className:A.a.aboutSection,id:"about"},s.a.createElement("div",{className:A.a.aboutContainer},s.a.createElement("h2",{className:A.a.aboutHeading},"About Sunrise Anytown"),s.a.createElement(d.a,{radius:4,elevation:"2dp"},s.a.createElement("p",{className:A.a.aboutText},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel labore accusamus, sit iure eveniet rerum eum dignissimos provident! Provident facere soluta adipisci quas, autem fuga eum quos ipsa officiis.",s.a.createElement("br",null),s.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel labore accusamus, sit iure eveniet rerum eum dignissimos provident! Provident facere soluta adipisci quas, autem fuga eum quos ipsa officiis."))))},q=function(e){return s.a.createElement("div",{className:A.a.blogLatestPostCard},s.a.createElement(d.a,{elevation:"2dp",radius:4},s.a.createElement("article",{className:A.a.blogLatestPostArticle},s.a.createElement(l.a,Object.assign({className:A.a.blogLatestPostImage},e.image)),s.a.createElement("h3",{className:A.a.blogLatestPostTitle},"Featured Blog Post"),s.a.createElement("p",{className:A.a.blogLatestPostPreview},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id quas quod ipsum at maiores minima a, qui veritatis tenetur provident reprehenderit quam expedita officiis fuga similique nemo, eligendi assumenda..."),s.a.createElement("div",{className:A.a.blogLatestPostLink},s.a.createElement(v,{to:"/page-2/",label:"Read Post"})))))},I=function(){return s.a.createElement("div",{className:A.a.blogSeeAll},s.a.createElement(d.a,{elevation:"2dp",radius:4,height:"100%"},s.a.createElement("div",{className:A.a.blogSeeAllContainer},"See all blog posts")))},H=function(e){return s.a.createElement("section",{className:A.a.blogSection,id:"news"},s.a.createElement("div",{className:A.a.blogCardsContainer},s.a.createElement("h2",{className:A.a.blogHeading},"Latest News"),s.a.createElement(q,e),s.a.createElement(I,null)))},J=function(){return s.a.createElement("section",{className:A.a.eventsSection,id:"events"},s.a.createElement("div",{className:A.a.eventsContainer},s.a.createElement("h2",{className:A.a.eventsHeading},"Events"),s.a.createElement("div",{className:A.a.eventsCalendar},s.a.createElement(j,null)),s.a.createElement("div",{className:A.a.eventsDetail},s.a.createElement(d.a,{elevation:"4dp",radius:4,height:"100%"},s.a.createElement("div",{className:A.a.eventsDetailLayout},s.a.createElement("div",{className:A.a.eventsDetailMap},s.a.createElement(T,{location:"Johnie's Coffee Shop,  Los Angeles"})),s.a.createElement("div",{className:A.a.eventsDetailContent},s.a.createElement("div",{className:A.a.eventsDetailName},"June Hub Meeting"),s.a.createElement("div",{className:A.a.eventsDetailLocation},"Johnie's Coffee Shop,  Los Angeles"),s.a.createElement("div",{className:A.a.eventsDetailTime},"6:00PM - 8:00PM"),s.a.createElement("div",{className:A.a.eventDetailsDescription},s.a.createElement("p",null,"Sunrise Movement is a youth led organization aiming to stop climate change and create millions of good jobs in the process."),s.a.createElement("p",null,"Every couple of weeks we experience yet another climate disaster. All the while, our politicians refuse to step up and join us in this fight head on."),s.a.createElement("p",null,"Come join us at our sixth hub meeting where we will prepare to #ChangeTheDebate."))))))))};a.default=function(){var e=r.data;return s.a.createElement(u.a,null,s.a.createElement(m.a,{title:"Home"}),s.a.createElement(z,{image:e.heroImage.childImageSharp}),s.a.createElement(k,null),s.a.createElement(H,{image:e.blogLatestPostImage.childImageSharp}),s.a.createElement(J,null))}},148:function(e,a,t){"use strict";var n=t(0),r=t(156),i=t.n(r),s=function(e){return{"--surface-elevation-shadow":"var(--elevation-shadow-"+e.elevation+")","--surface-elevation-overlay-opacity":"var(--elevation-overlay-opacity-"+e.elevation+")","--surface-border-radius":e.radius+"px","--surface-height":e.height}},c=function(e){return n.createElement("div",{className:i.a.container,style:s(e)},e.children)};c.defaultProps={height:"auto",radius:0,elevation:"0dp"},a.a=c},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},151:function(e,a,t){var n=t(0);function r(e){return n.createElement("svg",e,n.createElement("path",{fillRule:"nonzero",d:"M0,0 L42,0 L42,0.16638122 L42,14.6897539 L42,47.8304689 L20.9998634,69 L0,47.8304689 L0,14.6897539 L0,0.16638122 L0,0 Z M22.7075475,19.18 L22.66,62.7 L38.3132313,46.8478019 L22.7075475,19.18 Z M19.4358669,19.18 L3.69,46.8749211 L19.3880462,62.7 L19.4358669,19.18 Z M38.7173125,40.828 L38.7173125,29.5123716 L26.79,19.778 L38.7173125,40.828 Z M3.28,29.4660756 L3.28,40.83 L15.3073261,19.78 L3.28,29.4660756 Z M38.7151728,25.35 L38.7151728,14.69 L33.7620372,14.69 L25.65,14.69 L38.7151728,25.35 Z M8.23313567,14.69 L3.28,14.69 L3.28,25.35 L16.3645744,14.69 L8.23313567,14.69 Z M11.65,11.38 L30.3435374,11.38 C29.5650157,6.89198447 25.6699481,3.47 20.9966321,3.47 C16.3235893,3.47 12.4285217,6.89198447 11.65,11.38 Z M3.28,11.38 L8.3418937,11.38 C8.74140183,8.25598649 10.2541768,5.4789632 12.468687,3.47 L3.28,3.47 L3.28,11.38 Z M33.6567933,11.31 L38.718687,11.31 L38.718687,3.4 L29.53,3.4 C31.7447834,5.4089632 33.2572851,8.18598649 33.6567933,11.31 Z"}))}r.defaultProps={viewBox:"0 0 42 69",version:"1.1"},e.exports=r,r.default=r},152:function(e,a,t){"use strict";var n=t(153),r=t(0),i=t.n(r),s=t(159),c=t.n(s);function l(e){var a=e.description,t=e.lang,r=e.meta,s=e.title,l=n.data.site,o=a||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},a.a=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},154:function(e,a,t){var n;e.exports=(n=t(161))&&n.default||n},155:function(e,a,t){"use strict";var n=t(150),r=t(0),i=t.n(r),s=t(151),c=t.n(s),l=t(148),o=t(157),A=t.n(o),u=function(e){e.siteTitle;return i.a.createElement("header",{className:A.a.headerWrap},i.a.createElement(l.a,{elevation:"4dp",radius:0},i.a.createElement("div",{className:A.a.inner},i.a.createElement("div",{className:A.a.logoContainer},i.a.createElement("div",{className:A.a.logoImageWrap},i.a.createElement(c.a,null)),i.a.createElement("div",{className:A.a.logoTextWrap},i.a.createElement("div",{className:A.a.logoTextUpper},"Sunrise Movement"),i.a.createElement("div",{className:A.a.logoTextLower},"Anytown, PA"))),i.a.createElement("nav",{className:A.a.links},i.a.createElement("a",{href:"#about"},"About"),i.a.createElement("a",{href:"#news"},"News"),i.a.createElement("a",{href:"#events"},"Events")))))};u.defaultProps={siteTitle:""};var m=u,d=t(158),p=t.n(d);a.a=function(e){var a=e.children,t=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("main",{className:p.a.main},a))}},160:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(33),l=t.n(c);t.d(a,"a",function(){return l.a});t(154),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},161:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(59),l=t(2),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},175:function(e){e.exports={data:{heroImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABXvzZC6KE/wD/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIDEhETIf/aAAgBAQABBQJkiNRJubjJYsf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGH/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AaV//8QAGBAAAgMAAAAAAAAAAAAAAAAAACAhMUH/2gAIAQEABj8C0qV//8QAHBABAAICAwEAAAAAAAAAAAAAAQARMUEhYYHB/9oACAEBAAE/Iaq2dWYhnyTl15LG19lwxFE//9oADAMBAAIAAwAAABBYz//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAFhf/EABYRAQEBAAAAAAAAAAAAAAAAABEAAf/aAAgBAgEBPxDSJ2//xAAbEAEAAgMBAQAAAAAAAAAAAAABABExQXFRkf/aAAgBAQABPxB67elGn2FUQrLWxgzeiADJdrKDns//2Q==",aspectRatio:1.5,src:"/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/fbffe/hub-pic.jpg",srcSet:"/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/35453/hub-pic.jpg 275w,\n/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/85590/hub-pic.jpg 550w,\n/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/fbffe/hub-pic.jpg 1100w,\n/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/6a4b0/hub-pic.jpg 1650w,\n/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/98744/hub-pic.jpg 2200w,\n/hub-website-theme/static/a351f60b94715f032a9a756329d9ad4e/9d56f/hub-pic.jpg 5844w",sizes:"(max-width: 1100px) 100vw, 1100px"}}},blogLatestPostImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/hub-website-theme/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b14621c63c91bc293ca3.js.map