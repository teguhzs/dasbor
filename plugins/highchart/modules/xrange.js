/*
 Highcharts JS v8.0.4 (2020-03-10)

 X-range series

 (c) 2010-2019 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/xrange",["highcharts"],function(h){b(h);b.Highcharts=h;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function h(b,n,h,f){b.hasOwnProperty(n)||(b[n]=f.apply(null,h))}b=b?b._modules:{};h(b,"modules/xrange.src.js",[b["parts/Globals.js"],b["parts/Color.js"],b["parts/Point.js"],b["parts/Utilities.js"]],function(b,h,w,f){var n=
h.parse;h=f.addEvent;var p=f.clamp,z=f.correctFloat,A=f.defined,x=f.find,r=f.isNumber,u=f.isObject,t=f.merge,v=f.pick;f=f.seriesType;var y=b.seriesTypes.column,B=b.Axis,C=b.Series;f("xrange","column",{colorByPoint:!0,dataLabels:{formatter:function(){var a=this.point.partialFill;u(a)&&(a=a.amount);if(r(a)&&0<a)return z(100*a)+"%"},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:'<span style="font-size: 10px">{point.x} - {point.x2}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.yCategory}</b><br/>'},
borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:b.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,autoIncrement:b.noop,buildKDTree:b.noop,getColumnMetrics:function(){function a(){g.series.forEach(function(a){var c=a.xAxis;a.xAxis=a.yAxis;a.yAxis=c})}var g=this.chart;a();var d=y.prototype.getColumnMetrics.call(this);a();return d},cropData:function(a,g,d,b){g=C.prototype.cropData.call(this,this.x2Data,g,d,b);g.xData=a.slice(g.start,
g.end);return g},findPointIndex:function(a){var g=this.cropped,d=this.cropStart,b=this.points,c=a.id;if(c)var e=(e=x(b,function(a){return a.id===c}))?e.index:void 0;"undefined"===typeof e&&(e=(e=x(b,function(c){return c.x===a.x&&c.x2===a.x2&&!c.touched}))?e.index:void 0);g&&r(e)&&r(d)&&e>=d&&(e-=d);return e},translatePoint:function(a){var g=this.xAxis,d=this.yAxis,b=this.columnMetrics,c=this.options,e=c.minPointLength||0,f=a.plotX,h=v(a.x2,a.x+(a.len||0)),k=g.translate(h,0,0,0,1);h=Math.abs(k-f);
var m=this.chart.inverted,n=v(c.borderWidth,1)%2/2,l=b.offset,q=Math.round(b.width);e&&(e-=h,0>e&&(e=0),f-=e/2,k+=e/2);f=Math.max(f,-10);k=p(k,-10,g.len+10);A(a.options.pointWidth)&&(l-=(Math.ceil(a.options.pointWidth)-q)/2,q=Math.ceil(a.options.pointWidth));c.pointPlacement&&r(a.plotY)&&d.categories&&(a.plotY=d.translate(a.y,0,1,0,1,c.pointPlacement));a.shapeArgs={x:Math.floor(Math.min(f,k))+n,y:Math.floor(a.plotY+l)+n,width:Math.round(Math.abs(k-f)),height:q,r:this.options.borderRadius};c=a.shapeArgs.x;
e=c+a.shapeArgs.width;0>c||e>g.len?(c=p(c,0,g.len),e=p(e,0,g.len),k=e-c,a.dlBox=t(a.shapeArgs,{x:c,width:e-c,centerX:k?k/2:null})):a.dlBox=null;c=a.tooltipPos;e=m?1:0;k=m?0:1;b=this.columnMetrics?this.columnMetrics.offset:-b.width/2;c[e]=p(c[e]+h/2*(g.reversed?-1:1)*(m?-1:1),0,g.len-1);c[k]=p(c[k]+(m?-1:1)*b,0,d.len-1);if(b=a.partialFill)u(b)&&(b=b.amount),r(b)||(b=0),d=a.shapeArgs,a.partShapeArgs={x:d.x,y:d.y,width:d.width,height:d.height,r:this.options.borderRadius},f=Math.max(Math.round(h*b+a.plotX-
f),0),a.clipRectArgs={x:g.reversed?d.x+h-f:d.x,y:d.y,width:f,height:d.height}},translate:function(){y.prototype.translate.apply(this,arguments);this.points.forEach(function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var d=this.options,g=this.chart.renderer,c=a.graphic,e=a.shapeType,f=a.shapeArgs,h=a.partShapeArgs,k=a.clipRectArgs,m=a.partialFill,p=d.stacking&&!d.borderRadius,l=a.state,q=d.states[l||"normal"]||{},r="undefined"===typeof l?"attr":b;l=this.pointAttribs(a,l);q=v(this.chart.options.chart.animation,
q.animation);if(a.isNull||!1===a.visible)c&&(a.graphic=c.destroy());else{if(c)c.rect[b](f);else a.graphic=c=g.g("point").addClass(a.getClassName()).add(a.group||this.group),c.rect=g[e](t(f)).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(c);h&&(c.partRect?(c.partRect[b](t(h)),c.partialClipRect[b](t(k))):(c.partialClipRect=g.clipRect(k.x,k.y,k.width,k.height),c.partRect=g[e](h).addClass("highcharts-partfill-overlay").add(c).clip(c.partialClipRect)));this.chart.styledMode||
(c.rect[b](l,q).shadow(d.shadow,null,p),h&&(u(m)||(m={}),u(d.partialFill)&&(m=t(m,d.partialFill)),a=m.fill||n(l.fill).brighten(-.3).get()||n(a.color||this.color).brighten(-.3).get(),l.fill=a,c.partRect[r](l,q).shadow(d.shadow,null,p)))}},drawPoints:function(){var a=this,b=a.getAnimationVerb();a.points.forEach(function(g){a.drawPoint(g,b)})},getAnimationVerb:function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"}},{resolveColor:function(){var a=this.series;if(a.options.colorByPoint&&
!this.options.color){var b=a.options.colors||a.chart.options.colors;var d=this.y%(b?b.length:a.chart.options.chart.colorCount);b=b&&b[d];a.chart.styledMode||(this.color=b);this.options.colorIndex||(this.colorIndex=d)}else this.color||(this.color=a.color)},init:function(){w.prototype.init.apply(this,arguments);this.y||(this.y=0);return this},setState:function(){w.prototype.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())},getLabelConfig:function(){var a=w.prototype.getLabelConfig.call(this),
b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});h(B,"afterGetSeriesExtremes",function(){var a=this.series,b;if(this.isXAxis){var d=v(this.dataMax,-Number.MAX_VALUE);a.forEach(function(a){a.x2Data&&a.x2Data.forEach(function(a){a>d&&(d=a,b=!0)})});b&&(this.dataMax=d)}});""});h(b,"masters/modules/xrange.src.js",[],function(){})});
//# sourceMappingURL=xrange.js.map