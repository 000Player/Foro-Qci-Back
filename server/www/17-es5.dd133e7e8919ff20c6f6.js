!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{HV6F:function(n,i,r){"use strict";r.r(i),r.d(i,"QuestionViewPageModule",(function(){return w}));var o=r("ofXK"),s=r("3Pt+"),a=r("TEn/"),c=r("tyNb"),u=r("mrSG"),l=r("P+PR"),b=r("2hxB"),f=function e(){t(this,e),this.user=new b.a},d=r("J31/"),p=r("QYMr"),g=r("fXoL"),m=r("UcdY"),h=r("lBcp");function v(e,t){if(1&e){var n=g.Lb();g.Kb(0,"ion-label",2),g.Kb(1,"ion-button",17),g.Sb("click",(function(){g.dc(n);var e=g.Ub();return e.closeQuestion(e.question._id)})),g.Kb(2,"ion-label"),g.ic(3,"CERRAR"),g.Jb(),g.Ib(4,"ion-icon",18),g.Jb(),g.Jb()}}function R(e,t){if(1&e&&(g.Kb(0,"ion-chip",19),g.Kb(1,"ion-label",20),g.ic(2),g.Vb(3,"slice"),g.Jb(),g.Ib(4,"br"),g.Jb()),2&e){var n=t.$implicit;g.xb(2),g.jc(g.Xb(3,1,n.name,0,3))}}function y(e,t){if(1&e){var n=g.Lb();g.Kb(0,"ion-button",23),g.Sb("click",(function(){g.dc(n);var e=g.Ub().$implicit;return g.Ub().confirmRemoveReply(e._id)})),g.Ib(1,"ion-icon",24),g.Jb()}}function K(e,t){if(1&e&&(g.Kb(0,"ion-item"),g.Kb(1,"ion-avatar",0),g.Ib(2,"img",6),g.Jb(),g.gc(3,y,2,0,"ion-button",21),g.Kb(4,"ion-label",20),g.Kb(5,"ion-text",10),g.Kb(6,"h2"),g.Kb(7,"strong"),g.ic(8),g.Jb(),g.Jb(),g.Jb(),g.Kb(9,"ion-text"),g.Kb(10,"p",9),g.ic(11),g.Vb(12,"date"),g.Jb(),g.Jb(),g.Kb(13,"ion-text",22),g.Kb(14,"span"),g.ic(15),g.Jb(),g.Jb(),g.Jb(),g.Jb()),2&e){var n=t.$implicit,i=g.Ub();g.xb(3),g.ac("ngIf",n.user._id==i.user._id),g.xb(5),g.kc(" ",n.user.name+" "+n.user.lastName," "),g.xb(3),g.jc(g.Wb(12,4,n.date,"MMM d, y - H:mm")),g.xb(4),g.jc(n.reply)}}function x(e,t){if(1&e){var n=g.Lb();g.Kb(0,"form",null,25),g.Kb(2,"ion-item"),g.Kb(3,"ion-avatar",0),g.Ib(4,"img",6),g.Jb(),g.Kb(5,"ion-textarea",26),g.Sb("ngModelChange",(function(e){return g.dc(n),g.Ub().reply.reply=e})),g.Jb(),g.Kb(6,"ion-button",27),g.Sb("click",(function(){return g.dc(n),g.Ub().confirmAddReply()})),g.Ib(7,"ion-icon",28),g.Jb(),g.Jb(),g.Jb()}if(2&e){var i=g.cc(1),r=g.Ub();g.xb(5),g.ac("ngModel",r.reply.reply),g.xb(1),g.ac("disabled",!i.valid)}}function O(e,t){1&e&&(g.Kb(0,"ion-text",29),g.Kb(1,"div",30),g.ic(2," Pregunta cerrada, no puedes responder a esta pregunta. "),g.Jb(),g.Jb())}var J,q,k,E=[{path:"",component:(J=function(){function n(e,i,r,o,s,a,c){t(this,n),this.activatedRoute=e,this.questionService=i,this.tagService=r,this.router=o,this.alertController=s,this.toastController=a,this.loadingController=c,this.user=new b.a,this.question=new l.a,this.tag=new p.a,this.reply=new f}var i,r,o;return i=n,(r=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.questionId=this.activatedRoute.snapshot.params.id,this.getQuestion(this.questionId),this.getTag(this.questionId),this.user=d.a.getStorageUser()}},{key:"navigateAlert",value:function(e,t,n,i){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({header:e,subHeader:t,buttons:[{text:n,handler:function(){o.router.navigate(["/"+i+"/"])}}]});case 2:case"end":return r.stop()}}),r,this)})))}},{key:"closeQuestion",value:function(e){var t=this;this.questionService.closeQuestion(e).subscribe((function(e){e.status?t.question.open=!1:t.navigateAlert("\xa1ERROR AL CERRAR!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions")}),(function(e){t.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")}))}},{key:"getQuestion",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"Porfavor espere..."});case 2:return n=t.sent,t.next=5,n.present();case 5:this.questionService.getQuestionById(e).subscribe((function(e){e.status?i.question=e.data:i.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions"),n.dismiss()}),(function(e){i.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions"),n.dismiss()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getReloadQsn",value:function(e){var t=this;this.questionService.getQuestionById(this.questionId).subscribe((function(n){n.status?t.question=n.data:t.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar obtener la informacion de esta pregunta","OK","questions"),e.target.complete()}),(function(n){t.navigateAlert("ERROR DE SERVIDOR",n.message,"OK","questions"),e.target.complete()}))}},{key:"getTag",value:function(e){var t=this;this.tagService.getTagByQuestionId(e).subscribe((function(e){e.status&&(t.tag=e.data)}),(function(e){console.log(e)}))}},{key:"addReply",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.reply.user._id=this.user._id,this.reply.date=new Date,this.reply.score=0,this.questionService.addReply(this.questionId,this.reply).subscribe((function(e){e.status?(t.question=e.data,t.reply=new f):t.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar agregar esta pregunta","OK","questions")}),(function(e){t.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"removeReply",value:function(e){var t=this;this.questionService.removeReply(this.questionId,e).subscribe((function(e){if(e.status){var n=t.question.replys.findIndex((function(t){return t._id===e.data}));t.question.replys.splice(n,1)}else t.navigateAlert("\xa1ERROR AL OBTENER!","Hubo un problema al intentar remover esta respuesta","OK","questions")}),(function(e){t.navigateAlert("ERROR DE SERVIDOR",e.message,"OK","questions")}))}},{key:"confirmRemoveReply",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEstas seguro que deseas eliminar esta respuesta?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:function(){i.removeReply(e)}}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"confirmAddReply",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.reply.reply=this.reply.reply.trim(),!this.reply.reply.trim()){e.next=8;break}return e.next=3,this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEsta seguro de enviar esta respuesta?",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:function(){n.addReply()}}]});case 3:return t=e.sent,e.next=6,t.present();case 6:e.next=12;break;case 8:return e.next=10,this.toastController.create({message:"No puedes enviar una respuesta vacia.",duration:1500});case 10:e.sent.present(),this.reply.reply="";case 12:case"end":return e.stop()}}),e,this)})))}}])&&e(i.prototype,r),o&&e(i,o),n}(),J.\u0275fac=function(e){return new(e||J)(g.Hb(c.a),g.Hb(m.a),g.Hb(h.a),g.Hb(c.f),g.Hb(a.b),g.Hb(a.Z),g.Hb(a.U))},J.\u0275cmp=g.Bb({type:J,selectors:[["app-question-view"]],decls:41,vars:14,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],["slot","fixed",3,"ionRefresh"],["color","myPrimary"],["src","assets/icon/avatar.png"],["slot","end",4,"ngIf"],["color","myPrimaryText"],[1,"date"],["color","myPrimaryTextColor"],["color","primary",4,"ngFor","ngForOf"],["lines","full"],["color","myPrimaryDark"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["elseForm",""],["color","danger",3,"click"],["slot","end","name","close-circle"],["color","primary"],[1,"ion-text-wrap"],["slot","end","color","danger",3,"click",4,"ngIf"],["color","myPrimaryTextColor",2,"font-size","medium"],["slot","end","color","danger",3,"click"],["name","trash"],["formReply","ngForm"],["rows","3","placeholder","Respoder a esta pregunta","name","reply","minlength","2","required","",3,"ngModel","ngModelChange"],["slot","end","color","light",2,"margin-top","25px",3,"disabled","click"],["name","send","color","primary"],["color","medium"],[1,"ion-text-center"]],template:function(e,t){if(1&e&&(g.Kb(0,"ion-header"),g.Kb(1,"ion-toolbar"),g.Kb(2,"ion-title"),g.ic(3),g.Jb(),g.Kb(4,"ion-buttons",0),g.Ib(5,"ion-menu-button",1),g.Jb(),g.Kb(6,"ion-buttons",2),g.Ib(7,"ion-back-button",3),g.Jb(),g.Jb(),g.Jb(),g.Kb(8,"ion-content"),g.Kb(9,"ion-refresher",4),g.Sb("ionRefresh",(function(e){return t.getReloadQsn(e)})),g.Ib(10,"ion-refresher-content"),g.Jb(),g.Kb(11,"ion-card"),g.Kb(12,"ion-item",5),g.Kb(13,"ion-avatar",0),g.Ib(14,"img",6),g.Jb(),g.gc(15,v,5,0,"ion-label",7),g.Kb(16,"ion-label"),g.Kb(17,"ion-text",8),g.Kb(18,"h2"),g.Kb(19,"strong"),g.ic(20),g.Jb(),g.Jb(),g.Jb(),g.Kb(21,"ion-text",8),g.Kb(22,"p",9),g.ic(23),g.Vb(24,"date"),g.Jb(),g.Jb(),g.Jb(),g.Jb(),g.Kb(25,"ion-card-header"),g.Kb(26,"ion-card-title",10),g.Kb(27,"strong"),g.ic(28),g.Jb(),g.Jb(),g.Jb(),g.Kb(29,"ion-card-content"),g.ic(30),g.Jb(),g.gc(31,R,5,5,"ion-chip",11),g.Jb(),g.Kb(32,"ion-list"),g.Kb(33,"ion-item",12),g.Kb(34,"ion-text",13),g.ic(35),g.Jb(),g.Jb(),g.gc(36,K,16,7,"ion-item",14),g.Jb(),g.Jb(),g.Kb(37,"ion-footer"),g.gc(38,x,8,2,"form",15),g.gc(39,O,3,0,"ng-template",null,16,g.hc),g.Jb()),2&e){var n=g.cc(40);g.xb(3),g.kc("Pregunta - ",t.question.open?"Abierta":"Cerrada"," "),g.xb(12),g.ac("ngIf",t.question.open&&1==t.user.permission),g.xb(5),g.jc(t.question.user.name+" "+t.question.user.lastName),g.xb(3),g.jc(g.Wb(24,11,t.question.date,"MMM d, y")),g.xb(5),g.kc(" ",t.question.title," "),g.xb(2),g.kc(" ",t.question.body," "),g.xb(1),g.ac("ngForOf",t.tag.tags),g.xb(4),g.kc(" ",t.question.replys.length<1?"Nadie a respondido a esta pregunta todavia.":"Respuestas:",""),g.xb(1),g.ac("ngForOf",t.question.replys),g.xb(2),g.ac("ngIf",t.question.open)("ngIfElse",n)}},directives:[a.w,a.R,a.Q,a.i,a.D,a.f,a.g,a.q,a.F,a.G,a.j,a.z,a.e,o.j,a.A,a.N,a.l,a.m,a.k,o.i,a.B,a.u,a.h,a.x,a.o,s.k,s.f,s.g,a.O,a.Y,s.b,s.j,s.e,s.h],pipes:[o.d,o.m],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card[_ngcontent-%COMP%]{--background:#f5f5f5}ion-card-content[_ngcontent-%COMP%], ion-card-title[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}ion-card-content[_ngcontent-%COMP%]{color:#000;font-size:15px}.date[_ngcontent-%COMP%]{font-size:13px;font-family:Arial,Helvetica,sans-serif}"]}),J)}],I=((k=function e(){t(this,e)}).\u0275mod=g.Fb({type:k}),k.\u0275inj=g.Eb({factory:function(e){return new(e||k)},imports:[[c.i.forChild(E)],c.i]}),k),w=((q=function e(){t(this,e)}).\u0275mod=g.Fb({type:q}),q.\u0275inj=g.Eb({factory:function(e){return new(e||q)},imports:[[o.b,s.a,a.S,I]]}),q)}}])}();