const t=(r,n)=>`enum ${n} {
${Object.keys(r).map(e=>`  ${e} = "${r[e]}",`).join(`\r
`)+`\r
}`}`;export{t as s};
