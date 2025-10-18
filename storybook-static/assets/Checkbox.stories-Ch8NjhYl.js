import{u as e}from"./jsxRuntime.module-CxGcVytw.js";import"./compat.module-D4i00Yst.js";import{d as h}from"./hooks.module-B72hWW-M.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";const p="_checkbox_wfovt_1",b="_input_wfovt_9",m="_box_wfovt_15",i="_label_wfovt_47",o={checkbox:p,input:b,box:m,label:i},l=({id:a,label:t,checked:n,onChange:s})=>{const r=a;return e("label",{className:o.checkbox,htmlFor:r,children:[e("input",{id:r,type:"checkbox",className:o.input,checked:!!n,onChange:d=>s?.(d.target.checked)}),e("span",{className:o.box,"aria-hidden":"true"}),t&&e("span",{className:o.label,children:t})]})},f={title:"Components/Checkbox",component:l,argTypes:{label:{control:"text"},checked:{control:"boolean"}},tags:["autodocs"]},c={args:{label:"I agree"},render:a=>{const[t,n]=h(!1);return e(l,{...a,checked:t,onChange:s=>n(s)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree"
  },
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={val => setChecked(val)} />;
  }
}`,...c.parameters?.docs?.source}}};const C=["Default"];export{c as Default,C as __namedExportsOrder,f as default};
