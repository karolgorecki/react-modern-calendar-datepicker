(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{tRws:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n),s=t("dgKS"),r=t("Kvkj");a.default=function(){return c.a.createElement(s.a,{title:"TypeScript"},c.a.createElement("p",{className:"Docs__paragraph"},"This package ships with",c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:"https://www.typescriptlang.org/"}," TypeScript "),"typings out of the box. As TypeScript is a typed superset of JavaScript, you can use this package as you used to in JavaScript but there are some pitfalls that you should notice."),c.a.createElement("h2",{className:"Docs__titleSecondary"},"Type-safety with React Hooks"),c.a.createElement("p",{className:"Docs__paragraph"},"It's important to define generic type variable explicitly in ",c.a.createElement("code",{className:"custom-code"},"useState")," hook when you want to use",c.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:" https://reactjs.org/docs/hooks-intro.html"}," React hooks "),"with react-modern-calendar-datepicker in TypeScript."),c.a.createElement("p",{className:"Docs__paragraph"},"You can use ",c.a.createElement("code",{className:"custom-code"},"Day")," and ",c.a.createElement("code",{className:"custom-code"},"DayRange")," types that has been exported by this package to define generic type variable."),c.a.createElement(r.a,{language:"javascript"},"\nimport React from 'react'\nimport DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'\n\nfunction App() {\n  const [day, setDay] = React.useState<DayValue>(null);\n  const [dayRange, setDayRange] = React.useState<DayRange>({\n    from: null,\n    to: null\n  });\n  const [days, setDays] = React.useState<Day[]>([]);\n\n  return (\n    <>\n      <DatePicker value={day} onChange={setDay} />\n      <DatePicker value={dayRange} onChange={setDayRange} />\n      <DatePicker value={days} onChange={setDays} />\n    </>\n  );\n}\n      "))}}}]);
//# sourceMappingURL=component---src-pages-docs-typescript-js-4927f334890210dccd4f.js.map