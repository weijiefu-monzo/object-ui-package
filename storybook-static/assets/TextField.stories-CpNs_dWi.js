import{u as e}from"./jsxRuntime.module-CxGcVytw.js";import"./compat.module-D4i00Yst.js";import{g as d,d as p}from"./hooks.module-B72hWW-M.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";const m="_textField_vy6h9_1",v="_label_vy6h9_7",x="_input_vy6h9_14",o={textField:m,label:v,input:x},i=({id:n,label:t,placeholder:a,value:r,onChange:c})=>{const u=d(),s=n??u;return e("div",{className:o.textField,children:[t&&e("label",{className:o.label,htmlFor:s,children:t}),e("input",{id:s,className:o.input,placeholder:a,value:r,onChange:c})]})},y={title:"Components/TextField",component:i,argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"}},tags:["autodocs"]},l={args:{label:"Label"},render:n=>{const[t,a]=p("");return e("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e(i,{...n,value:t,onChange:r=>a(r.target.value)}),e("div",{children:["Current value: ",t]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label"
  },
  render: args => {
    const [value, setValue] = React.useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 32
    }}>
        <TextField {...args} value={value} onChange={e => setValue((e.target as HTMLInputElement).value)} />
        <div>Current value: {value}</div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const F=["Default"];export{l as Default,F as __namedExportsOrder,y as default};
