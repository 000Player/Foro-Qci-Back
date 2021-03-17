!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HrqC:function(t,o,i){"use strict";i.r(o),i.d(o,"MyQuestionsPageModule",(function(){return J}));var r=i("ofXK"),c=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),u=i("mrSG"),b=i("2hxB"),l=i("J31/"),f=i("fXoL"),d=i("UcdY");function m(n,e){if(1&n){var t=f.Lb();f.Kb(0,"ion-col",13),f.Kb(1,"ion-button",17),f.Sb("click",(function(){f.dc(t);var n=f.Ub().$implicit;return f.Ub().updateQuestion(n._id)})),f.ic(2," EDITAR "),f.Ib(3,"ion-icon",18),f.Jb(),f.Jb()}}function p(n,e){if(1&n){var t=f.Lb();f.Kb(0,"ion-col",13),f.Kb(1,"ion-button",19),f.Sb("click",(function(){f.dc(t);var n=f.Ub().$implicit;return f.Ub().confirmClose(n._id)})),f.ic(2," CERRAR "),f.Ib(3,"ion-icon",20),f.Jb(),f.Jb()}}function g(n,e){if(1&n){var t=f.Lb();f.Kb(0,"ion-card"),f.Kb(1,"ion-card-header",10),f.Kb(2,"ion-card-title"),f.Kb(3,"ion-text",11),f.Kb(4,"strong"),f.ic(5),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Kb(6,"ion-card-content",12),f.ic(7),f.Jb(),f.Kb(8,"ion-footer"),f.Kb(9,"ion-row"),f.Kb(10,"ion-col",13),f.Kb(11,"ion-button",14),f.Sb("click",(function(){f.dc(t);var n=e.$implicit;return f.Ub().viewQuestion(n._id)})),f.ic(12," VER "),f.Ib(13,"ion-icon",15),f.Jb(),f.Jb(),f.gc(14,m,4,0,"ion-col",16),f.gc(15,p,4,0,"ion-col",16),f.Jb(),f.Jb(),f.Jb()}if(2&n){var o=e.$implicit;f.xb(5),f.kc(" ",o.title," "),f.xb(2),f.kc(" ",o.body," "),f.xb(7),f.ac("ngIf",o.open),f.xb(1),f.ac("ngIf",o.open)}}var v,h,y,x=[{path:"",component:(v=function(){function t(e,o,i,r,c){n(this,t),this.questionService=e,this.router=o,this.alertController=i,this.toastController=r,this.loadingController=c,this.user=new b.a,this.myQuestions=new Array}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.user=l.a.getStorageUser(),this.getQuestions()}},{key:"toast",value:function(n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:n,duration:1500});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"getQuestions",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Porfavor espere..."});case 2:return e=n.sent,n.next=5,e.present();case 5:this.questionService.getQuestionByUserId(this.user._id).subscribe((function(n){t.myQuestions=n.data.reverse(),e.dismiss()}),(function(n){console.log(n),e.dismiss()}));case 6:case"end":return n.stop()}}),n,this)})))}},{key:"viewQuestion",value:function(n){this.router.navigate(["/question-view/"+n])}},{key:"newQuestion",value:function(){this.router.navigate(["/question-form/0"])}},{key:"updateQuestion",value:function(n){this.router.navigate(["/question-form/"+n])}},{key:"closeQuestion",value:function(n){var e=this;this.questionService.closeQuestion(n).subscribe((function(n){var t=e.myQuestions.findIndex((function(e){return e._id===n.data._id}));e.myQuestions[t].open=!1,e.toast("La pregunta se ha cerrado")}),(function(n){e.toast("No se pudo cerrar la pregunta, revise su conexi\xf3n")}))}},{key:"confirmClose",value:function(n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"\xa1CONFIRMAR!",message:"\xbfEsta seguro que desea cerrar esta pregunta? Nadie mas podra contestarla.",buttons:[{text:"No",role:"cancel",cssClass:"secondary"},{text:"Si",cssClass:"success",handler:function(){o.closeQuestion(n)}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}}])&&e(o.prototype,i),r&&e(o,r),t}(),v.\u0275fac=function(n){return new(n||v)(f.Hb(d.a),f.Hb(a.f),f.Hb(s.b),f.Hb(s.Z),f.Hb(s.U))},v.\u0275cmp=f.Bb({type:v,selectors:[["app-my-questions"]],decls:21,vars:2,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],["lines","full"],["color","success","expand","block","slot","end",3,"click"],["name","add-circle",2,"margin-left","8px","margin-bottom","2px"],["color","medium"],[1,"ion-text-center",2,"margin-top","4px"],[4,"ngFor","ngForOf"],["color","myPrimary",2,"margin-bottom","10px","padding","10px"],["color","myPrimaryText",2,"font-size","16px"],[2,"font-size","16px"],[1,"ion-text-center"],["color","tertiary",3,"click"],["name","eye",2,"padding-left","4px"],["class","ion-text-center",4,"ngIf"],["color","myPrimary",3,"click"],["name","create",2,"padding-left","4px"],["color","danger",3,"click"],["name","close-circle",2,"padding-left","2px"]],template:function(n,e){1&n&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-title"),f.ic(3,"Mis preguntas "),f.Jb(),f.Kb(4,"ion-buttons",0),f.Ib(5,"ion-menu-button",1),f.Jb(),f.Kb(6,"ion-buttons",2),f.Ib(7,"ion-back-button",3),f.Jb(),f.Jb(),f.Jb(),f.Kb(8,"ion-content"),f.Kb(9,"ion-item",4),f.Kb(10,"ion-button",5),f.Sb("click",(function(){return e.newQuestion()})),f.ic(11," Pregunta "),f.Ib(12,"ion-icon",6),f.Jb(),f.Kb(13,"ion-label"),f.Kb(14,"strong"),f.ic(15," Haz tu pregunta aqui. "),f.Jb(),f.Jb(),f.Jb(),f.Kb(16,"ion-text",7),f.Kb(17,"div",8),f.ic(18),f.Jb(),f.Jb(),f.Kb(19,"ion-list"),f.gc(20,g,16,4,"ion-card",9),f.Jb(),f.Jb()),2&n&&(f.xb(18),f.kc(" ",e.myQuestions.length<1?"Aun no has hecho ninguna pregunta":"Tus preguntas."," "),f.xb(2),f.ac("ngForOf",e.myQuestions))},directives:[s.w,s.R,s.Q,s.i,s.D,s.f,s.g,s.q,s.z,s.h,s.x,s.A,s.N,s.B,r.i,s.j,s.l,s.m,s.k,s.u,s.I,s.p,r.j],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff}ion-title[_ngcontent-%COMP%]{--color:#fff;font-family:Arial,Helvetica,sans-serif}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card-title[_ngcontent-%COMP%]{--color:#607d8b;font-family:Arial,Helvetica,sans-serif}ion-card-content[_ngcontent-%COMP%]{color:#000}ion-item[_ngcontent-%COMP%]{--background:#f5f5f5;--color:#000;font-family:Arial,Helvetica,sans-serif}ion-card[_ngcontent-%COMP%]{--background:#fafafa}"]}),v)}],k=((y=function e(){n(this,e)}).\u0275mod=f.Fb({type:y}),y.\u0275inj=f.Eb({factory:function(n){return new(n||y)},imports:[[a.i.forChild(x)],a.i]}),y),J=((h=function e(){n(this,e)}).\u0275mod=f.Fb({type:h}),h.\u0275inj=f.Eb({factory:function(n){return new(n||h)},imports:[[r.b,c.a,s.S,k]]}),h)}}])}();