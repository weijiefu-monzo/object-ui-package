import{u as e}from"./jsxRuntime.module-CxGcVytw.js";import"./compat.module-D4i00Yst.js";import{g as v,d as h}from"./hooks.module-B72hWW-M.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";const b="_field_b1r62_1",f="_label_b1r62_8",g="_select_b1r62_16",_="_placeholder_b1r62_36",t={field:b,label:f,select:g,placeholder:_},u=({id:r,label:l,placeholder:a,options:o,value:s,onChange:p})=>{const i=s!==void 0&&s!=="",m=v(),d=r??m;return e("div",{className:t.field,children:[l&&e("label",{className:t.label,htmlFor:d,children:l}),e("select",{id:d,className:`${t.select} ${i?"":t.placeholder}`,value:s??"",onChange:p,children:[a&&!i&&e("option",{value:"",disabled:!0,hidden:!0,children:a}),o.map(c=>e("option",{value:c.value,children:c.label},c.value))]})]})},F={title:"Components/Select",component:u,argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"}},tags:["autodocs"]},x=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}],n={args:{label:"Fruit",placeholder:"Choose a fruit",options:x},render:r=>{const[l,a]=h("");return e("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e(u,{...r,value:l,onChange:o=>a(o.target.value)}),e("div",{children:["Current value: ",l||"(none)"]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Fruit",
    placeholder: "Choose a fruit",
    options: sampleOptions
  },
  render: args => {
    const [value, setValue] = React.useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 32
    }}>
        <Select {...args} value={value} onChange={e => setValue((e.target as HTMLSelectElement).value)} />
        <div>Current value: {value || "(none)"}</div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const N=["Default"];export{n as Default,N as __namedExportsOrder,F as default};
