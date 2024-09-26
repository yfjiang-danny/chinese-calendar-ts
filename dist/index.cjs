"use strict";var c=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var D=(r,e)=>{for(var n in e)c(r,n,{get:e[n],enumerable:!0})},Y=(r,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of u(e))!g.call(r,t)&&t!==n&&c(r,t,{get:()=>e[t],enumerable:!(o=f(e,t))||o.enumerable});return r};var l=r=>Y(c({},"__esModule",{value:!0}),r);var H={};D(H,{getHolidayDays:()=>E,getHolidayTypes:()=>w,isHoliday:()=>d,isWorkday:()=>p});module.exports=l(H);var i={2018:{"2018-02-15":"\u6625\u8282","2018-02-16":"\u6625\u8282","2018-02-17":"\u6625\u8282","2018-02-18":"\u6625\u8282","2018-02-19":"\u6625\u8282","2018-02-20":"\u6625\u8282","2018-02-21":"\u6625\u8282","2018-04-05":"\u6E05\u660E\u8282","2018-04-06":"\u6E05\u660E\u8282","2018-04-07":"\u6E05\u660E\u8282","2018-04-29":"\u52B3\u52A8\u8282","2018-04-30":"\u52B3\u52A8\u8282","2018-05-01":"\u52B3\u52A8\u8282","2018-06-18":"\u7AEF\u5348\u8282","2018-09-24":"\u4E2D\u79CB\u8282","2018-10-01":"\u56FD\u5E86\u8282","2018-10-02":"\u56FD\u5E86\u8282","2018-10-03":"\u56FD\u5E86\u8282","2018-10-04":"\u56FD\u5E86\u8282","2018-10-05":"\u56FD\u5E86\u8282","2018-10-06":"\u56FD\u5E86\u8282","2018-10-07":"\u56FD\u5E86\u8282","2018-12-30":"\u5143\u65E6","2018-12-31":"\u5143\u65E6"},2019:{"2019-01-01":"\u5143\u65E6","2019-02-04":"\u6625\u8282","2019-02-05":"\u6625\u8282","2019-02-06":"\u6625\u8282","2019-02-07":"\u6625\u8282","2019-02-08":"\u6625\u8282","2019-02-09":"\u6625\u8282","2019-02-10":"\u6625\u8282","2019-04-05":"\u6E05\u660E\u8282","2019-04-06":"\u6E05\u660E\u8282","2019-04-07":"\u6E05\u660E\u8282","2019-05-01":"\u52B3\u52A8\u8282","2019-05-02":"\u52B3\u52A8\u8282","2019-05-03":"\u52B3\u52A8\u8282","2019-05-04":"\u52B3\u52A8\u8282","2019-06-07":"\u7AEF\u5348\u8282","2019-06-08":"\u7AEF\u5348\u8282","2019-06-09":"\u7AEF\u5348\u8282","2019-09-13":"\u4E2D\u79CB\u8282","2019-09-14":"\u4E2D\u79CB\u8282","2019-09-15":"\u4E2D\u79CB\u8282","2019-10-01":"\u56FD\u5E86\u8282","2019-10-02":"\u56FD\u5E86\u8282","2019-10-03":"\u56FD\u5E86\u8282","2019-10-04":"\u56FD\u5E86\u8282","2019-10-05":"\u56FD\u5E86\u8282","2019-10-06":"\u56FD\u5E86\u8282","2019-10-07":"\u56FD\u5E86\u8282"},2020:{"2020-01-01":"\u5143\u65E6","2020-01-24":"\u6625\u8282","2020-01-25":"\u6625\u8282","2020-01-26":"\u6625\u8282","2020-01-27":"\u6625\u8282","2020-01-28":"\u6625\u8282","2020-01-29":"\u6625\u8282","2020-01-30":"\u6625\u8282","2020-04-04":"\u6E05\u660E\u8282","2020-04-05":"\u6E05\u660E\u8282","2020-04-06":"\u6E05\u660E\u8282","2020-05-01":"\u52B3\u52A8\u8282","2020-05-02":"\u52B3\u52A8\u8282","2020-05-03":"\u52B3\u52A8\u8282","2020-05-04":"\u52B3\u52A8\u8282","2020-05-05":"\u52B3\u52A8\u8282","2020-06-25":"\u7AEF\u5348\u8282","2020-06-26":"\u7AEF\u5348\u8282","2020-06-27":"\u7AEF\u5348\u8282","2020-10-01":"\u56FD\u5E86\u8282","2020-10-02":"\u56FD\u5E86\u8282","2020-10-03":"\u56FD\u5E86\u8282","2020-10-04":"\u56FD\u5E86\u8282","2020-10-05":"\u56FD\u5E86\u8282","2020-10-06":"\u56FD\u5E86\u8282","2020-10-07":"\u56FD\u5E86\u8282","2020-10-08":"\u56FD\u5E86\u8282"},2021:{"2021-01-01":"\u5143\u65E6","2021-02-11":"\u6625\u8282","2021-02-12":"\u6625\u8282","2021-02-13":"\u6625\u8282","2021-02-14":"\u6625\u8282","2021-02-15":"\u6625\u8282","2021-02-16":"\u6625\u8282","2021-02-17":"\u6625\u8282","2021-04-03":"\u6E05\u660E\u8282","2021-04-04":"\u6E05\u660E\u8282","2021-04-05":"\u6E05\u660E\u8282","2021-05-01":"\u52B3\u52A8\u8282","2021-05-02":"\u52B3\u52A8\u8282","2021-05-03":"\u52B3\u52A8\u8282","2021-05-04":"\u52B3\u52A8\u8282","2021-05-05":"\u52B3\u52A8\u8282","2021-06-12":"\u7AEF\u5348\u8282","2021-06-13":"\u7AEF\u5348\u8282","2021-06-14":"\u7AEF\u5348\u8282","2021-09-19":"\u4E2D\u79CB\u8282","2021-09-20":"\u4E2D\u79CB\u8282","2021-09-21":"\u4E2D\u79CB\u8282","2021-10-01":"\u56FD\u5E86\u8282","2021-10-02":"\u56FD\u5E86\u8282","2021-10-03":"\u56FD\u5E86\u8282","2021-10-04":"\u56FD\u5E86\u8282","2021-10-05":"\u56FD\u5E86\u8282","2021-10-06":"\u56FD\u5E86\u8282","2021-10-07":"\u56FD\u5E86\u8282"},2022:{"2022-01-01":"\u5143\u65E6","2022-01-02":"\u5143\u65E6","2022-01-03":"\u5143\u65E6","2022-01-31":"\u6625\u8282","2022-02-01":"\u6625\u8282","2022-02-02":"\u6625\u8282","2022-02-03":"\u6625\u8282","2022-02-04":"\u6625\u8282","2022-02-05":"\u6625\u8282","2022-02-06":"\u6625\u8282","2022-04-03":"\u6E05\u660E\u8282","2022-04-04":"\u6E05\u660E\u8282","2022-04-05":"\u6E05\u660E\u8282","2022-04-30":"\u52B3\u52A8\u8282","2022-05-01":"\u52B3\u52A8\u8282","2022-05-02":"\u52B3\u52A8\u8282","2022-05-03":"\u52B3\u52A8\u8282","2022-05-04":"\u52B3\u52A8\u8282","2022-06-03":"\u7AEF\u5348\u8282","2022-06-04":"\u7AEF\u5348\u8282","2022-06-05":"\u7AEF\u5348\u8282","2022-09-10":"\u4E2D\u79CB\u8282","2022-09-11":"\u4E2D\u79CB\u8282","2022-09-12":"\u4E2D\u79CB\u8282","2022-10-01":"\u56FD\u5E86\u8282","2022-10-02":"\u56FD\u5E86\u8282","2022-10-03":"\u56FD\u5E86\u8282","2022-10-04":"\u56FD\u5E86\u8282","2022-10-05":"\u56FD\u5E86\u8282","2022-10-06":"\u56FD\u5E86\u8282","2022-10-07":"\u56FD\u5E86\u8282","2022-12-31":"\u5143\u65E6"},2023:{"2023-01-01":"\u5143\u65E6","2023-01-02":"\u5143\u65E6","2023-01-21":"\u6625\u8282","2023-01-22":"\u6625\u8282","2023-01-23":"\u6625\u8282","2023-01-24":"\u6625\u8282","2023-01-25":"\u6625\u8282","2023-01-26":"\u6625\u8282","2023-01-27":"\u6625\u8282","2023-04-05":"\u6E05\u660E\u8282","2023-04-29":"\u52B3\u52A8\u8282","2023-04-30":"\u52B3\u52A8\u8282","2023-05-01":"\u52B3\u52A8\u8282","2023-05-02":"\u52B3\u52A8\u8282","2023-05-03":"\u52B3\u52A8\u8282","2023-06-22":"\u7AEF\u5348\u8282","2023-06-23":"\u7AEF\u5348\u8282","2023-06-24":"\u7AEF\u5348\u8282","2023-09-29":"\u4E2D\u79CB\u8282","2023-09-30":"\u4E2D\u79CB\u8282","2023-10-01":"\u56FD\u5E86\u8282","2023-10-02":"\u56FD\u5E86\u8282","2023-10-03":"\u56FD\u5E86\u8282","2023-10-04":"\u56FD\u5E86\u8282","2023-10-05":"\u56FD\u5E86\u8282","2023-10-06":"\u56FD\u5E86\u8282"},2024:{"2024-01-01":"\u5143\u65E6","2024-02-10":"\u6625\u8282","2024-02-11":"\u6625\u8282","2024-02-12":"\u6625\u8282","2024-02-13":"\u6625\u8282","2024-02-14":"\u6625\u8282","2024-02-15":"\u6625\u8282","2024-02-16":"\u6625\u8282","2024-02-17":"\u6625\u8282","2024-04-04":"\u6E05\u660E\u8282","2024-04-05":"\u6E05\u660E\u8282","2024-04-06":"\u6E05\u660E\u8282","2024-05-01":"\u52B3\u52A8\u8282","2024-05-02":"\u52B3\u52A8\u8282","2024-05-03":"\u52B3\u52A8\u8282","2024-05-04":"\u52B3\u52A8\u8282","2024-05-05":"\u52B3\u52A8\u8282","2024-06-10":"\u7AEF\u5348\u8282","2024-09-15":"\u4E2D\u79CB\u8282","2024-09-16":"\u4E2D\u79CB\u8282","2024-09-17":"\u4E2D\u79CB\u8282","2024-10-01":"\u56FD\u5E86\u8282","2024-10-02":"\u56FD\u5E86\u8282","2024-10-03":"\u56FD\u5E86\u8282","2024-10-04":"\u56FD\u5E86\u8282","2024-10-05":"\u56FD\u5E86\u8282","2024-10-06":"\u56FD\u5E86\u8282","2024-10-07":"\u56FD\u5E86\u8282"}},a={2018:{"2018-02-11":"\u8865\u6625\u8282","2018-02-24":"\u8865\u6625\u8282","2018-04-08":"\u8865\u6E05\u660E\u8282","2018-04-28":"\u8865\u52B3\u52A8\u8282","2018-09-29":"\u8865\u56FD\u5E86\u8282","2018-09-30":"\u8865\u56FD\u5E86\u8282","2018-12-29":"\u8865\u5143\u65E6"},2019:{"2019-02-02":"\u8865\u6625\u8282","2019-02-03":"\u8865\u6625\u8282","2019-04-28":"\u8865\u52B3\u52A8\u8282","2019-05-05":"\u8865\u52B3\u52A8\u8282","2019-09-29":"\u8865\u56FD\u5E86\u8282","2019-10-12":"\u8865\u56FD\u5E86\u8282"},2020:{"2020-01-19":"\u8865\u6625\u8282","2020-02-01":"\u8865\u6625\u8282","2020-04-26":"\u8865\u52B3\u52A8\u8282","2020-05-09":"\u8865\u52B3\u52A8\u8282","2020-06-28":"\u8865\u7AEF\u5348\u8282","2020-09-27":"\u8865\u56FD\u5E86\u8282","2020-10-10":"\u8865\u56FD\u5E86\u8282"},2021:{"2021-02-07":"\u8865\u6625\u8282","2021-02-20":"\u8865\u6625\u8282","2021-04-25":"\u8865\u52B3\u52A8\u8282","2021-05-08":"\u8865\u52B3\u52A8\u8282","2021-09-18":"\u8865\u4E2D\u79CB\u8282","2021-09-26":"\u8865\u56FD\u5E86\u8282","2021-10-09":"\u8865\u56FD\u5E86\u8282"},2022:{"2022-01-29":"\u8865\u6625\u8282","2022-01-30":"\u8865\u6625\u8282","2022-04-02":"\u8865\u6E05\u660E\u8282","2022-04-24":"\u8865\u52B3\u52A8\u8282","2022-05-07":"\u8865\u52B3\u52A8\u8282","2022-10-08":"\u8865\u56FD\u5E86\u8282","2022-10-09":"\u8865\u56FD\u5E86\u8282"},2023:{"2023-01-28":"\u8865\u6625\u8282","2023-01-29":"\u8865\u6625\u8282","2023-04-23":"\u8865\u52B3\u52A8\u8282","2023-05-06":"\u8865\u52B3\u52A8\u8282","2023-06-25":"\u8865\u7AEF\u5348\u8282","2023-10-07":"\u8865\u56FD\u5E86\u8282","2023-10-08":"\u8865\u56FD\u5E86\u8282"},2024:{"2024-02-04":"\u8865\u6625\u8282","2024-02-18":"\u8865\u6625\u8282","2024-04-07":"\u8865\u6E05\u660E\u8282","2024-04-28":"\u8865\u52B3\u52A8\u8282","2024-05-11":"\u8865\u52B3\u52A8\u8282","2024-09-14":"\u8865\u4E2D\u79CB\u8282","2024-09-29":"\u8865\u56FD\u5E86\u8282","2024-10-12":"\u8865\u56FD\u5E86\u8282"}};function y(r,e){switch(e){case"YYYY-MM-DD":{let n=r.getFullYear(),o=r.getMonth()+1,t=r.getDate();return`${n}-${o<10?"0"+o:o}-${t<10?"0"+t:t}`}default:break}}function d(r){let e=r.getFullYear().toString(),n=i[e],o=a[e];if(!n||!o)throw new Error("Over scope");let t=y(r,"YYYY-MM-DD");if(t){if(n[t])return!0;if(o[t])return!1}let s=r.getDay();return s<1||s>5}function p(r){let e=r.getFullYear().toString(),n=i[e],o=a[e];if(!n||!o)throw new Error("Over scope");let t=y(r,"YYYY-MM-DD");if(t){if(o[t])return!0;if(n[t])return!1}let s=r.getDay();return s>0&&s<6}function w(){return["\u5143\u65E6","\u6625\u8282","\u6E05\u660E\u8282","\u7AEF\u5348\u8282","\u52B3\u52A8\u8282","\u4E2D\u79CB\u8282","\u56FD\u5E86\u8282"]}function E(r,e=new Date){let n=e.getFullYear().toString(),o=i[n];if(!o)throw new Error("Over scope");let t=[];return Object.keys(o).forEach(s=>{o[s]===r&&t.push(s)}),t}
