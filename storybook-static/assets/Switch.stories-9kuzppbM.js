import{u as s}from"./jsxRuntime.module-CxGcVytw.js";import{d as i}from"./hooks.module-B72hWW-M.js";import{c as m}from"./clsx-B-dksMZM.js";import"./iframe-COSYg98x.js";import"./preload-helper-PPVm8Dsz.js";const u="_track_11tdi_10",l="_thumb_11tdi_26",k="_checked_11tdi_38",p="_status_11tdi_46",c={switch:"_switch_11tdi_1",track:u,thumb:l,checked:k,status:p},d=({checked:e,onChange:n})=>s("div",{className:m(c.switch,e&&c.checked),onClick:()=>n(!e),children:s("div",{className:c.track,children:[s("div",{className:c.thumb}),s("div",{className:c.status,children:[" ",e?"On":"Off"," "]})]})}),g=()=>console.log("action fired"),v={title:"Components/Switch",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"}},args:{onChange:g}},t={args:{checked:!1}},r={args:{checked:!0}},a={args:{checked:!1},render:e=>{const[n,h]=i(e.checked||!1);return s(d,{checked:n,onChange:o=>{h(o),e.onChange?.(o)}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked || false);
    return <Switch checked={checked} onChange={newChecked => {
      setChecked(newChecked);
      args.onChange?.(newChecked);
    }} />;
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","Checked","Interactive"];export{r as Checked,t as Default,a as Interactive,b as __namedExportsOrder,v as default};
