(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UMgg:function(t,e,n){"use strict";n.r(e),n.d(e,"QuestionsPageModule",(function(){return g}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("mrSG"),b=n("fXoL"),a=n("UcdY");function l(t,e){1&t&&(b.Kb(0,"ion-text",6),b.Kb(1,"div",14),b.ic(2," No hay preguntas disponibles. "),b.Jb(),b.Jb())}function u(t,e){if(1&t){const t=b.Lb();b.Kb(0,"ion-item",5),b.Sb("click",(function(){b.dc(t);const n=e.$implicit;return b.Ub().viewQuestion(n._id)})),b.Kb(1,"ion-avatar",0),b.Ib(2,"img",15),b.Jb(),b.Kb(3,"ion-text",16),b.ic(4),b.Vb(5,"date"),b.Jb(),b.Kb(6,"ion-label"),b.Kb(7,"ion-text",17),b.Kb(8,"h2",18),b.ic(9),b.Jb(),b.Jb(),b.Kb(10,"h2"),b.Kb(11,"ion-text",19),b.Kb(12,"strong"),b.ic(13),b.Jb(),b.Jb(),b.Jb(),b.Kb(14,"ion-text",6),b.Kb(15,"span"),b.ic(16),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=e.$implicit;b.xb(4),b.kc(" ",b.Wb(5,4,t.date,"d/M/yyyy")," "),b.xb(5),b.jc(t.user.name+" "+t.user.lastName),b.xb(4),b.kc(" ",t.title," "),b.xb(3),b.kc(" ",t.body," ")}}const d=[{path:"",component:(()=>{class t{constructor(t,e,n){this.questionService=t,this.router=e,this.loadingController=n,this.questionList=new Array,this.questionFilterList=new Array}ngOnInit(){}ionViewWillEnter(){this.getQuestions()}getQuestions(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"Porfavor espere..."});yield t.present(),this.questionService.getQuestions().subscribe(e=>{e.status&&(this.questionList=e.data.reverse(),this.questionFilterList=this.questionList),t.dismiss()},e=>{console.log(e),t.dismiss()})}))}getReloadQns(t){this.questionService.getQuestions().subscribe(e=>{e.status&&(this.questionList=e.data.reverse(),this.questionFilterList=this.questionList,t.target.complete())},e=>{t.target.complete(),console.log(e)})}findQuestion(t){t=t.trim();const e=new RegExp(t,"i");this.questionFilterList=[];for(const n of this.questionList)n.title.match(e)&&this.questionFilterList.push(n)}viewQuestion(t){this.router.navigate(["/question-view/"+t])}showHide(){"none"===document.getElementById("showHide").style.display?document.getElementById("showHide").style.display="block":"block"===document.getElementById("showHide").style.display&&(document.getElementById("showHide").style.display="none")}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(a.a),b.Hb(r.f),b.Hb(s.U))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-questions"]],decls:26,vars:2,consts:[["slot","start"],["menu","main-menu"],["slot","end"],["defaultHref","events"],[1,"leyenda"],[3,"click"],["color","medium"],["slot","end","color","light",2,"margin","0px","width","70%"],["color","primary",2,"margin-right","10px"],[1,"findInput",3,"keyup"],["id","showHide",2,"display","none"],["slot","fixed",3,"ionRefresh"],["color","medium",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center",2,"font-size","24px"],["src","assets/icon/avatar.png"],["slot","end","color","myPrimary"],["color","primary"],[1,"user"],[1,"title"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.ic(3,"Preguntas "),b.Jb(),b.Kb(4,"ion-buttons",0),b.Ib(5,"ion-menu-button",1),b.Jb(),b.Kb(6,"ion-buttons",2),b.Ib(7,"ion-back-button",3),b.Jb(),b.Jb(),b.Jb(),b.Kb(8,"ion-content"),b.Kb(9,"ion-item",4),b.Kb(10,"p",5),b.Sb("click",(function(){return e.showHide()})),b.Kb(11,"ion-text",6),b.ic(12," \xbfQu\xe9 es esto?"),b.Jb(),b.Jb(),b.Kb(13,"ion-item",7),b.Kb(14,"ion-label",8),b.ic(15,"Buscar: "),b.Jb(),b.Kb(16,"ion-input",9),b.Sb("keyup",(function(t){return e.findQuestion(t.target.value)})),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"div",10),b.Kb(18,"ion-card"),b.Kb(19,"ion-card-content"),b.ic(20," En esta secci\xf3n podr\xe1s ver todas las preguntas que se han realizado en todo el foro. Las preguntas aqu\xed abarcan los temas en general. "),b.Jb(),b.Jb(),b.Jb(),b.Kb(21,"ion-refresher",11),b.Sb("ionRefresh",(function(t){return e.getReloadQns(t)})),b.Ib(22,"ion-refresher-content"),b.Jb(),b.Kb(23,"ion-list"),b.gc(24,l,3,0,"ion-text",12),b.gc(25,u,17,7,"ion-item",13),b.Jb(),b.Jb()),2&t&&(b.xb(24),b.ac("ngIf",e.questionFilterList.length<1),b.xb(1),b.ac("ngForOf",e.questionFilterList))},directives:[s.w,s.R,s.Q,s.i,s.D,s.f,s.g,s.q,s.z,s.N,s.A,s.y,s.Y,s.j,s.k,s.F,s.G,s.B,i.j,i.i,s.e],pipes:[i.d],styles:[".select[_ngcontent-%COMP%]:hover{cursor:pointer}ion-content[_ngcontent-%COMP%]{--background:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:#00796b;--color:#fff}ion-card-content[_ngcontent-%COMP%]{color:#000;font-family:Arial,Helvetica,sans-serif;font-size:15px}.leyenda[_ngcontent-%COMP%]{--background:#f5f5f5}.user[_ngcontent-%COMP%]{color:#3880ff;font-size:18px}.title[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.title[_ngcontent-%COMP%]{color:#607d8b}.findInput[_ngcontent-%COMP%]{color:#107aac;background-color:#fbfbfb}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.S,f]]}),t})()}}]);